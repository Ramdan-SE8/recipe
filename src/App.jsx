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

function App() {
  const [items, setItems] = useState([]);
  const [favorites, setFavorites] = useState([]);

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

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((favId) => favId !== id)
        : [...prevFavorites, id]
    );
  };

  return (
    <>
      <BrowserRouter>
        <IsEditingProvider>
          <Routes>
            <Route path="/" element={<Root />}>
              <Route
                index
                element={
                  <Card
                    items={items}
                    favorites={favorites}
                    toggleFavorite={toggleFavorite}
                  />
                }
              />
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
                    <Recipe
                      items={items}
                      favorites={favorites}
                      toggleFavorite={toggleFavorite}
                      refreshRecipes={getRecipe}
                    />
                  </ProtectedRoute>
                }
              />
              {/* <Route path="fav" element={<Fav />} /> */}
              <Route
                path="fav"
                element={
                  <ProtectedRoute>
                    <Fav
                      favoriteItems={items.filter((item) =>
                        favorites.includes(item.id)
                      )}
                      favorites={favorites}
                      toggleFavorite={toggleFavorite}
                    />
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
            </Route>
          </Routes>
        </IsEditingProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
