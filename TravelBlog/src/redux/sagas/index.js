/* eslint-disable no-param-reassign, no-plusplus */

import { call, put, takeLatest } from 'redux-saga/effects';

import {
    GET_BLOG_POSTS,
    SAVE_BLOG_POST,
    DELETE_BLOG_POST,
    UPLOAD_IMAGE
} from '../ActionTypes';

import {
    setBlogPostsAct,
    setAlertMessageAct
} from '../actions';

import {
    getBlogPosts,
    saveBlogPost,
    deleteBlogPost,
    uploadImage
} from '../../services';

function* getBlogPostsSaga() {
    const data = yield call(getBlogPosts);
    yield put(setBlogPostsAct(data));
}

function* saveBlogPostSaga(action) {
    const data = yield call(saveBlogPost, action.createdPost);
    const emptyFlag = Object.keys(data).length === 0 && data.constructor === Object;
    if(emptyFlag) {
        yield put(setAlertMessageAct("Blog post couldn't be saved.", emptyFlag));
    } else {
        yield put(setAlertMessageAct("Blog post saved successfully.", emptyFlag));
    }
}

function* deleteBlogPostSaga(action) {
    yield call(deleteBlogPost, action.postId);
    yield put(setAlertMessageAct("Blog post deleted successfully.", false));
}

function* uploadImageSaga(action) {
    yield call(uploadImage, action.file);
}

export default function* defaultSagas() {

    yield takeLatest(GET_BLOG_POSTS, getBlogPostsSaga);
    yield takeLatest(SAVE_BLOG_POST, saveBlogPostSaga);
    yield takeLatest(DELETE_BLOG_POST, deleteBlogPostSaga);
    yield takeLatest(UPLOAD_IMAGE, uploadImageSaga);

}
