import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function formMessage(welcomeObj) {
  return welcomeObj.greeting + ', ' + welcomeObj.title;
}

function App() {
  const welcome = {
    greeting: 'Hey',
    title: 'I am React'
  };

  const books = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 10,
      objectId: 0
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org',
      author: 'Dan Abramov. Andrew Clark',
      num_comments: 2,
      points: 5,
      objectId: 1
    }
  ];

  return (
    <div>
      <h1>{formMessage(welcome)}</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

      <hr />

      <ul>
        {books.map(function (book) {
          return (
            <li key={book.objectId}>
              <span>
                <a href={book.url}>{book.title} </a>
              </span>
              <span>{book.author} </span>
              <span>{book.num_comments} </span>
              <span>{book.points}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
