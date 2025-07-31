import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const containerStyle = {
    margin: '20px auto',
    textAlign: 'center',
  };

  const buttonStyle = {
    margin: '5px',
    padding: '10px 20px',
    fontSize: '16px',
  };

  return (
    <div style={containerStyle}>
      <h2>Counter: {count}</h2>
      <button style={buttonStyle} onClick={() => setCount(count + 1)}>+</button>
      <button style={buttonStyle} onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default Counter;
