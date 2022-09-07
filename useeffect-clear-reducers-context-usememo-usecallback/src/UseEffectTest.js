import React, { useEffect, useState } from "react";

const UseEffectTest = () => {
  let [text, setText] = useState("kitty");
  let [color, setColor] = useState("red");
  const changeEffectHandler = (event) => {
    event.stopPropagation();
    setText("kitty" + Date.now());
  }
  const changeColor = (event) => {
    setColor(color => {
      if (color === "red") {
        return "white";
      }
      return "red";
    })
  };
  useEffect(() => {
    console.log("Component mounted");
    return () => {
      console.log("Component Clear Fn / Component unmounted");
    };
  },[text]);
  return (
    <>
      <button onClick={changeEffectHandler}>Change Random Text</button>
      <button onClick={changeColor}>Change Color</button>
      <div style={{color}}>USE_EFFECT DATA: {text}</div>
    </>
  );
};

export default UseEffectTest;