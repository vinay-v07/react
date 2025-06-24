import { useCallback, useEffect, useState ,useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbersAllowed] = useState(false);
  const [char, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  //useRef hook 
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass ="";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numbers) {
      str += "0123456789";
    }
    if (char) {
      str += "!@#$%^&*()_+[]{}|;:,.<>?`~";
    }
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      pass += str[randomIndex];
    }
    setPassword(pass);
  }, [length, numbers, char, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, password.length);
    window.navigator.clipboard.writeText(password)
    // alert("Password copied to clipboard!");
  }, [password]);

  // passwordGenerator();
  useEffect(() => {
    passwordGenerator();
  }, [length, numbers, char, passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none bg-amber-50 w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0'
        >copy</button>
      </div>
      <div className='flex text-sm gap-x-4'>
        <div className='flex text-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={30}
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className='cursor-pointer'
          />
          <label >Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={numbers}
              id="numberInput"
              onChange={() => {
                  setNumbersAllowed((prev) => !prev);
              }}
          />
          <label htmlFor="numberInput">Numbers</label>
          </div>
        <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={char}
              id="charInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev);
              }}
          />
          <label htmlFor="charInput">Character</label>
          </div>
        
      </div>
    </div>
  )
}

export default App
