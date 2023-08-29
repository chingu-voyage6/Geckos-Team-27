import { Grid } from '@material-ui/core';
import Main from './components/Main';
import NavBar from './components/NavBar';
import './css/style.css';

const App = () => {
  return (
    <div>
      <NavBar />
      <Grid container alignItems="center" style={{ marginTop: '30px' }}>
        <Grid item xs={8}>
          <Main /> {/* Main component holding all the routes */}
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
