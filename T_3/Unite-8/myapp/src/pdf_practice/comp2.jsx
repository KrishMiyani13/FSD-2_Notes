import React, { createContext } from "react";
import Comp3 from "./Comp3";


const StringContext = createContext();

const value1 = "Students";

const Comp2 = () => {

  return (
    <StringContext.Provider value={value1}>
      <Comp3 />
    </StringContext.Provider>
  );
}

export default Comp2
export { StringContext }