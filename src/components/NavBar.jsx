import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { IsEditingContext } from "../context/isEditingContext";

const NavBar = () => {
  const userCtx = useContext(UserContext);
  const editCtx = useContext(IsEditingContext);
  const { isLoggedIn, handleLogout, loggedInUsername } = userCtx;

  const { isEditing } = editCtx;
  return (
    <>
      <p className={styles.bar}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.isActive : styles.notActive
          }
        >
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink
            to="add"
            className={({ isActive }) =>
              isActive ? styles.isActive : styles.notActive
            }
          >
            {!isEditing ? "Add Recipe" : "Edit Recipe"}
          </NavLink>
        )}

        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? styles.isActive : styles.notActive
          }
        >
          About
        </NavLink>

        {isLoggedIn && (
          <NavLink
            to="fav"
            className={({ isActive }) =>
              isActive ? styles.isActive : styles.notActive
            }
          >
            Fav List
          </NavLink>
        )}
        {isLoggedIn && (
          <NavLink
            to="profile"
            className={({ isActive }) =>
              isActive ? styles.isActive : styles.notActive
            }
          >
            Profile Settings
          </NavLink>
        )}

        {isLoggedIn === false ? (
          <NavLink
            to="login"
            className={({ isActive }) =>
              isActive ? styles.isActive : styles.notActive
            }
          >
            Log in
          </NavLink>
        ) : (
          <button onClick={handleLogout}>Log Out</button>
        )}
        {isLoggedIn && (
          <p className={styles.credentials}>Hello, {loggedInUsername}!</p>
        )}
      </p>
    </>
  );
};

export default NavBar;
