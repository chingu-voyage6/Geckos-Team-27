import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchBar from './SearchBar';
import About from './About';
import Watch from './Watch';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={SearchBar} />
      <Route path='/about' component={About} />
      <Route path='/watch/:videoId' component={Watch} />
    </Switch>
  </main>
);

export default Main; 

