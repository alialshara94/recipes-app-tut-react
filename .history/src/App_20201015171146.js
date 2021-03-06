import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';
import env from '../.env'

const App = () => {

  // const APP_ID = "e292c5c2";
  // const APP_KEY = "d0d99372369cc71c1056e6e714046c73";

  // const API_URI = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`);
      const data = await response.json();
      console.log('data', data.hits);
      setRecipes(data.hits);
    };
    getRecipes();
  },[query]);

  

  const updateSearch = e => {
    setSearch(e.target.value);
    // console.log(search)
  };

  const getSearch =e =>{
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          ingredients={recipe.recipe.ingredients}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
}

export default App;
