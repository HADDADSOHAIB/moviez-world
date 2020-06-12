import React from 'react';
import PropTypes from 'prop-types';
import Pagination from '@material-ui/lab/Pagination';
import Button from '@material-ui/core/Button';
import useStyles from './AllShowsPage.styles';
import ShowCard from '../components/showCard';
import CurrentFilter from '../components/currentFilter';

// prettier-ignore
const AllShowPage = ({
  showsDisplayed,
  pageCount,
  handlePageChange,
  handleLoadMoreShows,
  currentPage,
  search,
  sechdule,
}) => {
  const classes = useStyles();
  const showMoreButton = currentPage === pageCount && !search && !sechdule;

  return (
    <div className={classes.root}>
      <CurrentFilter />
      <div className={classes.shows}>
        {showsDisplayed.map(show => (
          <ShowCard show={show} key={show.id} />
        ))}
      </div>
      <div className={classes.center}>
        { showMoreButton
          ? (
            <Button variant="contained" color="primary" onClick={handleLoadMoreShows}>
              load more shows
            </Button>
          ) : ''}
      </div>
      <div className={classes.center}>
        <Pagination count={pageCount} page={currentPage} color="primary" onChange={handlePageChange} />
      </div>
    </div>
  );
};

AllShowPage.propTypes = {
  showsDisplayed: PropTypes.arrayOf(Object),
  pageCount: PropTypes.number,
  handlePageChange: PropTypes.func.isRequired,
  handleLoadMoreShows: PropTypes.func.isRequired,
  currentPage: PropTypes.number,
  search: PropTypes.string,
  sechdule: PropTypes.objectOf(Object),
};

AllShowPage.defaultProps = {
  showsDisplayed: [],
  pageCount: 0,
  currentPage: 1,
  search: '',
  sechdule: {},
};

export default AllShowPage;
