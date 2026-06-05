import React, { createContext } from 'react';
import Comp2 from './Comp2';

const StyleContext = createContext();
  const textStyle = {
    color: 'blue',
    fontSize: '50px',
    fontWeight: 'bold',
    backgroundColor: '#f0f0f0',
    padding: '10px',
    borderRadius: '5px'
  };

function Comp1() {

  return (
    <StyleContext.Provider value={textStyle}>
      <Comp2 />
    </StyleContext.Provider>
  );
}
export default Comp1
export {StyleContext}