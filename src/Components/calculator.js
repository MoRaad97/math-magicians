import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [obj, setNewObj] = useState({ total: null, next: null, operation: null });

  const result = (e) => {
    const newObj = calculate(obj, e.target.textContent);
    setNewObj(newObj);
  };

  return (
    <section className='calculator'>
      <div className='my-calc'>Let's Do Some Math Magic:</div>
      <div className="calculator-container">
        <div className="screen"><span className="result">{obj.next || obj.total || 0}</span></div>
        <div className="buttons">
          <button type="button" className="normal" onClick={result}>AC</button>
          <button type="button" className="normal" onClick={result}>+/-</button>
          <button type="button" className="normal" onClick={result}>%</button>
          <button type="button" className="normal active" onClick={result}>÷</button>
          <button type="button" className="normal" onClick={result}>7</button>
          <button type="button" className="normal" onClick={result}>8</button>
          <button type="button" className="normal" onClick={result}>9</button>
          <button type="button" className="normal active" onClick={result}>x</button>
          <button type="button" className="normal" onClick={result}>4</button>
          <button type="button" className="normal" onClick={result}>5</button>
          <button type="button" className="normal" onClick={result}>6</button>
          <button type="button" className="normal active" onClick={result}>-</button>
          <button type="button" className="normal" onClick={result}>1</button>
          <button type="button" className="normal" onClick={result}>2</button>
          <button type="button" className="normal" onClick={result}>3</button>
          <button type="button" className="normal active" onClick={result}>+</button>
          <button type="button" className="zero" onClick={result}>0</button>
          <button type="button" className="normal" onClick={result}>.</button>
          <button type="button" className="normal active" onClick={result}>=</button>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
