import reducer, { INITIAL_STATE } from './filter.reducer';
import * as types from '../actions/filter.types';

describe('show reducer', () => {
  const state = {
    ...INITIAL_STATE,
    search: 'keyword',
    sechdule: { country: 'US', date: 'date' },
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should handle CLEAR FILTER', () => {
    expect(
      reducer(state, {
        type: types.CLEAR_FILTER,
      }),
    ).toEqual({
      ...state,
      search: null,
      sechdule: null,
    });
  });

  it('should handle SET SEARCH', () => {
    expect(
      reducer(INITIAL_STATE, {
        type: types.SET_SEARCH,
        payload: { search: 'search' },
      }),
    ).toEqual({
      ...INITIAL_STATE,
      search: 'search',
    });
  });

  it('should handle SET SECHDULE', () => {
    const sechdule = { country: 'search', date: 'date' };
    expect(
      reducer(INITIAL_STATE, {
        type: types.SET_SECHDULE,
        payload: { sechdule },
      }),
    ).toEqual({
      ...INITIAL_STATE,
      sechdule,
    });
  });
});
