import { createAction, handleActions } from 'redux-actions';
import filterTypes from '../../constants/filterTypes';

/**
 * INITIAL STATE
 */
export const initialState = {
  activeFilter: filterTypes.ALL
};

/**
 * ACTION TYPES
 */
export const CHANGE_FILTER = 'CHANGE_FILTER';

/**
 * ACTION CREATORS
 */
export const changeFilter = createAction(
  CHANGE_FILTER,
  filter => filter
);

/**
 * SELECTORS
 */
export const getActiveFilter = state => state.filter.activeFilter;

/**
 * REDUCER
 */
export const reducer = handleActions(
  {
    [changeFilter]: (state, { payload: filter }) => ({ ...state, activeFilter: filter }),
  },
  initialState
);

/**
 * THUNK AND ASYNC ACTIONS
 */
