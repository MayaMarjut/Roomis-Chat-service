import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import RoomHeader from './RoomHeader';
import RoomMessageArea from './RoomMessageArea';
import io from 'socket.io-client';

const RoomView = props => {
  // const classes = makeStyles();
  const [value, setValue] = React.useState('Controlled');

  const socket = io('http://localhost:8000');

  return (
    <div>
      <RoomHeader match={props.match} history={props.history} />
      <footer>
        <Avatar alt='Remy Sharp' />
        <TextField
          className='message'
          id='outlined-textarea'
          label='Your message'
          placeholder='Say Hey!'
          multiline
          rows='5'
          variant='outlined'
        />
        <Button
          className='SendMessageButton'
          variant='contained'
          type='submit'
          color='primary'
        >
          Send
        </Button>
      </footer>
      <RoomMessageArea
        room={props.match.params.name}
        user={props.user}
        socket={socket}
      />
    </div>
  );
};

export default RoomView;
