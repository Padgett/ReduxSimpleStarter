import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = process.env.YOUTUBE_API_KEY;

// Create a new component. This should produce some HTML
const App = () => {
  return (
    <div>
      <div>Hi!</div>
      <div>
        <SearchBar />
      </div>
    </div>
  );
}

// Take component's generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
