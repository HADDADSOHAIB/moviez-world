import {
  START_FETCHING_SHOWS,
  SUCCESS_FETCHING_SHOWS,
  ERROR_FETCHING_SHOWS,
  SELECT_PAGE,
  INCREASE_API_INDEX,
} from '../actions/showTypes';

const INITIAL_STATE = {
  showsList: [],
  currentPage: 1,
  apiIndex: 1,
  dataLoading: true,
  errors: {
    loadingShowsError: null,
  },
};

const showReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;

  switch (action.type) {
    case START_FETCHING_SHOWS:
      return {
        ...state,
        dataLoading: true,
      };
    case SUCCESS_FETCHING_SHOWS:
      return {
        ...state,
        showsList: payload.shows,
        dataLoading: false,
      };
    case ERROR_FETCHING_SHOWS:
      return {
        ...state,
        errors: {
          ...state.errors,
          loadingShowsError: payload.error,
        },
        dataLoading: false,
      };
    case SELECT_PAGE:
      if (payload.page <= Math.floor(state.showsList.length / 10) && payload.page >= 1) {
        return {
          ...state,
          currentPage: payload.page,
        };
      }

      return {
        ...state,
      };
    case INCREASE_API_INDEX:
      return {
        ...state,
        apiIndex: state.apiIndex + 1,
      };
    default:
      return {
        ...state,
      };
  }
};

export { INITIAL_STATE };
export default showReducer;
