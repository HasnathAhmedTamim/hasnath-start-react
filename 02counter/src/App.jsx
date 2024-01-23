import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  // let counter = 10;

  const addValue = () => {
    // interview
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    if (counter < 10) {
      setCounter(counter + 1);
    } else {
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      // setCounter((prevCounter) => prevCounter - 1);
      // setCounter((prevCounter) => prevCounter - 1);
      // setCounter((prevCounter) => prevCounter - 1);
      // setCounter((prevCounter) => prevCounter - 1);
      return false;
      
    }
  };

  return (
    <>
      <h1>React Counter: {counter}</h1>
      <h2>counter value: {counter}</h2>
      <br />
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Decrease value</button>
      <h1>React Counter: {counter}</h1>
      <h2>counter value: {counter}</h2>
    </>
  );
}

export default App;
