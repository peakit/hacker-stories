import React from 'react';
import './App.css'

const formMessage = (welcomeObj) => (
  welcomeObj.greeting + ', ' + welcomeObj.title
);

const App = () => {
  const allStories = [
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

  const [selectedStories, setSelectedStories] = React.useState(allStories);

  const welcome = {
    greeting: 'Hey',
    title: 'I am React'
  };

  const handleSearch = (event) => {
    // console.log(event.target.value);
    const filteredStories = allStories.filter((s) => {
      return s.title.includes(event.target.value)
    });
    setSelectedStories(filteredStories);
  };

  return (
    <div>
      <h1>{formMessage(welcome)}</h1>

      <Search onSearch={handleSearch} />

      <hr />

      <List list={selectedStories} />

    </div>
  );
}

const Search = (props) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    props.onSearch(event);
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />

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
