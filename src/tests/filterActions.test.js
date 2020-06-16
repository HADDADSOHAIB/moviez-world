import * as actions from '../actions/filterCreators';
import * as types from '../actions/filterTypes';

describe('show creators', () => {
  it('clearFilter should call CLEAR_FILTER', () => {
    const expectedAction = {
      type: types.CLEAR_FILTER,
    };

    expect(actions.clearFilter()).toEqual(expectedAction);
  });

  it('setSearch should call SET_SEARCH', () => {
    const search = 'test';
    const expectedAction = {
      type: types.SET_SEARCH,
      payload: {
        search,
      },
    };

    expect(actions.setSearch(search)).toEqual(expectedAction);
  });

  it('setSechdule should call SET_SECHDULE', () => {
    const sechdule = {
      country: 'US',
      date: new Date(),
    };
    const expectedAction = {
      type: types.SET_SECHDULE,
      payload: {
        sechdule,
      },
    };

    expect(actions.setSechdule(sechdule)).toEqual(expectedAction);
  });
});
