import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import CatsPage from './pages/CatsPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <CatsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
