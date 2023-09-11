import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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

const formMessage = (welcomeObj) => {
  return welcomeObj.greeting + ', ' + welcomeObj.title;
}

const App = () => {
  const welcome = {
    greeting: 'Hey',
    title: 'I am React'
  };

  return (
    <div>
      <h1>{formMessage(welcome)}</h1>

      <Search />

      <hr />

      <List />

    </div>
  );
}

const Search = () => {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

const List = () => {
  return (
    <div>
      <ul>
        {
          books.map(function (item) {
            return (
              <li key={item.objectId}>
                <span><a href={item.url}>{item.title}</a></span>
                <span>{item.author}</span>
                <span>{item.num_comments}</span>
                <span>{item.points}</span>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default App;
