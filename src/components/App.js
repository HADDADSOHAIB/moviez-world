import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AllShowsPageContainer from '../pages/AllShowsPage.container';
import NavBarContainer from './NavBar.container';
import ShowPageContainer from '../pages/showPage.container';

function App() {
  return (
    <div className="app">
      <Router>
        <NavBarContainer />
        <Route exact path="/">
          <AllShowsPageContainer />
        </Route>
        <Route exact path="/:id" component={ShowPageContainer} />
      </Router>
    </div>
  );
}

export default App;
