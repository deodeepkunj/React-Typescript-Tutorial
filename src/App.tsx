import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';

function App() {

  return (
    <div className="App">
      <Container styles={{border: "10px solid black", height: "100vh"}} />
    </div>
  );
}

export default App;
