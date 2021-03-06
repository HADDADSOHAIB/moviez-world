import { CLEAR_FILTER, SET_SEARCH, SET_SECHDULE } from '../actions/filterTypes';

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
    case SET_SECHDULE:
      return {
        ...state,
        sechdule: payload.sechdule,
      };
    default:
      return {
        ...state,
      };
  }
};

export { INITIAL_STATE };
export default showReducer;
