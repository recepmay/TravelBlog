import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import mainPage from './mainPage';
import search from './search';
import readMore from './readMore';
import message from './message';
import creation from './creation';
import clear from './clear';

export default combineReducers({
    mainPage,
    search,
    readMore,
    message,
    creation,
    clear,
    routing: routerReducer
});
