import React from 'react';
import './App.css';
import { Greet } from './components/Greet';

function App() {
  return (
    <div className="App">
      <Greet name='Deodeep Kunj' messageCount={10}/> 
    </div>
  );
}

export default App;
