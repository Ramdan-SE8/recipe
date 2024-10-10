import "./Card.css";
import { Card } from "./Card";
import { useState } from "react";

function CardList() {
  const defaultList = [
    {
      //id: 1,
      imgSrc: "./src/assets/images/image.png",
      imgAlt: "Card Image",
      title: "Recipe 1",
      description:
        "This is the recipe description section. You can add more details about the recipe here",
      buttonText: "Learn More",
      link: "Recipe",
    },
    {
      //id: 2,
      imgSrc: "./src/assets/images/beefchilli.jpg",
      imgAlt: "Card Image",
      title: "Recipe 2",
      description:
        "This is the recipe description section. You can add more details about the recipe here",
      buttonText: "Learn More",
      link: "Recipe",
    },
    {
      //id: 1,
      imgSrc: "./src/assets/images/carrotmuffin.jpg",
      imgAlt: "Card Image",
      title: "Recipe 3",
      description:
        "This is the recipe description section. You can add more details about the recipe here",
      buttonText: "Learn More",
      link: "Recipe",
    },
    {
      //id: 2,
      imgSrc: "./src/assets/images/djonmustardsalmon.jpg",
      imgAlt: "Card Image",
      title: "Recipe 4",
      description:
        "This is the recipe description section. You can add more details about the recipe here",
      buttonText: "Learn More",
      link: "Recipe",
    },
    {
      //id: 1,
      imgSrc: "./src/assets/images/eggplant.jpeg",
      imgAlt: "Card Image",
      title: "Recipe 5",
      description:
        "This is the recipe description section. You can add more details about the recipe here",
      buttonText: "Learn More",
      link: "Recipe",
    },

    {
      //id: 1,
      imgSrc: "./src/assets/images/garlicpotatoes.jpg",
      imgAlt: "Card Image",
      title: "Recipe 6",
      description:
        "This is the recipe description section. You can add more details about the recipe here",
      buttonText: "Learn More",
      link: "Recipe",
    },
    {
      //id: 2,
      imgSrc: "./src/assets/images/Meatloafburger.jpg",
      imgAlt: "Card Image",
      title: "Recipe 7",
      description:
        "This is the recipe description section. You can add more details about the recipe here",
      buttonText: "Learn More",
      link: "Recipe",
    },
    {
      //id: 1,
      imgSrc: "./src/assets/images/Sloppy-Joes.jpg",
      imgAlt: "Card Image",
      title: "Recipe 8",
      description:
        "This is the recipe description section. You can add more details about the recipe here",
      buttonText: "Learn More",
      link: "Recipe",
    },
    {
      //id: 2,
      imgSrc: "./src/assets/images/smokedsalmonbowl.jpg",
      imgAlt: "Card Image",
      title: "Recipe 9",
      description:
        "This is the recipe description section. You can add more details about the recipe here",
      buttonText: "Learn More",
      link: "Recipe",
    },
    {
      //id: 1,
      imgSrc: "./src/assets/images/ricenoodles.jpg",
      imgAlt: "Card Image",
      title: "Recipe 10",
      description:
        "This is the recipe description section. You can add more details about the recipe here",
      buttonText: "Learn More",
      link: "Recipe",
    },
  ];

  const [cardItems, setCardItems] = useState(defaultList);

  return (
    <>
      <div className="app-card">
        <div className="col">
          {cardItems.map(
            (obj, index) =>
              index < 3 && (
                <Card
                  key={index}
                  imgSrc={obj.imgSrc}
                  imgAlt={obj.imgAlt}
                  title={obj.title}
                  description={obj.description}
                  buttonText={obj.buttonText}
                  link={obj.link}
                />
              )
          )}
        </div>
        <div className="col">
          {cardItems.map(
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
                  link={obj.link}
                />
              )
          )}
        </div>
        <div className="col">
          {cardItems.map(
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
                  link={obj.link}
                />
              )
          )}
        </div>
        <div className="col">
          {cardItems.map(
            (obj, index) =>
              index > 8 && (
                <Card
                  key={index}
                  imgSrc={obj.imgSrc}
                  imgAlt={obj.imgAlt}
                  title={obj.title}
                  description={obj.description}
                  buttonText={obj.buttonText}
                  link={obj.link}
                />
              )
          )}
        </div>
      </div>
    </>
  );
}

export default CardList;
