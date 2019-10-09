import React, { useState } from 'react';
import MorseCode from './morse_code';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './App.css';

function App() {
  const [code, setCode] = useState('')
  const [dot, setDot] = useState('.');
  const [dash, setDash] = useState('-')
  const m = Object.create(MorseCode);
  const encrypt = (input) => {
    if (input[0] === dot || input[0] === dash || input[1] === dot || input[1] === dash) {
      if (dot !== '.') {
        while (input.includes(dot)) {
          input = input.replace(dot, '.');
        }
      }
      if (dash !== '-') {
        while (input.includes(dash)) {
          input = input.replace(dash, '.');
        }
      }

      let output = m.decode(input);
      setCode(output);
    }
    else {
      let output = m.encode(input);
      output = output.replace(/\./g, dot);
      output = output.replace(/-/g, dash);
      setCode(output);
    }
  }
  const dotChange = (e) => {
    setDot(e.target.value);
  }

  const dashChange = (e) => {
    setDash(e.target.value);
  }
  return (
    <div className="App">
      <input className="dot" placeholder='dot' value={dot} onChange={dotChange}></input>
      <input className="dash" placeholder='dash' value={dash} onChange={dashChange}></input>
      <TypeBox encrypt={encrypt} />
      <DisplayBox code={code} />
    </div>
  );
}

const TypeBox = ({ encrypt }) => {
  const [input, setInput] = useState('')
  const handleChange = (e) => {
    setInput(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    encrypt(input);
  }
  return (
    <div className="typebox">
      <form onSubmit={handleSubmit}>
        <textarea className='inputText' value={input} onChange={handleChange} />
        <button type='submit'>Submit</button>
      </form>

    </div>
  )
}

const DisplayBox = ({ code }) => {

  return (
    <div className="displaybox">
      <textarea className="displayText" value={code} />
      <CopyToClipboard>
        <button onClick={() => {navigator.clipboard.writeText(code)}}>Copy</button>
      </CopyToClipboard>
    </div>
  )


}

export default App;
