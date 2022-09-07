import React, { useContext } from "react";
import AppContext from "./ContextProvider";
const Welcome = () => {
  const context = useContext(AppContext);
  const changeName = () => {
    let newName = context.name;
    if (context.name === "kitty") {
      newName = "dog";
    } else if (context.name === "dog") {
      newName = "kitty";
    }
    context.setName(newName);
  }
  return (
    <>
      <div>Welcome {context.name}</div>
      <button onClick={changeName}>change Name</button>
    </>
  );
};

export default Welcome;