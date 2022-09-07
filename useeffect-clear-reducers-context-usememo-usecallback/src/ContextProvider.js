import React, { createContext, useState } from "react";

const AppContext = createContext({
  name: "kitty"
});
export const ContextProvider = (props) => {
  let [name, setName] = useState("kitty");
  const value = {
    name,
    setName
  };
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;