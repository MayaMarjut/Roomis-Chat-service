import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ChatPanel from './ChatPanel';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200
    },
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1)
    },
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10)
    }
  }
}));

const RoomMessageArea = props => {
  const [textField, setTextField] = useState('');
  const [messageHistory, setMessageHistory] = useState([]);
  const socket = props.socket;

  // console.log(props.user)

  useEffect(() => {
    socket
      .emit('join', props.user, props.room)
      .on('getChatHistory', () => {})
      .on('new message', (msg, user) => {
        let chatAlignment;
        user === props.user
          ? (chatAlignment = 'right')
          : (chatAlignment = 'left');
        setMessageHistory(
          messageHistory.unshift({
            message: msg,
            author: user,
            alignment: chatAlignment
          })
        );
        document.getElementById(
          'chat-panel'
        ).innerHTML += `<li style="list-style: none;" class=${messageHistory[0].alignment}>${messageHistory[0].author}: ${messageHistory[0].message}`;
        updateScroll();
      })
      .off('disconnect');
  }, []);

  const send = () => {
    if (textField.trim() === '') {
      return;
    } else {
      socket.emit('message', textField, props.room, props.user);
      setTextField('');
    }
  };

  const classes = useStyles();

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      send();
    }
  };

  const updateScroll = () => {
    window.scrollTo(0, document.querySelector('.chat').scrollHeight);
  };

  return (
    <div className='chat' style={{ overflow: 'auto' }}>
      <ul
        id='chat-panel'
        style={{ paddingBottom: '190px', paddingTop: '65px' }}
      >
        {/* <ChatPanel className="chatPanel" messages={messageHistory} /> */}
      </ul>
      <footer>
        <Avatar alt='Remy Sharp' className={classes.large} />
        <TextField
          className='message'
          id='outlined-textarea'
          label='Your message'
          placeholder='Say Hey!'
          multiline
          rows='5'
          variant='outlined'
          value={textField}
          onChange={e => setTextField(e.target.value)}
          onKeyPress={e => handleKeyPress(e)}
        />
        <Button
          className='SendMessageButton'
          variant='contained'
          type='submit'
          color='primary'
          onClick={send}
        >
          Send
        </Button>
      </footer>
    </div>
  );
};

export default RoomMessageArea;
