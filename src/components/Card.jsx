import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { IsEditingAndLoadingContext } from "../context/IsLoadingandEditingContext";

export const Card = ({ items, favorites, toggleFavorite }) => {
  const navigate = useNavigate();
  const userCtx = useContext(UserContext);
  const { isLoggedIn } = userCtx;
  const editCtx = useContext(IsEditingAndLoadingContext);

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 g-4">
        {items.map((item, index) => (
          <div key={index} className="col">
            <div className="card h-100">
              <img
                src={item.imgSrc}
                alt={item.title}
                className={`card-img-top ${styles.cardContainerImage}`}
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                {isLoggedIn && (
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
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
