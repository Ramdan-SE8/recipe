import styles from "/src/components/Recipe.module.css";

const Recipe = ({ itemId, items }) => {
  const selectedItem = items.find((item) => item.id === itemId);

  if (!selectedItem) {
    return <p>item not found!</p>;
  }
  return (
    <div className={styles.details}>
      <h2>{selectedItem.name}</h2>
      <div>
        <img
          className={styles.image}
          src={selectedItem.image}
          alt="Image of food"
        ></img>
      </div>
      <div>
        <hr />

        <h3>Ingredients</h3>

        <ul className={styles.ingredientsList}>
          {selectedItem.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <hr />
      <div>
        <h3>Steps</h3>
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
  );
};

export default Recipe;
