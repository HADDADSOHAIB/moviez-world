import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useStyles from './ShowCard.styles';
import textCleanr from '../utils/textCleaner';
import textPreview from '../utils/textPreview';

const ShowCard = ({ show, history }) => {
  const classes = useStyles();
  const image = show.image ? show.image.medium : '/default.jpg';
  const handleClick = () => history.push(`/${show.id}`);

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleClick}>
        <CardMedia className={classes.media} image={image} title="Show" />
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
  history: PropTypes.objectOf(Object).isRequired,
};

export default withRouter(ShowCard);
