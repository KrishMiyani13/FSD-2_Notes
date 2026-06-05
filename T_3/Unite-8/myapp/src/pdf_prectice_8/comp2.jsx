import React, { createContext } from 'react';
import Comp3 from './Comp3';
import {StyleContext} from './Comp1';
const ValueContext = createContext();
const targetAudience = "Students";
function Comp2() {
  return (
    <ValueContext.Provider value={targetAudience}>
      <Comp3 />
    </ValueContext.Provider>
  );
} export default Comp2
export {ValueContext}
