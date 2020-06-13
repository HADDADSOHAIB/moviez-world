import React from 'react';
import PropTypes from 'prop-types';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Tooltip from '@material-ui/core/Tooltip';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import useStyles from './Filter.styles';
import CurrentFilter from './currentFilter';

// prettier-ignore
const Filter = ({
  handleSearchChange,
  search,
  handleSearchQuery,
  selectedDate,
  handleDateChange,
  handleCountryChange,
  selectedCountry,
  handleSearchSechdule,
  handleSearchClick,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <CurrentFilter />
        <div className={classes.searchWrap}>
          <div className={classes.search}>
            <Tooltip title="Search by name" placement="bottom">
              <Button variant="contained" color="primary" onClick={handleSearchClick}>Search</Button>
            </Tooltip>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleSearchChange}
              value={search}
              onKeyUp={handleSearchQuery}
            />
          </div>
        </div>
        <div className={classes.sechdule}>
          <div className={classes.airedSearch}>
            <Tooltip title="Search shows by air date and by country" placement="bottom">
              <Button variant="contained" color="secondary" onClick={handleSearchSechdule}>Search</Button>
            </Tooltip>
          </div>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="center" alignItems="center">
              <KeyboardDatePicker
                className={classes.date}
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </Grid>
          </MuiPickersUtilsProvider>
          <div className={classes.country}>
            <FormControl>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedCountry}
                onChange={handleCountryChange}
              >
                <MenuItem value="US">US</MenuItem>
                <MenuItem value="GB">UK</MenuItem>
                <MenuItem value="FR">France</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

Filter.propTypes = {
  handleSearchChange: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  handleSearchQuery: PropTypes.func.isRequired,
  handleDateChange: PropTypes.func.isRequired,
  selectedDate: PropTypes.objectOf(Object).isRequired,
  handleCountryChange: PropTypes.func.isRequired,
  selectedCountry: PropTypes.string.isRequired,
  handleSearchSechdule: PropTypes.func.isRequired,
  handleSearchClick: PropTypes.func.isRequired,
};

export default Filter;
