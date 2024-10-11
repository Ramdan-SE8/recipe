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
import CardList from "./components/CardList";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems((prevState) => [
      ...prevState,
      {
        id: 1,
        name: "Basil Garlic Beef Stir-fry",
        ingredients: [
          "Olive oil",
          "Garlic cloves",
          "Fresh basil",
          "Tomato paste",
          "Ground beef",
          "Parmesan cheese",
          "Button mushrooms",
          "Soy sauce",
          "Cumin powder",
          "Lemon zest",
        ],
        steps: [
          "Finely chop garlic, fresh basil, and slice button mushrooms, then mix soy sauce, cumin, and lemon zest in a bowl.",
          "Heat olive oil in a skillet over medium-high heat, then add ground beef and cook until browned.",
          "Add chopped garlic and sliced mushrooms to the skillet, sautéing until the mushrooms are tender and garlic is fragrant.",
          "Pour the soy sauce mixture over the beef and vegetables, stirring in the fresh basil for another minute.",
          "Remove from heat and serve hot, garnished with Parmesan cheese and additional basil, over rice or pasta.",
        ],
        image: "/src/assets/images/image.png",
      },
    ]);
  }, []);

  console.log(items);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<CardList />} />
            <Route path="about" element={<About />} />
            <Route path="add" element={<AddRecipe />} />

            <Route
              path="recipe"
              element={
                items.length > 0 ? (
                  <Recipe itemId={items[0].id} items={items} />
                ) : (
                  <p>Loading recipe...</p>
                )
              }
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
