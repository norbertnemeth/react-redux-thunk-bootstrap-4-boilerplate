import { combineReducers } from 'redux';

import { reducer as tasks } from './tasks';
import { reducer as filter } from './filter';

export default combineReducers({
  tasks,
  filter
});
