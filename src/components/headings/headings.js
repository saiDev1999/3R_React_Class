import React from "react";
import "./heading.css";
import ListComponent from "../list/list";
import styles from "./heading.module.css";

const Heading1 = (prop) => {
  const { title } = prop;

  return <h2>{title}</h2>;
};
export default Heading1;

export const Heading2 = (prop) => {
  const { title } = prop;
  return <h2>{title}</h2>;
};

export const Heading3 = () => {
  return (
    <div>
      <h3>H1 heading...</h3>
    </div>
  );
};
export const Heading4 = (props) => {
  const { title } = props;
  return (
    <div>
      <h4>{title}</h4>
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
