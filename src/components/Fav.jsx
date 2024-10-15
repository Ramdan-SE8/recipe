import styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";

const Fav = ({ favorites, toggleFavorite, favoriteItems }) => {
  const navigate = useNavigate();
  if (favoriteItems.length === 0) {
    return <p>You have no favorite items yet.</p>;
  }

  return (
    <>
      <h1>Your Favorite Recipes</h1>
      <div className={styles.allCards}>
        {favoriteItems.map((item) => (
          <div key={item.id} className={styles.cardContainer}>
            <img src={item.imgSrc} alt={item.title} />
            <h1>{item.title}</h1>
            <p>{item.description}</p>
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
          </div>
        ))}
      </div>
    </>
  );
};

export default Fav;
