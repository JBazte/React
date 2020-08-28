import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello />
      </header>
    </div>
  );
}

class Hello extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}

export default App;
