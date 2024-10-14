import { createContext, useState } from "react";

// Step 1: Create a context object
export const isEditingContext = createContext();

// Step 2: Set up a Context Provider
export function IsEditingProvider({ children }) {
  const [isEditing, setIsEditing] = useState(false);

  const contextValue = {
    isEditing,
    setIsEditing,
  };
  return (
    <isEditingContext.Provider value={contextValue}>
      {children}
    </isEditingContext.Provider>
  );
}
