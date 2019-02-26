import { combineReducers } from 'redux';
import home from './home';
import user from './user';

const reducers = combineReducers({
  home,
  user,
});

export default reducers;
