import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchShows } from '../actions/show.creators';
import { setSearch } from '../actions/filter.creators';
import NavBar from './NavBar';

const NavBarContainer = ({ setSearchInStore, fetchShows }) => {
  const [search, setSearchLocally] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedCountry, setCountry] = useState('US');

  const handleCountryChange = event => setCountry(event.target.value);
  const handleDateChange = date => setSelectedDate(date);
  const handleSearchChange = e => setSearchLocally(e.target.value);
  const handleSearchQuery = e => {
    if (e.keyCode === 13) {
      setSearchInStore(search);
      fetchShows({ search });
      setSearchLocally('');
    }
  };

  return (
    <NavBar
      handleSearchChange={handleSearchChange}
      search={search}
      handleSearchQuery={handleSearchQuery}
      handleDateChange={handleDateChange}
      selectedDate={selectedDate}
      handleCountryChange={handleCountryChange}
      selectedCountry={selectedCountry}
    />
  );
};

NavBarContainer.propTypes = {
  fetchShows: PropTypes.func.isRequired,
  setSearchInStore: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  fetchShows: options => dispatch(fetchShows(1, options)),
  setSearchInStore: search => dispatch(setSearch(search)),
});

export default connect(null, mapDispatchToProps)(NavBarContainer);
