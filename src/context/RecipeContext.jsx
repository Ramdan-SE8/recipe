import { createContext, useState } from "react";

// Step 1: Create a context object
export const RecipeContext = createContext();

// Step 2: Set up a Context Provider
export function RecipeProvider({children}){

    const [selRecipe, setSelRecipe] = useState({});
    
    const contextValue = {
        selRecipe,
        setSelRecipe,
    };
    return(
        <RecipeContext.Provider value={contextValue}>
            {children}
        </RecipeContext.Provider>
    )
}