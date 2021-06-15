import 'bootstrap/scss/bootstrap.scss';

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import CatPage from './pages/CatPage';
import CatsPage from './pages/CatsPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/cats" />
        </Route>

        <Route path="/cats/:catId">
          <CatPage />
        </Route>

        <Route exact path="/cats">
          <CatsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
