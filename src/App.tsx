import React from 'react';
import './App.css';
import { ColorList } from './components/ColorList';
import { Greet } from './components/Greet';
import { Person } from './components/Person';

function App() {
  const personName = {
    first: "Deodeep",
    last: "kunj"
  }

  const colorData = [
    {
      color: "red",
      value: "#f00"
    },
    {
      color: "green",
      value: "#0f0"
    },
    {
      color: "blue",
      value: "#00f"
    },
    {
      color: "cyan",
      value: "#0ff"
    },
    {
      color: "magenta",
      value: "#f0f"
    },
    {
      color: "yellow",
      value: "#ff0"
    },
    {
      color: "black",
      value: "#000"
    }
  ]
  return (
    <div className="App">
      <Greet name='Deodeep Kunj' messageCount={10} isLoggedIn={false}/> 
      <Person name={personName}/>
      <ColorList colorData={colorData}/>
    </div>
  );
}

export default App;
