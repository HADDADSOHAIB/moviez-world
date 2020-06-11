import axios from 'axios';
import {
  START_FETCHING_SHOWS,
  SUCCESS_FETCHING_SHOWS,
  ERROR_FETCHING_SHOWS,
  SELECT_PAGE,
  INCREASE_API_INDEX,
} from './show.types';

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
  const apiRequests = [];
  console.log('api index:');
  console.dir(apiIndex);
  for (let i = 1; i <= apiIndex; i += 1) {
    apiRequests.push(axios.get(`http://api.tvmaze.com/shows?page=${i}`));
  }
  Promise.all([...apiRequests])
    .then(values => {
      const shows = values.reduce((memo, item) => memo.concat(item.data), []);
      dispatch(successFetchingShows(shows));
    })
    .catch(err => dispatch(errorFetchingShows(err)));
};

const selectPage = page => ({
  type: SELECT_PAGE,
  payload: {
    page,
  },
});

const increaseApiIndex = () => ({
  type: INCREASE_API_INDEX,
});

// prettier-ignore
export {
  fetchShows,
  selectPage,
  increaseApiIndex,
};
