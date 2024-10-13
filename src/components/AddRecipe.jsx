import { useState } from "react";
import styles from "./AddRecipe.module.css";
import { v4 as uuid } from "uuid";
import recipeAPI from "../api/recipe";
import { useNavigate } from "react-router-dom";

const AddRecipe = ({ refreshRecipes }) => {
  const navigate = useNavigate();

  const [ingredients, setIngredients] = useState([""]);
  const [steps, setSteps] = useState([""]);
  const [recipe, setRecipe] = useState({
    imgSrc: "",
    title: "",
    description: "",
  });

  const addRecipe = async (recipe) => {
    try {
      const response = await recipeAPI.post("/recipe", recipe);
      console.log("Recipe added:", response.data);
    } catch (error) {
      console.error("Error adding recipe:", error);
    } finally {
      refreshRecipes();
      navigate(`/`);
      alert(
        `item added:\nTitle: ${recipe.title}\nDescription: ${recipe.description}\nIngredients: ${recipe.ingredients}\nRecipe: ${recipe.steps}`
      );
    }
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    const updatedRecipe = {
      ...recipe,
      ingredients: ingredients,
      steps: steps,
      id: uuid(),
    };
    addRecipe(updatedRecipe);
  };

  const handlerCancel = () => {
    setIngredients([""]); // Reset ingredients
    setSteps([""]); // Reset steps
    setRecipe({
      imgSrc: "",
      title: "",
      description: "",
    }); // Reset recipe
    console.log("Recipe adding canceled");
  };

  const handlerIngredients = (index, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index] = value; // Set the specific ingredient
    setIngredients(updatedIngredients);
  };

  const handlerSteps = (index, value) => {
    const updatedSteps = [...steps];
    updatedSteps[index] = value; // Set the specific ingredient
    setSteps(updatedSteps);
  };

  const handlerInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setRecipe((pervRecipe) => ({ ...pervRecipe, [name]: value }));
  };

  const addIngredient = () => {
    setIngredients((prevIngredient) => [...prevIngredient, ""]);
  };

  const addStep = () => {
    setSteps((prevStep) => [...prevStep, ""]);
  };

  console.log(recipe);
  return (
    <>
      <div className={styles.form}>
        <div className={styles.main}>
          <h1 className={styles.text}>Add Recipe</h1>
          <button className={styles.addButton} onClick={handlerSubmit}>
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
        <div className={styles.group}>
          <label className={styles.label}> Title: </label>
          <input
            className={styles.input}
            name="title"
            type="text"
            onChange={handlerInput}
            value={recipe.title}
          />
        </div>
        <div className={styles.group}>
          <label className={styles.label}> Description: </label>
          <textarea
            className={styles.input}
            name="description"
            type="text"
            onChange={handlerInput}
            value={recipe.description}
          />
        </div>

        <div className={styles.group}>
          <label className={styles.label}> Image URL: </label>
          <textarea
            className={styles.input}
            name="imgSrc"
            type="text"
            onChange={handlerInput}
            value={recipe.imgSrc}
          />
        </div>

        <h2 className={styles.text}>Ingredients</h2>
        {ingredients.map((ingredient, index) => (
          <div className={styles.group} key={index}>
            <label className={styles.label}>Ingredient {index + 1} :</label>
            <textarea
              className={styles.input}
              name="ingredients"
              type="text"
              value={ingredient}
              onChange={(e) => handlerIngredients(index, e.target.value)}
            />
          </div>
        ))}
        <button
          className={styles.addButton}
          type="button"
          onClick={addIngredient}
        >
          +
        </button>

        <h2 className={styles.text}>Steps</h2>

        {steps.map((step, index) => (
          <div className={styles.group} key={index}>
            <label className={styles.label}>Step {index + 1} :</label>
            <textarea
              className={styles.input}
              name="steps"
              type="text"
              value={step}
              onChange={(e) => handlerSteps(index, e.target.value)}
            />
          </div>
        ))}
        <button className={styles.addButton} type="button" onClick={addStep}>
          +
        </button>
      </div>
    </>
  );
};

export default AddRecipe;

// need to add handlers, states, validations for user inputs
