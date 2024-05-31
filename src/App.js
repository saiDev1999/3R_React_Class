import React, { Component } from "react";
import AccordionComponent from "./components/accordion/accordion.js";
import NavBar from "./components/navBar/navBar.js";
import ButtonComponent from "./components/button/button.js";
import GreetingComponent from "./components/greeting/greeting.js";
import Heading1, { Heading2 } from "./components/headings/headings.js";
import ListComponent from "./components/list/list.js";

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
      {teams.map((eachTeam) => (
        <>
          <EachTeam eachTeam={eachTeam} />
        </>
      ))}
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
        <Heading1 title={teamName} />
        <Heading2 title={trophy} />
        <ListComponent list={players} />
      </>
    );
  }
}

// this : keyword
