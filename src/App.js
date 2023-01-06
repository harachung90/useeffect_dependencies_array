import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [starWarsData, setStarWarsData] = React.useState({})
  const [count, setCount] = React.useState(0)

  console.log("Component rendered")

  /**
   * Challenge: re-write the useEffect
   * It should run any time `count` changes
   * For now, just console.log("Effect function ran")
   */

  React.useEffect(()=>{
    console.log("Effect function ran");
  }, [count])

  return (
      <div>
        <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        <h2>The count is {count}</h2>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
      </div>
  )
}

export default App;
