import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchShows } from '../actions/show.creators';
import useStyles from './AllShowsPage.styles';
import ShowCard from '../components/showCard';

const AllShowPage = ({ apiIndex, fetchShows, shows }) => {
  useEffect(() => fetchShows(apiIndex), []);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {shows.length !== 0 ? (
        <>
          <ShowCard show={shows[0]} />
          <ShowCard show={shows[1]} />
          <ShowCard show={shows[2]} />
          <ShowCard show={shows[3]} />
          <ShowCard show={shows[10]} />
          <ShowCard show={shows[11]} />
          <ShowCard show={shows[12]} />
          <ShowCard show={shows[13]} />
          <ShowCard show={shows[20]} />
          <ShowCard show={shows[21]} />
        </>
      ) : (
        ''
      )}
    </div>
  );
};

AllShowPage.propTypes = {
  apiIndex: PropTypes.number.isRequired,
  fetchShows: PropTypes.func.isRequired,
  shows: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = state => ({
  apiIndex: state.show.apiIndex,
  shows: state.show.showsList,
});

const mapDispatchToProps = dispatch => ({
  fetchShows: apiIndex => dispatch(fetchShows(apiIndex)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllShowPage);
