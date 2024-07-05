import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Users from './user/pages/User';
import Newplace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';

function App() {

  return (
    <>
      <Router>
        <MainNavigation />
        <main>
        <Route path="/" exact={true}>
          <Users />
        </Route>
        <Route path="/places/new">
          <Newplace />
        </Route>
        </main>
        </Router>
    </>
  );
}

export default App
