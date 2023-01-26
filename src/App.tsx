import React from 'react';
import './App.css';
import { Button } from './components/Button';

function App() {

  return (
    <div className="App">
      <Button handleClick={(event, id) => {
        console.log('Button Clicked', event, id)
      }}/>
    </div>
  );
}

export default App;
