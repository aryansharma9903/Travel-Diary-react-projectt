import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Users from './user/pages/User';
import Newplace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';

const App = () => {

  return (
    <>
      <Router>
        <MainNavigation />
        <main>
        <Route path="/" exact={true}>
          <Users />
        </Route>
        <Route path='/:userId/places' exact>
          <UserPlaces />
        </Route>
        <Route path="/places/new" exact>
          <Newplace />
        </Route>
        <Route path="/places/:placeId">
          <UpdatePlace />
        </Route>
        </main>
        </Router>
    </>
  );
}

export default App
