import { useState } from "react";
import styles from "./AddRecipe.module.css";

const AddRecipe = (handlerSubmitForm, handlerCancel) => {
  const [ingredients, setIngredients] = useState(1);
  const [steps, setSteps] = useState(1);

  const titles = ["Recipe Name: ", "Servings: "];

  return (
    <>
      <form className={styles.form} onSubmit={handlerSubmitForm}>
        <div className={styles.main}>
          <h1 className={styles.text}>Add Recipe</h1>
          <button className={styles.addButton} type="submit">
            Save
          </button>
          <button
            className={styles.addButton}
            type="button"
            onClick={handlerCancel}
          >
            Cancel
          </button>
        </div>
        {titles.map((title, index) => (
          <div className={styles.group} key={index}>
            <label className={styles.label} name="title">
              {title}
            </label>
            <textarea className={styles.input} name="details" type="text" />
          </div>
        ))}
        <h2 className={styles.text}>Ingredients</h2>
        {[...Array(ingredients)].map((_, index) => (
          <div className={styles.group} key={index}>
            <label className={styles.label} name="title">
              Ingredient {index + 1} :
            </label>
            <textarea className={styles.input} name="details" type="text" />
          </div>
        ))}
        <button
          className={styles.addButton}
          type="button"
          onClick={() => {
            setIngredients((prev) => prev + 1);
          }}
        >
          +
        </button>

        <h2 className={styles.text}>Steps</h2>

        {[...Array(steps)].map((title, index) => (
          <div className={styles.group} key={index}>
            <label className={styles.label} name="title">
              Step {index + 1} :
            </label>
            <textarea className={styles.input} name="details" type="text" />
          </div>
        ))}
        <button
          className={styles.addButton}
          type="button"
          onClick={() => {
            setSteps((prev) => prev + 1);
          }}
        >
          +
        </button>
      </form>
    </>
  );
};

export default AddRecipe;

// need to add handlers, states, validations for user inputs
