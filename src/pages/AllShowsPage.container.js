import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchShows, selectPage } from '../actions/show.creators';
import AllShowsPage from './AllShowsPage';

// prettier-ignore
const AllShowPageContainer = ({
  apiIndex,
  fetchShows,
  shows,
  selectPage,
  currentPage,
}) => {
  useEffect(() => fetchShows(apiIndex), []);

  const [pageCount, setPageCount] = useState(0);
  const firstShowIndex = (currentPage - 1) * 10;
  const lastShowIndex = firstShowIndex + 10;

  useEffect(() => setPageCount(Math.floor(shows.length / 10)), [shows]);

  const handlePageChange = (event, value) => selectPage(value);

  return (
    <AllShowsPage
      pageCount={pageCount}
      onPageChange={handlePageChange}
      showsDisplayed={shows.slice(firstShowIndex, lastShowIndex)}
    />
  );
};

AllShowPageContainer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(AllShowPageContainer);
