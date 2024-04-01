import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "@redux-devtools/extension";
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';
import usersReducer from './users/usersReducer';


const store = createStore(
  usersReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;