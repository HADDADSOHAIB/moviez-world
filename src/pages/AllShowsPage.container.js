import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchShows, selectPage, increaseApiIndex } from '../actions/show.creators';
import AllShowsPage from './AllShowsPage';

// prettier-ignore
const AllShowPageContainer = ({
  apiIndex,
  fetchShows,
  increaseApiIndex,
  shows,
  selectPage,
  currentPage,
  sechdule,
  search,
}) => {
  const [pageCount, setPageCount] = useState(0);
  const firstShowIndex = (currentPage - 1) * 10;
  const lastShowIndex = firstShowIndex + 10;

  useEffect(() => {
    fetchShows(apiIndex, { search, sechdule });
    return () => '';
  }, []);

  useEffect(() => {
    setPageCount(Math.floor(shows.length / 10));
    return () => '';
  }, [shows]);

  const handlePageChange = (event, value) => selectPage(value);
  const handleLoadMoreShows = () => {
    increaseApiIndex();
    fetchShows(apiIndex + 1, {});
  };

  return (
    <AllShowsPage
      pageCount={pageCount}
      handlePageChange={handlePageChange}
      showsDisplayed={shows.slice(firstShowIndex, lastShowIndex)}
      currentPage={currentPage}
      handleLoadMoreShows={handleLoadMoreShows}
      search={search}
      sechdule={sechdule}
    />
  );
};

AllShowPageContainer.propTypes = {
  apiIndex: PropTypes.number.isRequired,
  fetchShows: PropTypes.func.isRequired,
  increaseApiIndex: PropTypes.func.isRequired,
  shows: PropTypes.arrayOf(Object).isRequired,
  selectPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  search: PropTypes.string,
  sechdule: PropTypes.objectOf(Object),
};

AllShowPageContainer.defaultProps = {
  search: '',
  sechdule: {},
};

const mapStateToProps = state => ({
  apiIndex: state.show.apiIndex,
  shows: state.show.showsList,
  currentPage: state.show.currentPage,
  search: state.filter.search,
  sechdule: state.filter.sechdule,
});

const mapDispatchToProps = dispatch => ({
  fetchShows: (apiIndex, options) => dispatch(fetchShows(apiIndex, options)),
  selectPage: page => dispatch(selectPage(page)),
  increaseApiIndex: () => dispatch(increaseApiIndex()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllShowPageContainer);
