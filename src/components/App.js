import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AllShowsPage from '../pages/AllShowsPage';
import NavBar from './NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/">
        <AllShowsPage />
      </Route>
    </Router>
  );
}

export default App;
