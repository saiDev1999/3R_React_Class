import { useState } from "react";
import ButtonComponent from "../button/button";

const Counter = () => {
  const [count, setCount] = useState(0);

  const countHandler = (action, value = 1) => {
    switch (action) {
      case "INCREMENT":
        setCount(count + value);
        break;
      case "DECREMENT":
        if (count > 0) {
          setCount(count - value);
        } else {
          alert("count is already zero");
        }
        break;
      case "RESET":
        setCount(0);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <h5>Counter app</h5>
      <h3>Current count value {count}</h3>
      <ButtonComponent
        text="Increment"
        onSmash={() => countHandler("INCREMENT", 10)}
      />
      <ButtonComponent
        text="Decrement"
        onSmash={() => countHandler("DECREMENT", 10)}
      />
      <ButtonComponent text="Reset" onSmash={() => countHandler("RESET")} />
    </>
  );
};
export default Counter;

// state up lifting : same state , we can control from the parent component and from child components . to keep in sync
