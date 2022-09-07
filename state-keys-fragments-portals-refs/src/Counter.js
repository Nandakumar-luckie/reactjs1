import React, { useState } from "react";
import DivPrinter from "./DivPrinter";
const Counter = () => {
  let [count, setCount] = useState(0);
  console.log('counter', count);
  const clickHandler = () => {
    setCount(++count);
  }
  return (
    <>
      <button onClick={clickHandler}>Click me</button>
      <DivPrinter value={`counter: ${count}`}/>
    </>
  );
};

export default Counter;