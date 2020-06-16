import { SET_SECHDULE, CLEAR_FILTER, SET_SEARCH } from './filterTypes';

const clearFilter = () => ({
  type: CLEAR_FILTER,
});

const setSearch = search => ({
  type: SET_SEARCH,
  payload: {
    search,
  },
});

const setSechdule = sechdule => ({
  type: SET_SECHDULE,
  payload: {
    sechdule,
  },
});

export { clearFilter, setSearch, setSechdule };
