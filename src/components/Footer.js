import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useStyles from './Footer.styles';

// prettier-ignore
const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.root}>
        <Typography variant="body1" component="p">
          Moviez World, for more informations contact me on
          <a href="https://www.linkedin.com/in/sohaib-haddad/">Linked In</a>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
