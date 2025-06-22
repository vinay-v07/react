import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myObject = {
    name: "Vinay Verma",
    age: 22,
    city: "Raipur",
  }
  return (
    <>
      <h1 className='bg-amber-500 text-black rounded-xl mb-4'>Tailwind Test</h1>
      <Card username="vinay" /*someObje = {myObject}*/ />
      <Card username="vicky" /*someObje = {myObject}*/ />

    </>
  )
}

export default App
