import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";

export const Card = ({ items,  favorites, toggleFavorite }) => {
  const navigate = useNavigate();

  const handlersShowRecipe = (event, id) => {
    event.preventDefault();
    navigate(`/recipe/${id}`);
  };

  return (
    <div className={styles.allCards}>
      {items.map((item, index) => (
        <div key={index} className={styles.cardContainer}>
          <img src={item.imgSrc} alt={item.title} />
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <button 
            onClick={(event) => handlersShowRecipe(event, item.id)} // Correct binding
            type="button"
          >
          Learn More
          </button>
          {/* <button onClick={() => handlersShowRecipe(event, item.id)}
            type="button">
            Learn More
          </button> */}
          <button 
            onClick={() => toggleFavorite(item.id)}>
            {favorites.includes(item.id) ? "Unfavorite" : "Favorite"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;
