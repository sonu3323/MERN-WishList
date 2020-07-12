import React from 'react';
import './App.css';
import { Route , Switch } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={Home}  />
          <Route exact path="/about" component={About}  />       
        </Switch>
    </div>
  );
}

export default App;
