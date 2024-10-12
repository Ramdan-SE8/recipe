import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
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
      <NavLink
        to="login"
        className={({ isActive }) =>
          isActive ? styles.isActive : styles.notActive
        }
      >
        Log in
      </NavLink>
    </nav>
  );
};

export default NavBar;
