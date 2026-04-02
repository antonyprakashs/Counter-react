import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  const reset = () => setCount(0);

  return (
    <div className="app-container">
      <div className="counter-card">
        <h1 className="title">Counter Application</h1>
        <div className="count-display">
          <span className={`count ${count === 0 ? 'zero' : ''}`}>{count}</span>
        </div>
        
        <div className="message-container">
          {count === 0 && <p className="limit-message">Minimum limit reached</p>}
        </div>

        <div className="button-group">
          <button className="btn decrement" onClick={decrement} disabled={count === 0}>
            - Decrement
          </button>
          <button className="btn reset" onClick={reset}>
            Reset
          </button>
          <button className="btn increment" onClick={increment}>
            + Increment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
