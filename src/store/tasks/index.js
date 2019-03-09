import { createAction, handleActions } from 'redux-actions';

/**
 * INITIAL STATE
 */
export const initialState = [];

/**
 * ACTION TYPES
 */
export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const CLEAR_TASKS = 'CLEAR_TASKS';

/**
 * ACTION CREATORS
 */
export const addTask = createAction(
  ADD_TASK,
  label => label
);
export const toggleTask = createAction(
  TOGGLE_TASK,
  id => id
);
export const clearTasks = createAction(
  CLEAR_TASKS
);

/**
 * SELECTORS
 */
export const getTasks = state => state.tasks;

/**
 * REDUCER
 */
export const reducer = handleActions(
  {
    [addTask]: (state, { payload: label }) => ([...state, { id: Date.now(), label, isDone: false }]),
    [toggleTask]: (state, { payload: id }) => state.map(task => (task.id === id ? ({ ...task, isDone: !task.isDone }) : task)),
    [clearTasks]: () => initialState
  },
  initialState
);

/**
 * THUNK AND ASYNC ACTIONS
 */
