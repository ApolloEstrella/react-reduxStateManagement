import { createStore, combineReducers } from 'redux';
import reducer from './reducer';
import reducer2 from "./reducer2";

const counterReducer = combineReducers({ reducer, reducer2 });

const store = createStore(counterReducer);

export default store;



