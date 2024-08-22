import React, { useState } from 'react';

const CounterWithStep = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div>
      <h2>Counter with Step</h2>
      <p>Count: {count}</p>
      <input 
        type="number" 
        value={step} 
        onChange={(e) => setStep(Number(e.target.value))} 
      />
      <button onClick={() => setCount(count + step)}>Increment</button>
      <button onClick={() => setCount(count - step)}>Decrement</button>
    </div>
  );
};

export default CounterWithStep;
