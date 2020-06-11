import axios from 'axios';
import { START_FETCHING_SHOWS, SUCCESS_FETCHING_SHOWS, ERROR_FETCHING_SHOWS } from './show.types';

const startFetchingShows = () => ({
  type: START_FETCHING_SHOWS,
});

const errorFetchingShows = error => ({
  type: ERROR_FETCHING_SHOWS,
  payload: {
    error,
  },
});

const successFetchingShows = shows => ({
  type: SUCCESS_FETCHING_SHOWS,
  payload: {
    shows,
  },
});

const fetchShows = apiIndex => dispatch => {
  dispatch(startFetchingShows());
  axios
    .get(`http://api.tvmaze.com/shows?page=${apiIndex}`)
    .then(res => dispatch(successFetchingShows(res.data)))
    .catch(err => dispatch(errorFetchingShows(err)));
};

export { fetchShows };
