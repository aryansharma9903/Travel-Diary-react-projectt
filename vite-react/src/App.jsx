import React, { useCallback, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Users from './user/pages/User';
import Newplace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './user/pages/Auth';
import { AuthContext } from './shared/context/auth-context';
import { Redirect, Switch } from 'react-router-dom';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);

  }, [])

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, [])

  let routes;
  if(isLoggedIn) {
    routes = (
      <Switch>
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
    <Redirect to='/'/>
    </Switch>
    );
  }
  else{
    routes = (
    <Switch>
    <Route path="/" exact={true}>
      <Users />
    </Route>
    <Route path='/:userId/places' exact>
      <UserPlaces />
    </Route>
    <Route path='/login'>
      <Auth />
    </Route>
    <Redirect to='/login'/>
    </Switch>
    )
  }

  return (
    <>
    <AuthContext.Provider value={
      {isLoggedIn: isLoggedIn,
      login: login,
      logout: logout}
    }>
      <Router>
        <MainNavigation />
        <main>
          {routes}
        </main>
      </Router>
    </AuthContext.Provider>
    </>
  );
}

export default App
