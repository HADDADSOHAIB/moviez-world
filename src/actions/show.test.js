// import configureMockStore from 'redux-mock-store';
import expect from 'expect';
// import thunk from 'redux-thunk';
// import moxios from 'moxios';
// import getPostsMock from '../../mocks/getPostsMock';

import * as actions from './show.creators';
import * as types from './show.types';

// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);

// describe('getPosts actions', () => {
//   beforeEach(() => {
//     moxios.install();
//   });

//   afterEach(() => {
//     moxios.uninstall();
//   });

//   it('creates GET_POSTS_SUCCESS after successfuly fetching postse', () => {
//     moxios.wait(() => {
//       const request = moxios.requests.mostRecent();
//       request.respondWith({
//         status: 200,
//         response: {
//           data: ['show1', 'show2'],
//         },
//       });
//     });

//     const expectedActions = [
//       { type: types.START_FETCHING_SHOWS },
//       { type: types.SUCCESS_FETCHING_SHOWS, payload: { shows: ['show1', 'show2'] } },
//     ];

//     const store = mockStore({ show: { showsList: [] } });

//     return store.dispatch(actions.fetchShows(1, { search: 'test', sechdule: {} })).then(() => {
//       // return of async actions
//       expect(store.getActions()).toEqual(expectedActions);
//     });
//   });
// });

describe('show creators', () => {
  it('select page should call SELECT PAGE with the correct number', () => {
    const page = 3;
    const expectedAction = {
      type: types.SELECT_PAGE,
      payload: {
        page,
      },
    };

    expect(actions.selectPage(page)).toEqual(expectedAction);
  });

  it('increaseApiIndex should call INCREASE_API_INDEX', () => {
    const expectedAction = {
      type: types.INCREASE_API_INDEX,
    };

    expect(actions.increaseApiIndex()).toEqual(expectedAction);
  });

  it('startFetchingShows should call START_FETCHING_SHOWS', () => {
    const expectedAction = {
      type: types.START_FETCHING_SHOWS,
    };

    expect(actions.startFetchingShows()).toEqual(expectedAction);
  });

  it('errorFetchingShows should call ERROR_FETCHING_SHOWS', () => {
    const error = { error: 'this is an error' };
    const expectedAction = {
      type: types.ERROR_FETCHING_SHOWS,
      payload: {
        error,
      },
    };

    expect(actions.errorFetchingShows(error)).toEqual(expectedAction);
  });

  it('successFetchingShows should call SUCCESS_FETCHING_SHOWS', () => {
    const shows = ['show1', 'show2'];
    const expectedAction = {
      type: types.SUCCESS_FETCHING_SHOWS,
      payload: {
        shows,
      },
    };

    expect(actions.successFetchingShows(shows)).toEqual(expectedAction);
  });
});
