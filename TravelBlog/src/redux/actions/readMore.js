import * as types from '../ActionTypes';

export const postSelectedAct = id => ({
    type: types.READ_POST_DETAILS,
    selectedPostId: id
});