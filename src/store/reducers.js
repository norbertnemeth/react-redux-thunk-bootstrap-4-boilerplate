import { combineReducers } from 'redux';

import { reducer as tasks } from './tasks';

export default combineReducers({
  tasks
});
