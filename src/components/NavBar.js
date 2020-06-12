import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import useStyles from './NavBar.styles';

// prettier-ignore
const NavBar = ({
  handleSearchChange,
  search,
  handleSearchQuery,
  selectedDate,
  handleDateChange,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Moviez World
          </Typography>
          <Button color="inherit">
            <Link to="/" className={classes.link}>
              Home
            </Link>
          </Button>
          <div className={classes.searchWrap}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
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
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="center" alignItems="center">
                <KeyboardDatePicker
                  className={classes.date}
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

NavBar.propTypes = {
  handleSearchChange: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  handleSearchQuery: PropTypes.func.isRequired,
  handleDateChange: PropTypes.func.isRequired,
  selectedDate: PropTypes.string.isRequired,
};

export default NavBar;
