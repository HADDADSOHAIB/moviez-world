import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import useStyles from './NavBar.styles';

// prettier-ignore
const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Moviez World
          </Typography>
          <Button color="inherit">
            <Link to="/" className={classes.link}>
              Home
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
