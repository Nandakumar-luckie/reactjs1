import React from "react";

const Comment = ({styleData, children}) => {
    return (
      <div style={styleData}>
        {children}
      </div>
    );
};

export default Comment;