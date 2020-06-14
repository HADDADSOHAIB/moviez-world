import axios from 'axios';
import {
  START_FETCHING_SHOWS,
  SUCCESS_FETCHING_SHOWS,
  ERROR_FETCHING_SHOWS,
  SELECT_PAGE,
  INCREASE_API_INDEX,
} from './show.types';
import onlyUniques from '../utils/onlyUniques';

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

const fetchSearchShows = (dispatch, search) =>
  axios
    .get(`https://api.tvmaze.com/search/shows?q=${search}`)
    .then(res => dispatch(successFetchingShows(res.data.map(el => el.show))))
    .catch(err => dispatch(errorFetchingShows(err)));

const fetchSchduleShows = (dispatch, sechdule) =>
  axios
    .get(
      ` https://api.tvmaze.com/schedule?country=${sechdule.country}&date=${
        sechdule.date.toISOString().split('T')[0]
      }`,
    )
    .then(res => dispatch(successFetchingShows(onlyUniques(res.data.map(el => el.show)))))
    .catch(err => dispatch(errorFetchingShows(err)));

const fetchAllShows = (dispatch, apiIndex) => {
  const apiRequests = [];

  for (let i = 1; i <= apiIndex; i += 1) {
    apiRequests.push(axios.get(`https://api.tvmaze.com/shows?page=${i}`));
  }
  return Promise.all([...apiRequests])
    .then(values => {
      const shows = values.reduce((memo, item) => memo.concat(item.data), []);
      dispatch(successFetchingShows(shows));
    })
    .catch(err => dispatch(errorFetchingShows(err)));
};

const fetchShows = (apiIndex, options) => dispatch => {
  const { search, sechdule } = options;
  dispatch(startFetchingShows());
  if (search) {
    return fetchSearchShows(dispatch, search);
  }
  if (sechdule) {
    return fetchSchduleShows(dispatch, sechdule);
  }
  return fetchAllShows(dispatch, apiIndex);
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
  startFetchingShows,
  errorFetchingShows,
  successFetchingShows,
};
