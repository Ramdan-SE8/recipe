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

function App() {
  const [items, setItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const getRecipe = async () => {
    try {
      const response = await recipeAPI.get("/recipe");
      setItems(response.data);
    } catch (error) {
      console.error("Error getting recipes:", error);
    }
  };

  useEffect(() => {
    getRecipe();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Card items={items} />} />
            <Route path="about" element={<About />} />
            <Route
              path="add"
              element={<AddRecipe refreshRecipes={getRecipe} />}
            />
            <Route
              path="recipe/:id"
              element={<Recipe items={items} refreshRecipes={getRecipe} />}
            />
            <Route path="fav" element={<Fav />} />
            <Route path="profile" element={<Profile />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
