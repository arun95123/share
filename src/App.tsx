import React from 'react';
import './App.css';
import Notion from './components/notion';
import inputData from './data/data';

function App() {
  return (
    <div className="App">
      <Notion data={inputData}/>
    </div>
  );
}

export default App;
