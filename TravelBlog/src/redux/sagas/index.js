
import { call, put, takeLatest } from 'redux-saga/effects';

import {
    GET_BLOG_POSTS
} from '../ActionTypes';

import {
    setBlogPostsAct
} from '../actions';

import {
    getBlogPosts
} from '../../services';

function* getBlogPostsSaga() {
    const data = yield call(getBlogPosts);
    yield put(setBlogPostsAct(data));
}

export default function* defaultSagas() {

    yield takeLatest(GET_BLOG_POSTS, getBlogPostsSaga);

}
