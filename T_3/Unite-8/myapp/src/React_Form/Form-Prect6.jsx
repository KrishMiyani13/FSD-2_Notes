// PC.jsx
import React from 'react';
import C1 from './comp';
import C2 from './comp1';

const PC = () => {
  const firstName = "ABC";
  const lastName = "XYZ";

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Parent Component (PC)</h1>
      <C1 />
      <hr />
      <C2 firstName={firstName} lastName={lastName} />
    </div>
  );
};

export default PC;
