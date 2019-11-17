import * as types from '../ActionTypes';

export const setPostTitleAct = postTitle => ({
    type: types.SET_POST_TITLE,
    postTitle: postTitle
});
export const setPostContentAct = postContent => ({
    type: types.SET_POST_CONTENT,
    postContent: postContent
});
export const setPostCategoriesAct = postCategories => ({
    type: types.SET_POST_CATEGORIES,
    postCategories: postCategories
});
export const uploadImageAct = file => ({
    type: types.UPLOAD_IMAGE,
    file: file
});
export const saveBlogPostAct = createdPost => ({
    type: types.SAVE_BLOG_POST,
    createdPost: createdPost
});