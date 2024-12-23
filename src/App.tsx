import React from 'react';
import logo from './logo.svg';
import './App.css';
import FetchFlags from './components/FetchFlags';
import Counter from './components/FixBug1';
import TodoList from './components/FixBug2';
import UserGreeting from './components/FixBug3';
import Timer from './components/FixBug4';
import ProductList from './components/harderbugs/Harder1';
import FilterCountries from './components/FilterCountries';
import FetcingCountries from './components/FetcingCountries';
import FetchCountries2 from './components/FetchCountries2';
import RunTasks from './components/typescript/RunTasks';


function App() {
  return (
    <div className="App">
      <RunTasks />
    </div>
  );
}

export default App;
