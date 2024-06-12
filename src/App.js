import React, { Component } from "react";
import AccordionComponent from "./components/accordion/accordion.js";
import NavBar from "./components/navBar/navBar.js";
import ButtonComponent from "./components/button/button.js";
import GreetingComponent from "./components/greeting/greeting.js";
import Heading1, { Heading2 } from "./components/headings/headings.js";
import ListComponent from "./components/list/list.js";
import YoutubeButton from "./components/youtubeButton/youtubeButton.js";
import ProductListing from "./components/productListing/productListing.js";
import UnmountingPhase from "./components/unmounting/parent.js";
import CircleGenerator from "./components/circleGenerate/circle-generator.js";
import ProfileComponent from "./components/profile/profile.js";
import UncontrolledForm from "./components/forms/uncontrolled.js";
import ControlledComponents from "./components/forms/controlled.js";

function Hello() {
  const teams = [
    {
      teamName: "SRH",
      players: ["a", "b"],
      trophy: 2016,
    },
    {
      teamName: "Mumbai",
      players: ["c", "d"],
      trophy: 2016,
    },
    {
      teamName: "KKR",
      players: ["c", "d"],
      trophy: 2016,
    },
  ];

  return (
    <>
      {/* <UncontrolledForm /> */}
      <ControlledComponents />
    </>
  );
}

export default Hello;

// const EachTeam = (prop) => {
//   const { eachTeam } = prop;
//   return (
//     <>
//       <Heading1 title={eachTeam.teamName} />
//       <Heading2 title={eachTeam.trophy} />
//       <ListComponent list={eachTeam.players} />
//     </>
//   );
// };

class EachTeam extends Component {
  render() {
    const {
      eachTeam: { teamName, trophy, players },
    } = this.props;
    return (
      <>
        <UncontrolledForm />
      </>
    );
  }
}

// this : keyword
