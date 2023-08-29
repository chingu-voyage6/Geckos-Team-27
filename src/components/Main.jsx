import { Route, Routes } from 'react-router-dom';
import About from './About';
import SearchBar from './SearchBar';
import Watch from './Watch';

const Main = () => (
  <main>
    <Routes>
      <Route exact path='/' component={SearchBar} />
      <Route path='/about' component={About} />
      <Route path='/watch/:videoId' component={Watch} />
    </Routes>
  </main>
);

export default Main;

