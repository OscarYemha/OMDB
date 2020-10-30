import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import {Header} from './components/Header'
import {Watchlist} from './components/Watchlist'
import {Watched} from './components/Watched'
import {Add} from './components/Add'
import {Logging} from './components/Logging'
import {Register} from './components/Register'
import './App.css';
import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header/>

        <Switch>

          <Route exact path = '/'>
            <Logging/>
          </Route>

          <Route path ='/watchlist'>
            <Watchlist/>
          </Route>

          <Route path = '/watched'>
            <Watched/>
          </Route>

          <Route path = '/add'>
            <Add/>
          </Route>

          <Route path = '/register'>
            <Register/>
          </Route>

        </Switch>

      </Router>
    </GlobalProvider>
  );
}

export default App;
