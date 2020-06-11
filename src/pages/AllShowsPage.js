import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchShows } from '../actions/show.creators';

const AllShowPage = ({ apiIndex, fetchShows }) => {
  useEffect(() => fetchShows(apiIndex), []);
  const pageName = 'Shows page';
  return <h1>{pageName}</h1>;
};

AllShowPage.propTypes = {
  apiIndex: PropTypes.number.isRequired,
  fetchShows: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  apiIndex: state.show.apiIndex,
});

const mapDispatchToProps = dispatch => ({
  fetchShows: apiIndex => dispatch(fetchShows(apiIndex)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllShowPage);
