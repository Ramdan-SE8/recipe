import "./Card.css";
import { Card } from "./Card";
import { useState } from "react";

function CardList() {

  const [state, setState]=useState();

  const Button = ({ handler, children }) => {
    return (
      <button type="button" onClick={handler}>
        {children}
      </button>
    );
  }

const items = {
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
}


  const dummyCardList = [
    {
      id: 1,
      imgSrc: "./src/assets/images/image.png",
      imgAlt: "Card Image",
      title: "Stir Fried Noodles",
      description:
        "This is the recipe description section. You can mention general details about the recipe here",
      buttonText: "Learn More",
      
    },
    {
      id: 2,
      imgSrc: "./src/assets/images/eggplant.jpg",
      imgAlt: "Card Image",
      title: "Seared Eggplant",
      description:
        "This is the recipe description section. You can mention general details about the recipe here",
      buttonText: "Learn More",
      
    },
    {
      id: 3,
      imgSrc: "./src/assets/images/carrotmuffin.jpg",
      imgAlt: "Card Image",
      title: "Savoury Muffin",
      description:
        "This is the recipe description section. You can mention general details about the recipe here",
      buttonText: "Learn More",
      
    },
    {
      id: 4,
      imgSrc: "./src/assets/images/djonmustardsalmon.jpg",
      imgAlt: "Card Image",
      title: "Recipe 4",
      description:
        "This is the recipe description section. You can mention general details about the recipe here",
      buttonText: "Learn More",
      
    },
    {
      id: 5,
      imgSrc: "./src/assets/images/ricenoodles.jpg",
      imgAlt: "Card Image",
      title: "Recipe 5",
      description:
        "This is the recipe description section. You can mention general details about the recipe here",
      buttonText: "Learn More",
      
    },

    {
      id: 6,
      imgSrc: "./src/assets/images/garlicpotatoes.jpg",
      imgAlt: "Card Image",
      title: "Recipe 6",
      description:
        "This is the recipe description section. You can mention general details about the recipe here",
      buttonText: "Learn More",
      
    },
    {
      id: 7,
      imgSrc: "./src/assets/images/Meatloafburger.jpg",
      imgAlt: "Card Image",
      title: "Recipe 7",
      description:
        "This is the recipe description section. You can mention general details about the recipe here",
      buttonText: "Learn More",
      
    },
    {
      id: 8,
      imgSrc: "./src/assets/images/Sloppy-Joes.jpg",
      imgAlt: "Card Image",
      title: "Recipe 8",
      description:
        "This is the recipe description section. You can mention general details about the recipe here",
      buttonText: "Learn More",
      
    },
    {
      id: 9,
      imgSrc: "./src/assets/images/smokedsalmonbowl.jpg",
      imgAlt: "Card Image",
      title: "Recipe 9",
      description:
        "This is the recipe description section. You can mention general details about the recipe here",
      buttonText: "Learn More",
     
    },
    {
      id: 10,
      imgSrc: "./src/assets/images/beefchilli.jpg",
      imgAlt: "Card Image",
      title: "Recipe 10",
      description:
        "This is the recipe description section. You can mention general details about the recipe here",
      buttonText: "Learn More",
     
    },
  ];

  

  return (
    <>
      {state===undefined && <div className="app-card">
        <div className="col">
          {dummyCardList.map(
            (obj, index) =>
              index < 3 && (
                <Card
                  key={index}
                  
                  imgSrc={obj.imgSrc}
                  imgAlt={obj.imgAlt}
                  title={obj.title}
                  description={obj.description}
                  buttonText={obj.buttonText}
                  
                  handler={()=>{setState(obj.id)}}
                />
              )
          )}
        </div>
        <div className="col">
          {dummyCardList.map(
            (obj, index) =>
              index > 2 &&
              index < 6 && (
                <Card
                key={index}
                
                imgSrc={obj.imgSrc}
                imgAlt={obj.imgAlt}
                title={obj.title}
                description={obj.description}
                buttonText={obj.buttonText}
                
                handler={()=>{setState(obj.id)}}
              />
              )
          )}
        </div>
        <div className="col">
          {dummyCardList.map(
            (obj, index) =>
              index > 5 &&
              index < 9 && (
                <Card
                  key={index}
                  
                  imgSrc={obj.imgSrc}
                  imgAlt={obj.imgAlt}
                  title={obj.title}
                  description={obj.description}
                  buttonText={obj.buttonText}
                  
                  handler={()=>{setState(obj.id)}}
                />
              )
          )}
        </div>
        <div className="col">
          {dummyCardList.map(
            (obj, index) =>
              index > 8 && (
                <Card
                  key={index}
                  
                  imgSrc={obj.imgSrc}
                  imgAlt={obj.imgAlt}
                  title={obj.title}
                  description={obj.description}
                  buttonText={obj.buttonText}
                  
                  handler={()=>{setState(obj.id)}}
                />
              )
          )}
        </div>
      </div>}
      <div>{state!==undefined && <h1>The selected item returns id of {state} which may be used as an index to select page route for recipe </h1>}</div>
    </>
  );
}

export default CardList;
