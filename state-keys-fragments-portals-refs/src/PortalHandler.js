import React from "react";
import { createPortal } from "react-dom";

const PortalHandler = () => {
  return createPortal(<h1>PORTAL ADDED</h1>, document.getElementById('portal'));
};

export default PortalHandler;