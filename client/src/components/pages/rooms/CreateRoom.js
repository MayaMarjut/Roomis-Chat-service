import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));
//   const classes = useStyles();

class CreateRoom extends Component {
  state = { name: '', description: '' };

  nameAdded = event => {
    this.setState({ name: event.target.value });
  };
  descriptionAdded = event => {
    this.setState({ description: event.target.value });
  };
  ready = event => {
    event.preventDefault();
    this.props.isReady(this.state);
    this.setState({ name: '', description: '' });
  };

  render() {
    return (
      <div
        style={{
          margin: 'auto',
          minHeight: '150px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography variant='h5'>Create Chat room</Typography>
        <form
          noValidate
          className='create-form'
          autoComplete='off'
          onSubmit={this.ready}
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <TextField
            id='standard-basic'
            label='Room name'
            value={this.state.name}
            onChange={this.nameAdded}
            style={{ margin: '0.5rem' }}
          />
          <TextField
            id='standard-basic'
            label='Room description'
            value={this.state.description}
            onChange={this.descriptionAdded}
            style={{ margin: '0.5rem', marginRight: '1rem' }}
          />
          <Button variant='contained' type='submit' color='primary'>
            Create
          </Button>
        </form>
      </div>
    );
  }
}

export default CreateRoom;
