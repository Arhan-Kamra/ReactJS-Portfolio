import Navigation from "./comps/Navigation/Navigation";
import React from "react";
import Styles from "./header.module.scss";

const Header = () => {
  return (
    <div>
      <Navigation />
      <div className={Styles.btn}>rasiya</div>
      <div className={Styles.btn2}>rasiya</div>
    </div>
  );
};

export default Header;
