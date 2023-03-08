import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';
import Draggable from 'react-draggable'; // The default
//draggable can surround any component and make it draggable, 


function App() {
  //example of react-draggable implementation
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
      <Draggable>
        <button className='draggable-btn'>
          <div className="handle">Drag from here</div>
          <div>This readme is really dragging on...</div>
        </button>
      </Draggable>
      </div>
    </div>
  );
}

export default App;
