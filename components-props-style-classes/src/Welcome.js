import React from "react";
import Comment from "./Comment";
const Welcome = (props) => {
  const text = "React is easy to learn"
  const style = {color: 'red'};
  return (
    <div className={props.className}>
      <div >Welcome {props.name}</div>
      <div style={style}></div>
      <Comment styleData={style}>
        <div>{text}</div>
      </Comment>
    </div>
  );
};

export default Welcome;