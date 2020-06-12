import { SET_SECHDULE, CLEAR_FILTER, SET_SEARCH } from './filter.types';

const clearFilter = () => ({
  type: CLEAR_FILTER,
});

const setSearch = search => ({
  type: SET_SEARCH,
  payload: {
    search,
  },
});

export { clearFilter, setSearch };
