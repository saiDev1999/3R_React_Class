import { useState } from "react";

const useCounter = (initialValue = 100, scale = 1) => {
  const [count, setCount] = useState(initialValue);
  const incrementHandler = () => {
    setCount(count + scale);
  };
  const decrementHandler = () => {
    setCount(count - scale);
  };
  const resetHandler = () => {
    setCount(0);
  };
  return [count, incrementHandler, decrementHandler, resetHandler];
};

export default useCounter;
