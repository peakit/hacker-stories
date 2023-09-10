import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function formMessage(welcomeObj) {
  return welcomeObj.greeting +', ' + welcomeObj.title;
}

function App() {
  const welcome = {
    greeting: 'Hey',
    title: 'I am React'
  };

  return (
    <div>
      <h1>{formMessage(welcome)}</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

    </div>
  );
}

export default App;
