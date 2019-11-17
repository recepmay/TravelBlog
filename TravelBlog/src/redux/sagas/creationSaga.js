
import { call, put, takeLatest } from 'redux-saga/effects';

import {
    SAVE_BLOG_POST,
    UPLOAD_IMAGE
} from '../ActionTypes';

import {
    setAlertMessageAct
} from '../actions';

import {
    saveBlogPost,
    uploadImage
} from '../../services';

function* saveBlogPostSaga(action) {
    const data = yield call(saveBlogPost, action.createdPost);
    const emptyFlag = Object.keys(data).length === 0 && data.constructor === Object;
    if(emptyFlag) {
        yield put(setAlertMessageAct("Blog post couldn't be saved.", emptyFlag));
    } else {
        yield put(setAlertMessageAct("Blog post saved successfully.", emptyFlag));
    }
}

function* uploadImageSaga(action) {
    yield call(uploadImage, action.file);
}

export default function* creationSaga() {

    yield takeLatest(SAVE_BLOG_POST, saveBlogPostSaga);
    yield takeLatest(UPLOAD_IMAGE, uploadImageSaga);

}
