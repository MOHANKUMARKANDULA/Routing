import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);//reducer function is responsible for handling state updates based on dispatched actions.

export default store;
