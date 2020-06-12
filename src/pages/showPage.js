import React from 'react';
import PropTypes, { object } from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './showPage.styles';
import textCleaner from '../utils/textCleaner';

const ShowPage = ({ show }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.imageCard}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="show image"
            height="500"
            image={show.image ? show.image.medium : '/default.jpg'}
            title="show image"
          />
        </CardActionArea>
      </Card>
      <Card className={classes.imageCard}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" align="center">
              {show.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" align="justify">
              {textCleaner(show.summary)}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

ShowPage.propTypes = {
  show: PropTypes.objectOf(object).isRequired,
};

export default ShowPage;
