import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const NavBar = () => {
  const userCtx = useContext(UserContext);
  const { credentials, handleLogin, isLoggedIn, setIsLoggedIn, handleLogout,loggedInUsername } =
    userCtx;

  return (
    <>
    <nav className={styles.bar}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? styles.isActive : styles.notActive
        }
      >
        Home
      </NavLink>
      <NavLink
        to="add"
        className={({ isActive }) =>
          isActive ? styles.isActive : styles.notActive
        }
      >
        Add Recipes
      </NavLink>

      <NavLink
        to="about"
        className={({ isActive }) =>
          isActive ? styles.isActive : styles.notActive
        }
      >
        About
      </NavLink>

      <NavLink
        to="fav"
        className={({ isActive }) =>
          isActive ? styles.isActive : styles.notActive
        }
      >
        Fav List
      </NavLink>
      <NavLink
        to="profile"
        className={({ isActive }) =>
          isActive ? styles.isActive : styles.notActive
        }
      >
        Profile Settings
      </NavLink>

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
      
    </nav>
    {isLoggedIn && <p className={styles.credentials}>Hello, {loggedInUsername}</p>}
    </>
  );
};

export default NavBar;
