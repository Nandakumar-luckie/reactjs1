import React from "react";
import useCounter from "./useCounter";

const Counter = ({name, initValue}) => {
  let {counter, incrementCounter,resetCounter} = useCounter(initValue);
  return (
    <div>
      <div>{name} counter : initVal : {initValue} : currentCounterVal : {counter} </div>
      <div>
        <button onClick={incrementCounter}>incrementCounter</button>
        <button onClick={resetCounter}>resetCounter</button>
      </div>
    </div>
  )
};

export default Counter;