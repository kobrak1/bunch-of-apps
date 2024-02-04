import React, { useState, useEffect, useRef } from 'react';

function Playground() {
  const [inputValue, setInputValue] = useState('');
  const previousInputValueRef = useRef('');

  useEffect(() => {
    // Update the ref with the previous value whenever inputValue changes
    previousInputValueRef.current = inputValue;
  }, [inputValue]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValueRef.current}</h2>
    </div>
  );
}

export default Playground;
