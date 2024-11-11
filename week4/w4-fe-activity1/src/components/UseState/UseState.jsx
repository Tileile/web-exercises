import { useState } from 'react';
import './UseState.css';


const UseState = () => {
  const [theme, setTheme] = useState('light');

  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber((num) =>num + 1 )
  }
  const decrement = () => {
    setNumber((num) => num-1)
  }

  const toggleTheme = () => {
    setTheme(() => theme!=='dark' ? 'dark': 'light');
  }

  return (
    
<div className={`state ${theme}`}>      
  <h1>UseState Component</h1>
      <button onClick={toggleTheme}>Change theme</button>
      <h2>{number}</h2>
      <button onClick={increment}>
        Increment
      </button>
      <button onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

export default UseState;
