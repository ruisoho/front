import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Undercode development commenced!</h1>
        <h3>Hello guest! This community is under development. Please do check back later</h3>
        <a
          className="link"
          href="https://github.com/undercodeorg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hey! Wanna contribute to Open Source? It's your call!
        </a>
      </header>
    </div>
  );
}

export default App;
