import React, { useContext } from 'react';
import { StyleContext } from './Comp1';
import { ValueContext } from './Comp2';

function Comp3() {
  const appliedStyles = useContext(StyleContext);
  const audienceText = useContext(ValueContext);

  return (
    <div>
      <p style={appliedStyles}>
        Welcome to the classroom, {audienceText}!
      </p>
    </div>
  );
} export default Comp3
