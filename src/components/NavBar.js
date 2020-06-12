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
import useStyles from './NavBar.styles';

const NavBar = ({ handleSearchChange, search, handleSearchQuery }) => {
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
        </Toolbar>
      </AppBar>
    </div>
  );
};

NavBar.propTypes = {
  handleSearchChange: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  handleSearchQuery: PropTypes.func.isRequired,
};

export default NavBar;
