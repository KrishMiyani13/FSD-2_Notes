import React, { createContext } from "react";
import Comp2 from "./Comp2";

const StyleContext = createContext();

const style1 = {
  backgroundColor: "blue",
  color:"red"
};

function Comp1() {
  return (
    <StyleContext.Provider value={style1}>
      <Comp2 />
    </StyleContext.Provider>
  );
}

export default Comp1;
export { StyleContext };