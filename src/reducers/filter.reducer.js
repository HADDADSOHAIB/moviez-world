import { CLEAR_FILTER, SET_SEARCH, SET_SECHDULE } from '../actions/filter.types';

const INITIAL_STATE = {
  search: null,
  sechdule: null,
};

const showReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;

  switch (action.type) {
    case CLEAR_FILTER:
      return {
        ...state,
        search: null,
        sechdule: null,
      };
    case SET_SEARCH:
      return {
        ...state,
        search: payload.search,
      };
    default:
      return {
        ...state,
      };
  }
};

export default showReducer;
