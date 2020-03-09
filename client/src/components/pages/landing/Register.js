import React, { useState } from 'react';
import { registerUser } from '../../../services/userClient';
import { TextField, Paper, Button } from '@material-ui/core';
import Swal from 'sweetalert2';

const Register = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [password2, setPassword2] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== password2) {
      Swal.fire('Password inputs do not match!', '', 'error');
      return;
    } else {
      let response = await registerUser({ username, password, email });
      if (response) {
        Swal.fire('Register successful, you can log in now!', '', 'success');
        setUsername('');
        setPassword('');
        setPassword2('');
        setEmail('');
        history.push('/login');
      } else {
        Swal.fire('Username or email already taken!', '', 'error');
      }
    }
  };

  return (
    <div className='landing'>
      <Paper elevation={4} style={{ padding: '2rem', background: '#f4f4f4' }}>
        <form onSubmit={handleSubmit} autoComplete='off'>
          <div className='input-group'>
            <TextField
              type='text'
              name='username'
              label='Username'
              value={username}
              spellCheck='false'
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className='input-group'>
            <TextField
              type='email'
              name='email'
              label='Email'
              spellCheck='false'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className='input-group'>
            <TextField
              type='password'
              name='password'
              label='Password'
              spellCheck='false'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className='input-group'>
            <TextField
              type='password'
              name='password2'
              spellCheck='false'
              label='Confirm password'
              value={password2}
              onChange={e => setPassword2(e.target.value)}
            />
          </div>
          <div
            className='input-group'
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Button type='submit' style={{ marginTop: '1.5rem' }}>
              Register
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

export default Register;
