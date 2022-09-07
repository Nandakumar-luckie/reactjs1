import React, { useState } from "react";
const Counter = () => {
  let [count, setCount] = useState(0);
  console.log('counter', count);
  const clickHandler = () => {
    setCount(++count);
  }
  return (
    <>
      <button onClick={clickHandler}>Click me</button>
      <div>counter: {count}</div>
    </>
  );
};

export default Counter;