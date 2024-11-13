// app/javascript/components/App.js
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  );
}

export default App;