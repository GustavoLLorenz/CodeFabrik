// ./src/redux/index.js
import { legacy_createStore as  createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { saveUserReducer } from './reducers/saveUserReducer';



const store = createStore(saveUserReducer, composeWithDevTools());

export default store;
