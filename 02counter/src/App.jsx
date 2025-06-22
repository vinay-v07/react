import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  let [counter, setCounter] = useState(0);

  // let counter = 15;

  const AddValue = () => {
    if (counter >= 10) {
      alert("Counter cannot be greater than 10");
      return;
    }
  // counter = counter + 1;
  setCounter(counter + 1);
  console.log("Add Value", counter);
}

const RemoveValue = () => {
  if (counter <= 0) {
    alert("Counter cannot be less than 0");
    return;
  }
  // counter = counter - 1;
  setCounter(counter - 1);
  console.log("Remove Value", counter);
}

  return (
    <>
      <h1>Vinay Kumar Verma</h1>
      <h2>Counter : {counter} </h2>

      <button onClick={AddValue}>Add Value</button>
      <br />
      <br />
      <button onClick={RemoveValue}>Remove Value</button>
      
    </>
  )
}

export default App
