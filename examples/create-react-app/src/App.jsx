import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from './components/link/Link';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link href="https://reactjs.org" target="_blank">Learn React</Link>
        <Link href="https://tailwindcss.com/" target="_blank">Learn Tailwind CSS</Link>
      </header>
    </div>
  );
}

export default App;
