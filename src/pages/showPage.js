import React from 'react';
import PropTypes, { object } from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
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
            {show.genres.length ? (
              <div className={classes.genre}>
                <Typography variant="h6" color="textPrimary" component="p">
                  Genre:
                </Typography>
                {show.genres.map(genre => (
                  <Chip label={genre} key={genre} color="primary" variant="outlined" />
                ))}
              </div>
            ) : (
              ''
            )}
            {show.language ? (
              <div className={classes.language}>
                <Typography variant="h6" color="textPrimary" component="p">
                  Language:
                </Typography>
                <Chip label={show.language} color="secondary" variant="outlined" />
              </div>
            ) : (
              ''
            )}
            {show.officialSite ? (
              <div className={classes.officialSite}>
                <Typography variant="h6" color="textPrimary" component="p">
                  Official Site:
                </Typography>
                <a href={show.officialSite}>{show.officialSite}</a>
              </div>
            ) : (
              ''
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

ShowPage.propTypes = {
  show: PropTypes.objectOf(object).isRequired,
};

export default ShowPage;
