import Button from "./components/button/button.js";
import ListComponent from "./components/list/list.js";
import Heading1, {
  Heading2 as SecondaryHeading,
  Heading3,
  Heading4,
  Heading5,
} from "./components/headings/headings.js";
import React from "react";
import HeadingComponent from "./components/classComponent/heading.js";
import NavBar from "./components/navBar/navBar.js";
import AccordionComponent from "./components/accordion/accordion.js";

function Hello() {
  const isSubscibed = false;

  const employees = [
    {
      teamName: "SRH",
      players: ["a", "b"],
      trophy: [2016],
    },
    {
      teamName: "Mumbai",
      players: ["a", "b"],
      trophy: [2016],
    },
  ];

  return (
    <>
      <NavBar />
      <AccordionComponent />
    </>
  );
}

export default Hello;

// Component : Component is a piece of reusable and independent bits of code
// which is responsible for creating the User interface

// Every components will return  the mark up lang
// component must always start with capital

// 2 types of component
// 1. class based components
// 2. Functional based components -> most preffered

// Functional based components : This is simply created using normal js functions
