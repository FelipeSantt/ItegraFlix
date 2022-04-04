import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Details from '../Details';
import Header from '../../components/Header';
import CONSTANTS from '../../utils/constants';
import './styles.css';

const { PATH } = CONSTANTS.APP;


export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path={PATH.HOME}>
            <Home />
          </Route>
          <Route path={PATH.DETAILS}>
            <Details />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
