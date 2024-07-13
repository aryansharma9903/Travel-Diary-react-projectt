import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Users from './user/pages/User';
import Newplace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './user/pages/Auth';

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
          <Route path='/login'>
            <Auth />
          </Route>
        </main>
      </Router>
    </>
  );
}

export default App
