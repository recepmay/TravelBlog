
import { call, put, takeLatest } from 'redux-saga/effects';

import {
    DELETE_BLOG_POST
} from '../ActionTypes';

import {
    setAlertMessageAct
} from '../actions';

import {
    deleteBlogPost
} from '../../services';

function* deleteBlogPostSaga(action) {
    yield call(deleteBlogPost, action.postId);
    yield put(setAlertMessageAct("Blog post deleted successfully.", false));
}

export default function* deletionSaga() {

    yield takeLatest(DELETE_BLOG_POST, deleteBlogPostSaga);

}
