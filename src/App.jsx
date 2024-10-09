import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Recipe from "./components/Recipe";
import { Card } from "./components/Card";
import NavBar from "./components/NavBar";
import Root from "./components/Root";
import About from "./components/About";
import Contact from "./components/ContactUs";
import Fav from "./components/Fav";
import Profile from "./components/Profile";
import Login from "./components/Login";

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
            <Route index element={<Card />} />
            <Route path="about" element={<About />} />
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
            <Route path="contact" element={<Contact />} />
            <Route path="fav" element={<Fav />} />
            <Route path="profile" element={<Profile />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <div className="App">
        <div className="col">
          <Card
            imgSrc="./src/assets/images/image.png"
            imgAlt="Card Image 1"
            title="Recipe Name"
            description="This is the recipe description section. You can add more details about the recipe here"
            buttonText="Learn More"
            link="card2"
          />
          <Card
            imgSrc="./src/assets/images/beefchilli.jpg"
            imgAlt="Card Image 2"
            title="Recipe Name"
            description="This is the recipe description section. You can add more details about the recipe here"
            buttonText="Learn More"
            link="card2"
          />
          <Card
            imgSrc="./src/assets/images/carrotmuffin.jpg"
            imgAlt="Card Image 3"
            title="Recipe Name"
            description="This is the recipe description section. You can add more details about the recipe here"
            buttonText="Learn More"
            link="card2"
          />
        </div>
        <div className="col">
          <Card
            imgSrc="./src/assets/images/djonmustardsalmon.jpg"
            imgAlt="Card Image 1"
            title="Recipe Name"
            description="This is the recipe description section. You can add more details about the recipe here"
            buttonText="Learn More"
            link="card1"
          />
          <Card
            imgSrc="./src/assets/images/eggplant.jpeg"
            imgAlt="Card Image 3"
            title="Recipe Name"
            description="This is the recipe description section. You can add more details about the recipe here"
            buttonText="Learn More"
            link="card2"
          />
          <Card
            imgSrc="./src/assets/images/garlicpotatoes.jpg"
            imgAlt="Card Image 3"
            title="Recipe Name"
            description="This is the recipe description section. You can add more details about the recipe here"
            buttonText="Learn More"
            link="card2"
          />
        </div>
        <div className="col">
          <Card
            imgSrc="./src/assets/images/image.png"
            imgAlt="Card Image 1"
            title="Recipe Name"
            description="This is the recipe description section. You can add more details about the recipe here"
            buttonText="Learn More"
            link="card2"
          />
          <Card
            imgSrc="./src/assets/images/beefchilli.jpg"
            imgAlt="Card Image 2"
            title="Recipe Name"
            description="This is the recipe description section. You can add more details about the recipe here"
            buttonText="Learn More"
            link="card2"
          />
          <Card
            imgSrc="./src/assets/images/carrotmuffin.jpg"
            imgAlt="Card Image 3"
            title="Recipe Name"
            description="This is the recipe description section. You can add more details about the recipe here"
            buttonText="Learn More"
            link="card2"
          />
        </div>
      </div> */}
    </>
  );
}

export default App;
