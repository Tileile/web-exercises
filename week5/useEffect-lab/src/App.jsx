import { useState, useEffect } from 'react';

const UseEffectTest = () => {
  const [toggleOne, setToggleOne] = useState(false); 
  const [toggleTwo, setToggleTwo] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('UseEffect1 Ran');
  }, [toggleOne]);

  useEffect(() => {
    console.log('UseEffect2 Ran');
    if (toggleTwo)
      console.log('toggleTwo slice of state is true so this code runs');
  }, [toggleTwo]);

  useEffect(() => {
    // Assign setInterval to myInterval
    const myInterval = setInterval(() => {
      console.log(`UseEffect3 with interval number ${count} is running`);
    }, 1000);

    // Cleanup function to clear the interval
    return () => {
      console.log(
        `UseEffect3 cleanup ran.\nsetInterval number ${count} is being cleared out`
      );
      clearInterval(myInterval);
    };
  }, [count]);


  return (
    <div>
      {console.log('rendered or re-rendered')}
      <h1>UseEffectTest Component</h1>
      <button onClick={() => setToggleOne(!toggleOne)}>ToggleOne</button>
      <button onClick={() => setToggleOne(!toggleTwo)}>toggleTwo</button>
      <button onClick={() => setCount((prevCount) => {return  prevCount+1} )}> Counter</button>

    </div>
  );
};

export default UseEffectTest;