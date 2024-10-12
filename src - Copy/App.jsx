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
import dummyCardList from "./components/CardList";
import Card from "./components/Card";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(dummyCardList);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Card items={items} />} />
            <Route path="about" element={<About />} />
            <Route path="add" element={<AddRecipe />} />
            <Route path="recipe/:id" element={<Recipe items={items} />} />
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
