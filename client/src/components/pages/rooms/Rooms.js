import React, { Component } from 'react';
import Roomlist from './RoomList';
import { getAllRooms, postRooms } from '../../../services/roomService';
import CreateRoom from './CreateRoom';
import { Button } from '@material-ui/core';
import Header from './Header';

class Rooms extends Component {
  state = { rooms: [] };
  componentDidMount = async () => {
    let rooms = await getAllRooms(); // Kesken, vaatii toteutusta
    this.setState({ rooms });
  };
  createRoom = async newroom => {
    let response = await postRooms(newroom);
    this.setState(this.state);
    this.componentDidMount();
  };

  //   handleLogout = () => {
  //     localStorage.removeItem('token');
  //     this.props.history.push('/');
  //   };
  render() {
    return (
      <div>
        <Header history={this.props.history} user={this.props.user} />
        {/* <Button onClick={this.handleLogout}>Log out</Button> */}
        <CreateRoom isReady={this.createRoom} />
        <Roomlist rooms={this.state.rooms} />
      </div>
    );
  }
}

export default Rooms;
