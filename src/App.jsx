import { useState, useEffect } from "react";
import "./App.css";
import Recipe from "./components/Recipe";

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
      {items.length > 0 ? (
        <Recipe itemId={items[0].id} items={items} />
      ) : (
        <p>Loading recipe...</p>
      )}
    </>
  );
}

export default App;
