import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchShows, selectPage, increaseApiIndex } from '../actions/showCreators';
import AllShowsPage from './AllShowsPage';
import Loader from '../components/Loader';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

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
  error,
  dataLoading,
}) => {
  const classes = useStyles();

  const [pageCount, setPageCount] = useState(0);
  const [firstShowIndex, setFirstShowIndex] = useState(0);
  const [lastShowIndex, setLastShowIndex] = useState(0);
  const [NoShows, setNoShows] = useState((<div>No Shows</div>));
  const [showsExist, setShowsExist] = useState((false));

  useEffect(() => {
    if (dataLoading) {
      setNoShows(<Loader />);
      setShowsExist(false);
    } else if (error) {
      setNoShows(<div className={classes.root}> Error while loading, try later</div>);
      setShowsExist(false);
    } else {
      setShowsExist(true);
    }
    return () => '';
  }, [error, dataLoading, classes.root]);

  useEffect(() => {
    setFirstShowIndex((currentPage - 1) * 10);
    setLastShowIndex(currentPage * 10);
    return () => '';
  }, [shows, currentPage]);

  useEffect(() => {
    fetchShows(apiIndex, { search, sechdule });
    return () => '';
  }, [fetchShows, apiIndex, search, sechdule]);

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
    <div>
      {
        !showsExist ? NoShows : (
          <AllShowsPage
            pageCount={pageCount}
            handlePageChange={handlePageChange}
            showsDisplayed={shows.slice(firstShowIndex, lastShowIndex)}
            currentPage={currentPage}
            handleLoadMoreShows={handleLoadMoreShows}
            search={search}
            sechdule={sechdule}
          />
        )
      }
    </div>
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
  dataLoading: PropTypes.bool.isRequired,
  error: PropTypes.shape({}),
};

AllShowPageContainer.defaultProps = {
  search: '',
  sechdule: {},
  error: {},
};

const mapStateToProps = state => ({
  apiIndex: state.show.apiIndex,
  shows: state.show.showsList,
  currentPage: state.show.currentPage,
  search: state.filter.search,
  sechdule: state.filter.sechdule,
  dataLoading: state.show.dataLoading,
  error: state.show.errors.loadingShowsError,
});

const mapDispatchToProps = dispatch => ({
  fetchShows: (apiIndex, options) => dispatch(fetchShows(apiIndex, options)),
  selectPage: page => dispatch(selectPage(page)),
  increaseApiIndex: () => dispatch(increaseApiIndex()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllShowPageContainer);
