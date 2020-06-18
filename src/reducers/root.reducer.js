import { combineReducers } from 'redux';
import showReducer from './show.reducer';
import filterReducer from './filter.reducer';

const rootReducer = combineReducers({
  show: showReducer,
  filter: filterReducer,
});

export default rootReducer;
