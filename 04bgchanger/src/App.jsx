import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState('gray');

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 h-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor("red")}
          className='outline-none px-5 py-1 shadow-lg rounded-full text-white' 
          style={{backgroundColor: "red"}}>Red</button>
          <button onClick={() => setColor("green")}
          className='outline-none px-5 py-1 shadow-lg rounded-full text-white' 
          style={{backgroundColor: "green"}} >Green</button>
          <button onClick={() => setColor("blue")}
          className='outline-none px-5 py-1 shadow-lg rounded-full text-white' 
          style={{backgroundColor: "blue"}} >Blue</button>
          <button onClick={() => setColor("orange")}
          className='outline-none px-5 py-1 shadow-lg rounded-full text-white' 
          style={{backgroundColor: "orange"}} >Orange</button>
          <button onClick={() => setColor("olive")}
          className='outline-none px-5 py-1 shadow-lg rounded-full text-white' 
          style={{backgroundColor: "olive"}} >Olive</button>
          <button onClick={() => setColor("violet")}
          className='outline-none px-5 py-1 shadow-lg rounded-full text-white' 
          style={{backgroundColor: "violet"}} >Violet</button>
          <button onClick={() => setColor("purple")}
          className='outline-none px-5 py-1 shadow-lg rounded-full text-white' 
          style={{backgroundColor: "purple"}} >Purple</button>
          <button onClick={() => setColor("black")}
          className='outline-none px-5 py-1 shadow-lg rounded-full text-white' 
          style={{backgroundColor: "black"}} >Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
