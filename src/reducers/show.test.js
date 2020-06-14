import reducer, { INITIAL_STATE } from './show.reducer';
import * as types from '../actions/show.types';

describe('show reducer', () => {
  const state = {
    ...INITIAL_STATE,
    showsList: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should handle SELECT PAGE', () => {
    expect(
      reducer(state, {
        type: types.SELECT_PAGE,
        payload: { page: 2 },
      }),
    ).toEqual({
      ...state,
      currentPage: 2,
    });
  });

  it('should handle SELECT PAGE, it should not change the page if negative page giving or zero', () => {
    expect(
      reducer(state, {
        type: types.SELECT_PAGE,
        payload: { page: -1 },
      }),
    ).toEqual({
      ...state,
      currentPage: 1,
    });
  });

  it('should handle SELECT PAGE, it should not change the page if out of range page number is giving', () => {
    expect(
      reducer(state, {
        type: types.SELECT_PAGE,
        payload: { page: 5 },
      }),
    ).toEqual({
      ...state,
      currentPage: 1,
    });
  });

  it('should handle INCREASE API INDEX', () => {
    expect(
      reducer(INITIAL_STATE, {
        type: types.INCREASE_API_INDEX,
      }),
    ).toEqual({
      ...INITIAL_STATE,
      apiIndex: 2,
    });
  });

  it('should handle START FETCHING SHOWS', () => {
    expect(
      reducer(INITIAL_STATE, {
        type: types.START_FETCHING_SHOWS,
      }),
    ).toEqual({
      ...INITIAL_STATE,
      dataLoading: true,
    });
  });

  it('should handle  SUCCESS FETCHING SHOWS', () => {
    expect(
      reducer(INITIAL_STATE, {
        type: types.SUCCESS_FETCHING_SHOWS,
        payload: { shows: [1, 1, 1] },
      }),
    ).toEqual({
      ...INITIAL_STATE,
      dataLoading: false,
      showsList: [1, 1, 1],
    });
  });

  it('should handle  ERROR FETCHING SHOWS', () => {
    expect(
      reducer(INITIAL_STATE, {
        type: types.ERROR_FETCHING_SHOWS,
        payload: { error: 'error' },
      }),
    ).toEqual({
      ...INITIAL_STATE,
      dataLoading: false,
      errors: {
        ...INITIAL_STATE.errors,
        loadingShowsError: 'error',
      },
    });
  });
});
