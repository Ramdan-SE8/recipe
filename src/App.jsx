import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Recipe from "./components/Recipe";
import Root from "./components/Root";
import About from "./components/About";
import Fav from "./components/Fav";
import Profile from "./components/Profile";
import Login from "./components/Login";
import AddRecipe from "./components/AddRecipe";
import Card from "./components/Card";
import recipeAPI from "./api/recipe";
import { IsEditingProvider } from "./context/isEditingContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Default from "./components/Default";

function App() {
  const [items, setItems] = useState([]);

  // API to get all the recipes
  const getRecipe = async () => {
    try {
      const response = await recipeAPI.get("/recipe");
      setItems(response.data);
    } catch (error) {
      console.error("Error getting recipes:", error);
    }
  };

  // using useEffect to only display the recipes on first render
  useEffect(() => {
    getRecipe();
  }, []);

  return (
    <>
      <BrowserRouter>
        <IsEditingProvider>
          <Routes>
            <Route path="/" element={<Root />}>
              <Route index element={<Card items={items} />} />
              <Route path="about" element={<About />} />
              <Route
                path="add"
                element={
                  <ProtectedRoute>
                    <AddRecipe refreshRecipes={getRecipe} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="recipe/:id"
                element={
                  <ProtectedRoute>
                    <Recipe items={items} refreshRecipes={getRecipe} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="fav"
                element={
                  <ProtectedRoute>
                    <Fav />
                  </ProtectedRoute>
                }
              />
              <Route
                path="profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route path="login" element={<Login />} />
              <Route path="*" element={<Default />} />
            </Route>
          </Routes>
        </IsEditingProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
