
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Container from 'react-bootstrap/Container';
//import Col from 'react-bootstrap/Col';
//import Row from 'react-bootstrap/Row';
//import { Button } from 'react-bootstrap';
//import Sidebar from './components/sidebar';

import { Route, Switch } from 'react-router-dom';
import ButtonPage from './components/buttonPage';
import Dashboard from './components/dashboard';
import Color from './components/colors';
import Tables from './components/tables';
import Login from './components/login';
import Cards from './components/cards';
import Redirect from './components/redirectPage';
import Blank from './components/blank';



function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path="/">
            <Dashboard/>
        </Route>

        <Route path="/button">
        <ButtonPage />
        </Route>

        <Route path="/color">
          < Color />
        </Route>

        <Route path="/table">
        < Tables />
        </Route>

        <Route path="/login">
        <Login  />
        </Route>

        <Route path="/card">
        <Cards  />
        </Route>

        <Route path="/err">
        <Redirect  />
        </Route>

        <Route path="/blank">
        <Blank  />
        </Route>

      
      </Switch>

    </div>
  );
}

export default App;









 