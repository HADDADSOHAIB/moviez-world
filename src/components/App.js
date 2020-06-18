import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AllShowsPageContainer from '../pages/AllShowsPageContainer';
import NavBar from './NavBar';
import ShowPageContainer from '../pages/showPageContainer';
import Footer from './Footer';
import useStyles from './AppStyles';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <Router>
          <NavBar />
          <Route exact path="/">
            <AllShowsPageContainer />
          </Route>
          <Route exact path="/:id" component={ShowPageContainer} />
        </Router>
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
