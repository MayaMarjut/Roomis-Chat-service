import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import RoomView from './components/pages/rooms/room/RoomView';
import Landing from './components/pages/landing/Landing';
import Login from './components/pages/landing/Login';
import Register from './components/pages/landing/Register';
import Rooms from './components/pages/rooms/Rooms';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <ProtectedRoute exact path='/rooms' component={Rooms} />
          <ProtectedRoute path='/rooms/:name' component={RoomView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
