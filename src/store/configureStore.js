import {
  applyMiddleware,
  createStore
} from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import reducer from './reducers/root';
import client from '../config/axiosClient';

export default () => {
  return createStore(
    reducer,
    applyMiddleware(axiosMiddleware(client))
  );
};
