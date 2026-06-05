import React, { useContext } from "react";
import { StyleContext } from "./Comp1";
import { StringContext } from "./Comp2";

const Comp3 = () => {
  const object = useContext(StyleContext);
  const value = useContext(StringContext);

  return (
    <>
      <p>uvguhggb</p>
      <p>dfssfgf</p>
      <h1 style={object}>dfssfgf</h1>
      <h3 style={object}>Hello {value}, welcome aavo aavo chhokrav !! </h3>
      <h3>Hello {value}, welcome aavo aavo chhokrav !! </h3>
    </>
  );
};

export default Comp3;
