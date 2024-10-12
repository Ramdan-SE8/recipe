import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import styles from "./NavBar.module.css";
import { RecipeProvider } from "../context/RecipeContext";
import { UserProvider } from "../context/UserContext";



const Root = () => {

  return (
    <>
    <UserProvider>
      <NavBar />

      <RecipeProvider>
      <div className={styles.outlet}>
        <Outlet />
      </div>
      </RecipeProvider>
      </UserProvider>
    </>
  );
};

export default Root;
