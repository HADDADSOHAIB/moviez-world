import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchShows, selectPage } from '../actions/show.creators';
import { setSearch, clearFilter, setSechdule } from '../actions/filter.creators';
import NavBar from './NavBar';

// prettier-ignore
const NavBarContainer = ({
  setSearchInStore,
  fetchShows,
  clearFilter,
  setSechdule,
  selectPage,
}) => {
  const [search, setSearchLocally] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedCountry, setCountry] = useState('US');

  const handleCountryChange = event => setCountry(event.target.value);
  const handleDateChange = date => setSelectedDate(date);
  const handleSearchChange = e => setSearchLocally(e.target.value);
  const handleSearchQuery = e => {
    if (e.keyCode === 13) {
      clearFilter();
      setSearchInStore(search);
      selectPage(1);
      fetchShows({ search });
      setSearchLocally('');
    }
  };

  const handleSearchSechdule = () => {
    clearFilter();
    const sechdule = { date: selectedDate, country: selectedCountry };
    setSechdule(sechdule);
    selectPage(1);
    fetchShows({ sechdule });
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
      handleSearchSechdule={handleSearchSechdule}
    />
  );
};

NavBarContainer.propTypes = {
  fetchShows: PropTypes.func.isRequired,
  setSearchInStore: PropTypes.func.isRequired,
  clearFilter: PropTypes.func.isRequired,
  setSechdule: PropTypes.func.isRequired,
  selectPage: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  fetchShows: options => dispatch(fetchShows(1, options)),
  setSearchInStore: search => dispatch(setSearch(search)),
  clearFilter: () => dispatch(clearFilter()),
  setSechdule: sechdule => dispatch(setSechdule(sechdule)),
  selectPage: page => dispatch(selectPage(page)),
});

export default connect(null, mapDispatchToProps)(NavBarContainer);
