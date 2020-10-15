import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const APP_ID = "e292c5c2";
  const APP_KEY = "d0d99372369cc71c1056e6e714046c73";

  const examRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [cou]

  useEffect(() => {
   console.log('object');
  });

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
