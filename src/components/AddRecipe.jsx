import { useContext, useEffect, useState } from "react";
import styles from "./AddRecipe.module.css";
import { v4 as uuid } from "uuid";
import recipeAPI from "../api/recipe";
import { useNavigate, useLocation } from "react-router-dom";
import { IsEditingContext } from "../context/isEditingContext";

const AddRecipe = ({ refreshRecipes }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // States
  const [ingredients, setIngredients] = useState([""]);
  const [steps, setSteps] = useState([""]);
  const [recipe, setRecipe] = useState({
    imgSrc: "",
    title: "",
    description: "",
  });
  const editCtx = useContext(IsEditingContext);
  const { isEditing, setIsEditing } = editCtx;

  useEffect(() => {
    if (location.state && location.state.recipeToEdit) {
      const recipeData = location.state.recipeToEdit;
      setRecipe({
        id: recipeData.id,
        imgSrc: recipeData.imgSrc,
        title: recipeData.title,
        description: recipeData.description,
      });
      setIngredients(recipeData.ingredients);
      setSteps(recipeData.steps);
    }
  }, [location.state, setIsEditing]);

  // API call to add new recipe
  const addRecipe = async (recipe) => {
    try {
      const response = await recipeAPI.post("/recipe", recipe);
      console.log("Recipe added:", response.data);
      refreshRecipes();
      navigate(`/`);
    } catch (error) {
      console.error("Error adding recipe:", error);
    } finally {
      alert(
        `item added:\nTitle: ${recipe.title}\nDescription: ${recipe.description}\nIngredients: ${recipe.ingredients}\nRecipe: ${recipe.steps}`
      );
    }
  };

  const editRecipe = async (recipe) => {
    try {
      const response = await recipeAPI.put(`/recipe/${recipe.id}`, recipe);
      console.log("Recipe edited:", response.data);
      refreshRecipes();
      navigate(`/`);
      setIsEditing(false);
    } catch (error) {
      console.error("Error adding recipe:", error);
    } finally {
      alert(
        `item edited:\nTitle: ${recipe.title}\nDescription: ${recipe.description}\nIngredients: ${recipe.ingredients}\nRecipe: ${recipe.steps}`
      );
    }
  };

  // to create an combined all states and pass it into the API call function
  const handlerSubmit = (e) => {
    e.preventDefault();
    const updatedRecipe = {
      ...recipe,
      ingredients: ingredients,
      steps: steps,
      id: !isEditing ? uuid() : recipe.id,
    };
    !isEditing ? addRecipe(updatedRecipe) : editRecipe(updatedRecipe);
  };

  // to reset all the states inside all input fields when user click cancel
  const handlerCancel = () => {
    setIngredients([""]);
    setSteps([""]);
    setRecipe({
      imgSrc: "",
      title: "",
      description: "",
    });
    setIsEditing(false);
    !isEditing ? navigate("/") : navigate(`/recipe/${recipe.id}`);
  };

  // takes in index and values from the input field to help identify ingredients in the array
  // updates thes value of the ingredients from the specific index
  const handlerIngredients = (index, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index] = value;
    setIngredients(updatedIngredients);
  };

  // takes in index and values from the input field to help identify steps in the array
  // updates thes value of the steps from the specific index
  const handlerSteps = (index, value) => {
    const updatedSteps = [...steps];
    updatedSteps[index] = value;
    setSteps(updatedSteps);
  };

  // destructures name and value from the event target (the input field)
  // dynamically sets the corresponding recipe field to the input value
  const handlerInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setRecipe((pervRecipe) => ({ ...pervRecipe, [name]: value }));
  };

  // to add 1 more empty string inside the array so it can be mapped out as a input field
  const addIngredient = () => {
    setIngredients((prevIngredient) => [...prevIngredient, ""]);
  };

  // to add 1 more empty string inside the array so it can be mapped out as a input field
  const addStep = () => {
    setSteps((prevStep) => [...prevStep, ""]);
  };

  return (
    <>
      <div className={styles.form}>
        <div className={styles.main}>
          <h1 className={styles.text}>
            {!isEditing ? "Add Recipe" : "Edit Recipe"}
          </h1>
          <button className="btn btn-primary" onClick={handlerSubmit}>
            {!isEditing ? "Add" : "Save"}
          </button>
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={handlerCancel}
          >
            Cancel
          </button>
        </div>
        <div className={styles.group}>
          <label className={`form-label ${styles.label}`}> Title: </label>
          <input
            className="form-control"
            name="title"
            type="text"
            onChange={handlerInput}
            value={recipe.title}
          />
        </div>
        <div className={styles.group}>
          <label className={`form-label ${styles.label}`}> Description: </label>
          <textarea
            className="form-control"
            name="description"
            type="text"
            onChange={handlerInput}
            value={recipe.description}
          />
        </div>

        <div className={styles.group}>
          <label className={`form-label ${styles.label}`}> Image URL: </label>
          <textarea
            className="form-control"
            name="imgSrc"
            type="text"
            onChange={handlerInput}
            value={recipe.imgSrc}
          />
        </div>

        <h2 className={styles.text}>Ingredients</h2>
        {/* map out the array inside ingredients state and display a text area for user to input */}
        {ingredients.map((ingredient, index) => (
          <div className={styles.group} key={index}>
            <label className={`form-label ${styles.label}`}>Ingredient {index + 1} :</label>
            <textarea
              className="form-control"
              name="ingredients"
              type="text"
              value={ingredient}
              onChange={(e) => handlerIngredients(index, e.target.value)}
            />
          </div>
        ))}

        {/* handler to add empty string inside the ingredients array to be map as a new text area field */}
        <button
          className={styles.addButton}
          type="button"
          onClick={addIngredient}
        >
          +
        </button>

        <h2 className={styles.text}>Steps</h2>
        {/* map out the array inside steps state and display a text area for user to input */}
        {steps.map((step, index) => (
          <div className={styles.group} key={index}>
            <label className={`form-label ${styles.label}`}>Step {index + 1} :</label>
            <textarea
              className="form-control"
              name="steps"
              type="text"
              value={step}
              onChange={(e) => handlerSteps(index, e.target.value)}
            />
          </div>
        ))}

        {/* handler to add empty string inside the ingredients array to be map as a new text area field */}
        <button className={styles.addButton} type="button" onClick={addStep}>
          +
        </button>
      </div>
    </>
  );
};

export default AddRecipe;
