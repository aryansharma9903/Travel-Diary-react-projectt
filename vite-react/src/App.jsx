import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Users from './user/pages/User';
import Newplace from './places/pages/NewPlace';

function App() {

  return (
    <>
      <Router>
        <Route path="/" exact={true}>
          <Users />
        </Route>
        <Route path="/places/new">
          <Newplace />
        </Route>
      </Router>
    </>
  );
};

export default App
