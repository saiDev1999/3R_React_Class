import React, { useContext } from "react";
import NavBar from "../components/navBar/navBar";
import { UserInfo } from "../navigation/navigation-stack";
import { DECREASE_COUNT, INCREASE_COUNT } from "../navigation/jsFuntions";
import Usememo from "../components/useMemo/useMemo";
import ParentComponent from "../components/useCallback/parent";
import UseEffectExample from "../components/useEffectLeak/useEffectLeak";
import useCounter from "../components/customHooks/useCounter";

function AboutScreen() {
  const [age, incrementAge, decrementAge, resetAge] = useCounter(10, 2);
  const [salary, incrementSalary, decrementSalary, resetSalary] = useCounter(
    10000,
    2000
  );
  return (
    <div>
      <NavBar />
      <h2>Welcome to about screenUsememos12</h2>
      <h4>{age}</h4>
      <button onClick={incrementAge}>Increment age</button>
      <button onClick={decrementAge}>Decrement age</button>
      <button onClick={resetAge}>Reset age</button>

      <h4>{salary}</h4>
      <button onClick={incrementSalary}>Increment salary</button>
    </div>
  );
}

export default AboutScreen;
