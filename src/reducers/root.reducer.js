import { combineReducers } from 'redux';
import showReducer from './show.reducer';

const rootReducer = combineReducers({
  show: showReducer,
});

export default rootReducer;
