import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import styles from "./NavBar.module.css";

const Root = () => {
  return (
    <>
      <NavBar />
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </>
  );
};

export default Root;
