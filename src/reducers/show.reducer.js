const INITIAL_STATE = {
  showsList: [],
  selectedShow: null,
  apiIndex: 1,
};

const showReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 1:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default showReducer;
