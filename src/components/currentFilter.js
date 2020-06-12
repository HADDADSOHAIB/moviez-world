import React from 'react';
import Chip from '@material-ui/core/Chip';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { clearFilter } from '../actions/filter.creators';
import useStyles from './currentFilter.styles';
import { fetchShows } from '../actions/show.creators';

// prettier-ignore
const CurrentFilter = ({
  search,
  sechdule,
  clearFilter,
  apiIndex,
  fetchShows,
}) => {
  const classes = useStyles();

  const handleDelete = () => {
    clearFilter();
    fetchShows(apiIndex, { search: null, sechdule: null });
  };

  let message = '';
  if (search) {
    message = `Search for: ${search}`;
  } else if (sechdule && sechdule.date && sechdule.country) {
    message = `Shows aired on ${sechdule.date.toISOString().split('T')[0]}, in the ${sechdule.country}`;
  }

  return (
    <div className={classes.root}>
      {message ? <Chip label={message} onDelete={handleDelete} color="primary" /> : ''}
    </div>
  );
};

CurrentFilter.propTypes = {
  search: PropTypes.string,
  sechdule: PropTypes.objectOf(Object),
  clearFilter: PropTypes.func.isRequired,
  fetchShows: PropTypes.func.isRequired,
  apiIndex: PropTypes.number.isRequired,
};

CurrentFilter.defaultProps = {
  search: '',
  sechdule: {},
};

const mapStateToProps = state => ({
  search: state.filter.search,
  sechdule: state.filter.sechdule,
  apiIndex: state.show.apiIndex,
});

const mapDispatchToProps = dispatch => ({
  clearFilter: () => dispatch(clearFilter()),
  fetchShows: (apiIndex, options) => dispatch(fetchShows(apiIndex, options)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentFilter);
