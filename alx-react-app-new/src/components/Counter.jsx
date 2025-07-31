import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const counterStyle = {
    textAlign: 'center',
    margin: '50px auto',
    padding: '20px',
    border: '2px solid #ccc',
    borderRadius: '10px',
    width: '300px',
    backgroundColor: '#000000ff'
  };

  const buttonStyle = {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer'
  };

  return (
    <div style={counterStyle}>
      <h2>React Counter App</h2>
      <p>Count: {count}</p>
      <button style={buttonStyle} onClick={increment}>Increment</button>
      <button style={buttonStyle} onClick={decrement}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
