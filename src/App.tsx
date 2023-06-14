import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [hello, setHello] = useState([]);

  function sayHello() {
    fetch('http://localhost:8000/hello/You')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setHello(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to React Skeleton!
        </p>
        <button onClick={sayHello}>
          Click me
        </button>
        <p>
          {JSON.stringify(hello)}
        </p>
      </header>
    </div>
  );
}

export default App;
