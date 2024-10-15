import faizal from "../assets/images/about/faizal.png";
import jianxun from "../assets/images/about/jianxun.png";
import keer from "../assets/images/about/keer.png";
import ramdan from "../assets/images/about/ramdan.png";

import styles from "./About.module.css";

const About = () => {
  return (
    <>
      <h1 style={{ marginBottom: '40px' }}>About Us</h1>
      <h2 style={{ marginBottom: '40px' }}>This is created during the SCTPSWE Cohort 8 by:</h2>
      <div className={styles.teamContainer}>
        <a href="https://github.com/FaizalHH">
          <div>
            <img src={faizal} alt="avatar" />
            <h5>Faizal</h5>
          </div>
        </a>
        <a href="https://github.com/jianxunbak">
          <div>
            <img src={jianxun} alt="avatar" />
            <h5>Jian Xun</h5>
          </div>
        </a>
        <a href="https://github.com/k3lly-z">
          <div>
            <img src={keer} alt="avatar" />
            <h5>Ke Er</h5>
          </div>
        </a>
        <a href="https://github.com/Ramdan-SE8">
          <div>
            <img src={ramdan} alt="avatar" />
            <h5>Ramdan</h5>
          </div>
        </a>
      </div>
    </>
  );
};

export default About;
