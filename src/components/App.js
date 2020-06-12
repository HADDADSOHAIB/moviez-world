import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AllShowsPageContainer from '../pages/AllShowsPage.container';
import NavBarContainer from './NavBar.container';

function App() {
  return (
    <div className="app">
      <Router>
        <NavBarContainer />
        <Route exact path="/">
          <AllShowsPageContainer />
        </Route>
      </Router>
    </div>
  );
}

export default App;
