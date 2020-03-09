import React, { useState } from 'react';
import { loginUser } from '../../../services/authClient';
import { TextField, Paper, Button } from '@material-ui/core';
import Swal from 'sweetalert2';

const Login = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    //Do something here
    let token = await loginUser({ username, password });
    if (token) {
      localStorage.setItem('token', token);
      history.push('/rooms');
    } else {
      Swal.fire('Invalid credentials!', '', 'error');
      setUsername('');
      setPassword('');
    }
  };
  return (
    <div className='landing'>
      <Paper elevation={4} style={{ padding: '2rem', background: '#f4f4f4' }}>
        <form onSubmit={handleSubmit}>
          <div className='input-group'>
            <TextField
              label='Username'
              autoComplete='off'
              value={username}
              onChange={e => setUsername(e.target.value)}
              spellCheck='false'
            />
          </div>
          <div className='input-group'>
            <TextField
              label='Password'
              type='password'
              autoComplete='off'
              value={password}
              onChange={e => setPassword(e.target.value)}
              spellCheck='false'
            />
          </div>
          <div
            className='input-group'
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Button type='submit' style={{ marginTop: '1.5rem' }}>
              Login
            </Button>
            <Button
              type='button'
              style={{ marginTop: '1.5rem' }}
              onClick={() => history.push('/')}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
};

export default Login;
