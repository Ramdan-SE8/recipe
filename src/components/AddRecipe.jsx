import { useContext, useEffect, useState } from "react";
import styles from "./AddRecipe.module.css";
import { v4 as uuid } from "uuid";
import recipeAPI from "../api/recipe";
import { useNavigate, useLocation } from "react-router-dom";
import { IsEditingContext } from "../context/isEditingContext";
import Joi from "joi-browser";

const AddRecipe = ({ refreshRecipes }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // States
  const [recipe, setRecipe] = useState({
    imgSrc: "",
    title: "",
    description: "",
    ingredients: [""],
    steps: [""],
  });
  const editCtx = useContext(IsEditingContext);
  const { isEditing, setIsEditing } = editCtx;

  // Validation
  const [formErrors, setFormErrors] = useState({
    imgSrc: "",
    title: "",
    description: "",
    ingredients: [],
    steps: [],
  });

  const schema = {
    id: Joi.string().optional(),
    imgSrc: Joi.string().uri().required(),
    title: Joi.string().min(3).max(100).required(),
    description: Joi.string().min(3).max(200).required(),
    ingredients: Joi.string().min(3).max(200).required().required(),
    steps: Joi.string().min(3).max(200).required(),
  };

  useEffect(() => {
    if (location.state && location.state.recipeToEdit) {
      const recipeData = location.state.recipeToEdit;
      setRecipe({
        ...recipeData,
        ingredients: recipeData.ingredients || [""],
        steps: recipeData.steps || [""],
      });
    }
  }, [location.state]);

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
      id: !isEditing ? uuid() : recipe.id,
    };
    // Validate 'rest' fields (imgSrc, title, description)
    const { ingredients, steps, ...rest } = updatedRecipe;
    const resultRest = Joi.validate(rest, schema, { abortEarly: false });

    // Validate each ingredient and step separately
    const resultIngredients = ingredients.map((item) => {
      return Joi.validate(
        { ingredient: item },
        { ingredient: schema.ingredients }
      );
    });

    const resultSteps = steps.map((item) => {
      return Joi.validate({ step: item }, { step: schema.steps });
    });

    // Collect errors
    let errors = {
      imgSrc: "",
      title: "",
      description: "",
      ingredients: [],
      steps: [],
    };

    // Process rest validation result
    if (resultRest.error) {
      resultRest.error.details.forEach((err) => {
        if (err.path[0] === "imgSrc") errors.imgSrc = err.message;
        if (err.path[0] === "title") errors.title = err.message;
        if (err.path[0] === "description") errors.description = err.message;
      });
    }

    // Process ingredient validation results
    resultIngredients.forEach((result, index) => {
      if (result.error) {
        errors.ingredients[index] = result.error.details[0].message;
      } else {
        errors.ingredients[index] = ""; // Clear error if no error
      }
    });

    // Process step validation results
    resultSteps.forEach((result, index) => {
      if (result.error) {
        errors.steps[index] = result.error.details[0].message;
      } else {
        errors.steps[index] = ""; // Clear error if no error
      }
    });

    // Check if there are any errors
    if (
      errors.imgSrc ||
      errors.title ||
      errors.description ||
      errors.ingredients.some((err) => err) ||
      errors.steps.some((err) => err)
    ) {
      setFormErrors(errors);
      return; // Prevent form submission if there are errors
    }

    // Clear errors and proceed with recipe submission
    setFormErrors({
      imgSrc: "",
      title: "",
      description: "",
      ingredients: [],
      steps: [],
    });

    !isEditing ? addRecipe(updatedRecipe) : editRecipe(updatedRecipe);
  };

  // to reset all the states inside all input fields when user click cancel
  const handlerCancel = () => {
    setRecipe({
      imgSrc: "",
      title: "",
      description: "",
      ingredients: [],
      steps: [],
    });
    setIsEditing(false);
    !isEditing ? navigate("/") : navigate(`/recipe/${recipe.id}`);
  };

  // destructures name and value from the event target (the input field)
  // dynamically sets the corresponding recipe field to the input value
  const handlerInput = (e, index = null) => {
    const { name, value } = e.target;

    setRecipe((prevRecipe) => {
      // Handle array fields like 'ingredients' and 'steps'
      if (name === "ingredients" || name === "steps") {
        const updatedArray = [...prevRecipe[name]]; // Create a copy of the array

        if (index !== null) {
          updatedArray[index] = value; // Update the specific index
        }

        const newRecipe = {
          ...prevRecipe,
          [name]: updatedArray, // Update the array in state
        };

        const errorMessages = validateIngredientAndSteps(name, updatedArray);
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          [name]: errorMessages,
        }));

        return newRecipe;

        // Handle non-array fields like 'title' or 'description'
      } else {
        const newRecipe = {
          ...prevRecipe,
          [name]: value, // Directly update the simple field
        };

        const errorMessage = validateRecipe(e);
        setFormErrors((prevErrors) => {
          const newErrors = { ...prevErrors };
          if (errorMessage) {
            newErrors[name] = errorMessage;
          } else {
            delete newErrors[name];
          }
          return newErrors;
        });

        return newRecipe;
      }
    });
  };

  // to add 1 more empty string inside the array so it can be mapped out as a input field
  const addIngredient = () => {
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      ingredients: [...prevRecipe.ingredients, ""],
    }));
    // setIngredients((prevIngredient) => [...prevIngredient, ""]);
  };

  // to add 1 more empty string inside the array so it can be mapped out as a input field
  const addStep = () => {
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      steps: [...prevRecipe.steps, ""],
    }));

    // setSteps((prevStep) => [...prevStep, ""]);
  };

  const validateIngredientAndSteps = (name, values) => {
    const errors = values.map((item) => {
      const objToCompare = { [name]: item };
      const fieldSchema = { [name]: schema[name] };

      const { error } = Joi.validate(objToCompare, fieldSchema); // Validate with the main schema
      return error ? error.details[0].message : null;
    });
    return errors;
  };

  const validateRecipe = (e) => {
    const { name, value } = e.target;
    const objToCompare = { [name]: value };
    const fieldSchema = { [name]: schema[name] };
    const result = Joi.validate(objToCompare, fieldSchema);
    const { error } = result;
    if (error) return error.details[0].message;
    else return null;
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
        {formErrors.title && (
          <div className={styles.error}>{formErrors.title}</div>
        )}
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
        {formErrors.description && (
          <div className={styles.error}>{formErrors.description}</div>
        )}

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
        {formErrors.imgSrc && (
          <div className={styles.error}>{formErrors.imgSrc}</div>
        )}

        <h2 className={styles.text}>Ingredients</h2>
        {/* map out the array inside ingredients state and display a text area for user to input */}
        {recipe.ingredients.map((ingredient, index) => (
          <div key={index}>
            <div className={styles.group}>
              <label className={`form-label ${styles.label}`}>
                Ingredient {index + 1} :
              </label>
              <textarea
                className="form-control"
                name="ingredients"
                type="text"
                value={ingredient}
                onChange={(e) => handlerInput(e, index, "ingredients")}
              />
            </div>
            <div className={styles.error}>
              {formErrors.ingredients && formErrors.ingredients[index] && (
                <div>{formErrors.ingredients[index]}</div>
              )}
            </div>
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
        {recipe.steps.map((step, index) => (
          <div key={index}>
            <div className={styles.group}>
              <label className={`form-label ${styles.label}`}>
                Step {index + 1} :
              </label>
              <textarea
                className="form-control"
                name="steps"
                type="text"
                value={step}
                onChange={(e) => handlerInput(e, index, "steps")}
              />
            </div>
            <div className={styles.error}>
              {formErrors.steps && formErrors.steps[index] && (
                <div>{formErrors.steps[index]}</div>
              )}
            </div>
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
