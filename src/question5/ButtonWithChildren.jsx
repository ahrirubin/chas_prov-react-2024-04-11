import React from "react";

function ButtonWithChildren({ color, children }) {
  return <button style={{ backgroundColor: color }}>{children}</button>;
}

export default ButtonWithChildren;
