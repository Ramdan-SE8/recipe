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
// import dummyCardList from "./components/CardList";
import Card from "./components/Card";
import recipeAPI from "./api/recipe";

function App() {
  const [items, setItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getRecipe = async () => {
      const response = await recipeAPI.get("/recipes");
      console.log(response);
      setItems(response.data);
    };
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
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Card items={items} favorites={favorites} toggleFavorite={toggleFavorite} />} />
            <Route path="about" element={<About />} />
            <Route path="add" element={<AddRecipe />} />
            <Route path="recipe/:id" element={<Recipe items={items} favorites={favorites} toggleFavorite={toggleFavorite} />} />
            {/* <Route path="fav" element={<Fav />} /> */}
            <Route
              path="fav"
              element={<Fav favoriteItems={items.filter((item) => favorites.includes(item.id))} />}
            />
            
            <Route path="profile" element={<Profile />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
