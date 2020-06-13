import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ShowPage from './showPage';

const ShowPageContainer = ({ match }) => {
  const [show, setShow] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    axios
      .get(`http://api.tvmaze.com/shows/${match.params.id}`)
      .then(res => setShow(res.data))
      .catch(() => setNotFound(true));
    return () => '';
  }, []);

  const loading = notFound ? <p>Show not found</p> : <p>Loading ...</p>;
  return <div>{show ? <ShowPage show={show} /> : loading}</div>;
};

ShowPageContainer.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ShowPageContainer;
