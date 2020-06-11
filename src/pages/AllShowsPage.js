import React from 'react';
import PropTypes from 'prop-types';
import Pagination from '@material-ui/lab/Pagination';
import useStyles from './AllShowsPage.styles';
import ShowCard from '../components/showCard';

const AllShowPage = ({ showsDisplayed, pageCount, onPageChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.shows}>
        {showsDisplayed.map(show => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
      <div className={classes.pagination}>
        <Pagination count={pageCount} color="primary" onChange={onPageChange} />
      </div>
    </div>
  );
};

AllShowPage.propTypes = {
  showsDisplayed: PropTypes.arrayOf(Object),
  pageCount: PropTypes.number,
  onPageChange: PropTypes.func.isRequired,
};

AllShowPage.defaultProps = {
  showsDisplayed: [],
  pageCount: 0,
};

export default AllShowPage;
