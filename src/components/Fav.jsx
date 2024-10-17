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
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-sm-1 g-4">
          {favoriteItems.map((item) => (
            <div key={item.id} className="col">
              <div className="card h-100">
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className={`card-img-top ${styles.cardContainerImage}`}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <div className={styles.allButtons}>
                    <button
                      className="btn btn-primary"
                      onClick={(event) => {
                        event.preventDefault();
                        navigate(`/recipe/${item.id}`);
                      }}
                      type="button"
                    >
                      Learn More
                    </button>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => toggleFavorite(item.id)}
                    >
                      {favorites.includes(item.id) ? "Unfavorite" : "Favorite"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Fav;
