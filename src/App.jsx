import React from 'react';
import './App.css'

const formMessage = (welcomeObj) => (
  welcomeObj.greeting + ', ' + welcomeObj.title
);

const App = () => {
  const stories = [
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

  const welcome = {
    greeting: 'Hey',
    title: 'I am React'
  };

  return (
    <div>
      <h1>{formMessage(welcome)}</h1>

      <Search />

      <hr />

      <List list={stories} />

    </div>
  );
}

const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearchChange = (event) => {
    console.log(event);
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleSearchChange} />

      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </div>
  );
}

const List = (props) => (
  <div>
    <ul>
      {
        props.list.map((item) => (
          <Item key={item.objectId} item={item} />
        ))
      }
    </ul>
  </div>
);

const Item = (props) => (
  <li>
    <span><a href={props.item.url}>{props.item.title}</a></span>
    <span>{props.item.author}</span>
    <span>{props.item.num_comments}</span>
    <span>{props.item.points}</span>
  </li>
);

export default App;
