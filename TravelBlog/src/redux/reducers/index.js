import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import mainPage from './mainPage';

export default combineReducers({mainPage, routing: routerReducer});
