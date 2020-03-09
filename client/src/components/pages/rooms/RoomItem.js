import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 280
  },
  media: {
    height: 180
  },
  content: {
    height: 100
  }
});

export default function RoomItem(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link
        to={`rooms/${props.room.name}`}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`https://source.unsplash.com/featured/?${props.room.name}`}
            title='Contemplative Reptile'
          />
          <CardContent className={classes.content}>
            <Typography gutterBottom variant='h5' component='h2'>
              {props.room.name}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {props.room.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
