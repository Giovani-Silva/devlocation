import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './ducks';

const store = createStore(reducers, compose(applyMiddleware(...[])));

export default store;
