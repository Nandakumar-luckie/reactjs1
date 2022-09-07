import React, { useReducer, useRef } from "react";

const textState = {
  isValid: false,
  text: "",
  errorMsg: "Enter some text"
};

const textReducer = (state, action) => {
  if (action.type === "validate") {
    const value = action.value;
    let isValid = true;
    let errorMsg = "";
    if (value.length <= 0) {
      isValid = false;
      errorMsg = "Enter some text";
    } else if (value.length > 10) {
      isValid = false;
      errorMsg = "Enter text less than 10 chars";
    }
    return {...state, isValid, errorMsg,text: value};
  }
  return state;
};

const InputHandler = () => {
  let [textData, dispatch] = useReducer(textReducer, textState);
  const inputRef = useRef(null);
  const textInputHandler = () => {
    dispatch({type: "validate", value: inputRef.current.value});
  };
  return (
    <div>
      <div>Enter Text: <input type="text" ref={inputRef} onInput={textInputHandler} /></div>
      <div style={{color: "white"}}>DATA:  {textData.text}</div>
      {!textData.isValid && <div style={{color: "red"}}>ERROR: {textData.errorMsg}</div>}
    </div>
  );
};

export default InputHandler;