import { START_FETCHING_SHOWS, SUCCESS_FETCHING_SHOWS, ERROR_FETCHING_SHOWS } from '../actions/show.types';

const INITIAL_STATE = {
  showsList: [],
  selectedShow: null,
  apiIndex: 1,
  errors: {
    loadingShowsError: null,
  },
  dataLoading: true,
};

const showReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_FETCHING_SHOWS:
      return {
        ...state,
        dataLoading: true,
      };
    case SUCCESS_FETCHING_SHOWS:
      return {
        ...state,
        showsList: action.payload.shows,
        dataLoading: false,
      };
    case ERROR_FETCHING_SHOWS:
      return {
        ...state,
        errors: {
          ...state.errors,
          loadingShowsError: action.payload.error,
        },
      };
    default:
      return {
        ...state,
      };
  }
};

export default showReducer;
