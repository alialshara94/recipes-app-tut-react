import React from 'react';
import './App.css';

const App =()=> {

  const APP_ID = "e292c5c2";
  const APP_KEY = "d0d99372369cc71c1056e6e714046c73";

  const examRequest=`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
