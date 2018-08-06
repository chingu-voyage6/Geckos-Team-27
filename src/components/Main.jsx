import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchBar from './SearchBar';
import About from './About';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={SearchBar} />
      <Route path='/about' component={About} />
    </Switch>
  </main>
);

export default Main; 

