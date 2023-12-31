import logo from './logo.svg';
import './App.css';

import {Routes,Route,Navigate,} from 'react-router-dom';

import {SearchPage} from './pages/searchPage';
import {HomePage} from './pages/homePage';
import {NavBar} from './component/navbar';

function App() {
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
    </div>
  );
}

export default App;
