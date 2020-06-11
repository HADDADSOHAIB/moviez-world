import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useStyles from './showCard.styles';
import textCleanr from '../utils/textCleaner';
import textPreview from '../utils/textPreview';

const ShowCard = ({ show }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={show.image.medium} title="Show" />
        <CardContent>
          <Typography gutterBottom align="center" variant="h5" component="h2">
            {show.name}
          </Typography>
          <Typography variant="body2" align="justify" color="textSecondary" component="p">
            {textPreview(textCleanr(show.summary), 70)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

ShowCard.propTypes = {
  show: PropTypes.objectOf(Object).isRequired,
};

export default ShowCard;
