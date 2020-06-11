import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Pagination from '@material-ui/lab/Pagination';
import { connect } from 'react-redux';
import { fetchShows, selectPage } from '../actions/show.creators';
import useStyles from './AllShowsPage.styles';
import ShowCard from '../components/showCard';

const AllShowPage = ({ apiIndex, fetchShows, shows, selectPage, currentPage }) => {
  useEffect(() => fetchShows(apiIndex), []);
  const classes = useStyles();

  const [pageCount, setPageCount] = useState(0);
  useEffect(() => setPageCount(Math.floor(shows.length / 10)), [shows]);

  const handlePageChange = (event, value) => selectPage(value);

  const firstShowIndex = currentPage * 10;
  const lastShowIndex = firstShowIndex + 10;
  return (
    <div className={classes.root}>
      <div className={classes.shows}>
        {shows.slice(firstShowIndex, lastShowIndex).map(show => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
      <div className={classes.pagination}>
        <Pagination count={pageCount} color="primary" onChange={handlePageChange} />
      </div>
    </div>
  );
};

AllShowPage.propTypes = {
  apiIndex: PropTypes.number.isRequired,
  fetchShows: PropTypes.func.isRequired,
  shows: PropTypes.arrayOf(Object).isRequired,
  selectPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  apiIndex: state.show.apiIndex,
  shows: state.show.showsList,
  currentPage: state.show.currentPage,
});

const mapDispatchToProps = dispatch => ({
  fetchShows: apiIndex => dispatch(fetchShows(apiIndex)),
  selectPage: page => dispatch(selectPage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllShowPage);
