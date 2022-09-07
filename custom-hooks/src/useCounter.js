import {useState } from "react";

const useCounter = (initVal) => {
  let [counter, setCounter] = useState(initVal);
  const resetCounter = () => {
    setCounter(initVal);
  };
  const incrementCounter = () => {
    setCounter(++counter);
  };
  return {
    counter,
    incrementCounter,
    resetCounter
  };
};

export default useCounter;