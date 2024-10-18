import { useNavigate, useParams } from "react-router-dom";
import styles from "/src/components/Recipe.module.css";
import recipeAPI from "../api/recipe";
import { useContext } from "react";
import { IsEditingAndLoadingContext } from "../context/IsLoadingandEditingContext";

const Recipe = ({ items, favorites, toggleFavorite, refreshRecipes }) => {
  // Get the id from the URL params
  const { id } = useParams();

  const navigate = useNavigate();
  const editCtx = useContext(IsEditingAndLoadingContext);
  const { setIsEditing } = editCtx;

  // Find the selected item based on id passed from params
  const selectedItem = items.find((item) => item.id === id);

  // handler to call API to delete entry
  const handlerDelete = async () => {
    try {
      const response = await recipeAPI.delete(`/recipe/${id}`);
      alert(`Item deleted: ${response.data.title}`); // Show alert with the deleted item's title
    } catch (error) {
      console.error("Error deleting recipe:", error);
      alert("Failed to delete the recipe. Please try again."); // Show error alert
    } finally {
      refreshRecipes();
      navigate(`/`);
    }
  };

  const isFavorite = favorites.includes(id);

  console.log("Selected Item:", selectedItem);
  const handlerEdit = async () => {
    try {
      const response = await recipeAPI.get(`/recipe/${id}`);
      const recipeToEdit = response.data;
      setIsEditing(true);
      navigate(`/add`, { state: { recipeToEdit } });
    } catch (error) {
      console.error("Error deleting recipe:", error);
      alert("Failed to delete the recipe. Please try again."); // Show error alert
    }
  };

  // return the details of selected item
  if (!selectedItem) {
    return <p>item not found!</p>;
  }
  return (
    <div className={styles.container}>
      <div>
        <img src={selectedItem.imgSrc} alt={selectedItem.imgAlt}></img>
        <h1>{selectedItem.title.toUpperCase()}</h1>
        <p>{selectedItem.description}</p>
      </div>
      <div className={styles.details}>
        <div>
          <h2>INGREDIENTS</h2>
          <ul className={styles.ingredientsList}>
            {selectedItem.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>STEPS</h2>
          <ul className={styles.steps}>
            {selectedItem.steps.map((item, index) => (
              <li key={index}>
                <div className={styles.stepNo}>Steps {index + 1}:</div>
                <div className={styles.stepDet}>{item}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* buttons to navigate back home, delete entry and edit entry */}
      <div className={styles.buttonGroup}>
        <button onClick={() => toggleFavorite(selectedItem.id)}>
          {isFavorite ? "Unfavorite" : "Favorite"}
        </button>
        <button
          onClick={() => {
            navigate(`/`);
          }}
        >
          Home
        </button>
        <button onClick={handlerDelete}>Delete</button>
        <button onClick={handlerEdit}>Edit</button>
      </div>
    </div>
  );
};

export default Recipe;
