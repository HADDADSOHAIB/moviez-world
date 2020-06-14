import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import axios from 'axios';
import ShowPage from './showPage';
import Loader from '../components/Loader';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
}));

const ShowPageContainer = ({ match }) => {
  const classes = useStyles();
  const [show, setShow] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [Loading, setLoading] = useState(<Loader />);

  useEffect(() => {
    axios
      .get(`http://api.tvmaze.com/shows/${match.params.id}`)
      .then(res => setShow(res.data))
      .catch(() => setNotFound(true));
    return () => '';
  }, []);

  useEffect(() => {
    setLoading(notFound ? <div className={classes.root}>Show not found</div> : <Loader />);
    return () => '';
  }, [show, notFound]);

  return <div>{show ? <ShowPage show={show} /> : Loading}</div>;
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
