import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const Card = ({ items, favorites, toggleFavorite }) => {
  const navigate = useNavigate();
  const userCtx = useContext(UserContext);
  const { isLoggedIn } = userCtx;

  return (
    <div className={styles.allCards}>
      {items.map((item, index) => (
        <div key={index} className={styles.cardContainer}>
          <img src={item.imgSrc} alt={item.title} />
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          {isLoggedIn && (
            <div className={styles.allButtons}>
              <button
                onClick={(event) => {
                  event.preventDefault();
                  navigate(`/recipe/${item.id}`);
                }}
                type="button"
              >
                Learn More
              </button>
              <button onClick={() => toggleFavorite(item.id)}>
                {favorites.includes(item.id) ? "Unfavorite" : "Favorite"}
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Card;
