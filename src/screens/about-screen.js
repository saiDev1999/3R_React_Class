import React, { useContext } from "react";
import NavBar from "../components/navBar/navBar";
import { UserInfo } from "../navigation/navigation-stack";
import { DECREASE_COUNT, INCREASE_COUNT } from "../navigation/jsFuntions";

function AboutScreen() {
  const { increaseCount, count, currentState, dispatch } = useContext(UserInfo);
  console.log(currentState, "currentStatecurrentState");
  return (
    <div>
      <NavBar />
      <h2>Welcome to about screen{currentState.count}</h2>
      <button
        onClick={() => {
          dispatch({ type: INCREASE_COUNT });
        }}
      >
        Increase count
      </button>

      <button
        onClick={() => {
          dispatch({ type: DECREASE_COUNT });
        }}
      >
        Decrease count
      </button>
    </div>
  );
}

export default AboutScreen;
