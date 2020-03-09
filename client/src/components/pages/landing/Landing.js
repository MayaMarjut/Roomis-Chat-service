import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import './Landing.css';
import Auth from '../../../Auth';

const buttonStyle = {
  margin: '1rem 0.3rem'
};

const Landing = props => {
  const [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {
    const checkAndUpdateLoginStatus = async () => {
      let status = await Auth.isAuth();
      if (status[0] !== loginStatus) {
        setLoginStatus(status[0]);
      }
    };
    checkAndUpdateLoginStatus();
    // eslint-disable-next-line
  }, []);

  if (loginStatus) {
    return <Redirect to='/rooms' />;
  } else {
    return (
      <div className='landing'>
        <div className='landing-box'>
          <Typography variant='h3'>Roomis</Typography>
          <Typography variant='caption' style={{ color: '#fff' }}>
            Chatting made easy
          </Typography>
          <span className='buttons'>
            <Link to='/register' style={{ textDecoration: 'none' }}>
              <Button
                className='landing-button'
                variant='contained'
                color='primary'
                style={buttonStyle}
              >
                Register
              </Button>
            </Link>
            <Link to='/login' style={{ textDecoration: 'none' }}>
              <Button
                className='landing-button'
                variant='contained'
                color='primary'
                style={buttonStyle}
              >
                Login
              </Button>
            </Link>
          </span>
        </div>
      </div>
    );
  }
};

export default Landing;
