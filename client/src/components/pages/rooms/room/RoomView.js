import React, { useState, useEffect } from 'react';
import io from "socket.io-client";
import RoomHeader from './RoomHeader';
import RoomMessageArea from './RoomMessageArea';
import RoomMessage from './RoomMessage';

const RoomView = (props) => {


  return (
    <div className="">
      <RoomHeader match={props.match} history={props.history}/>
      <RoomMessage />
      <RoomMessageArea />
    </div>
  );
};

export default RoomView;
