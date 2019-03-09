import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const isDevelopment = process.env.NODE_ENV === 'development';

const middlewares = applyMiddleware(
  thunk.withExtraArgument({})
);

const enhancers = [middlewares];

export default isDevelopment
  ? createStore(rootReducer, composeWithDevTools(...enhancers))
  : createStore(rootReducer, compose(...enhancers));
