import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from '../Auth';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [isAuth, setIsAuth] = useState([null]);
  useEffect(() => {
    async function checkAuth() {
      let bool = await Auth.isAuth();
      setIsAuth(bool);
    }
    checkAuth();
  }, []);
  if (isAuth[0] === true) {
    return (
      <Route
        {...rest}
        render={props => {
          return <Component {...props} user={isAuth[1]} />;
        }}
      ></Route>
    );
  }
  if (isAuth[0] === false) {
    try {
      localStorage.removeItem('token');
    } catch (err) {
      console.error(err);
    }
    return (
      <Route
        {...rest}
        render={props => {
          return <Redirect to='/login' />;
        }}
      ></Route>
    );
  }
  if (isAuth[0] === null) {
    return null;
  }
};

export default ProtectedRoute;
