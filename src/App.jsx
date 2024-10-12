import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Recipe from "./components/Recipe";
import { Card } from "./components/Card";

function App() {
  const [items, setItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setItems(dummyCardList);
  }, []);

  console.log(items);
  return (
    <>
      {items.length > 0 ? (
        <Recipe itemId={items[0].id} items={items} />
      ) : (
        <p>Loading recipe...</p>
      )}

<div className="App">
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
      
    </div>
    </>
  );
}


export default App;
