import React from "react";
import "./heading.css";
import ListComponent from "../list/list";
import styles from "./heading.module.css";

const Heading1 = () => {
  const headingStyle = {
    color: "red",
    backgroundColor: "black",
  };
  return (
    <div>
      <h1 className={styles.heading}>H1 heading...</h1>
      <h2 className="head-text">H2 heading...</h2>
      <h3 className="head-text">H3 heading...</h3>
      <ListComponent />
    </div>
  );
};
export default Heading1;

export const Heading2 = () => {
  return (
    <React.Fragment>
      <h2>H1 heading...</h2>
    </React.Fragment>
  );
};

export const Heading3 = () => {
  return (
    <div>
      <h3>H1 heading...</h3>
    </div>
  );
};
export const Heading4 = () => {
  return (
    <div>
      <h4>H1 heading...</h4>
    </div>
  );
};
export const Heading5 = () => {
  return (
    <div>
      <h5>H1 heading...</h5>
    </div>
  );
};
