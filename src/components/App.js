import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import AllShowsPageContainer from '../pages/AllShowsPage.container';

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Route exact path="/">
          <AllShowsPageContainer />
        </Route>
      </Router>
    </div>
  );
}

export default App;
