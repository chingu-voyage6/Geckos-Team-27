import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchBar from './SearchBar';
import About from './About';
import Search from './Search';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Search} />
      <Route path='/about' component={About} />
      <Route path='/search/:searchQuery' render={props => <Search {...props} />} />
    </Switch>
  </main>
);

export default Main; 

