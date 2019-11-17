import * as types from '../ActionTypes';

export const resetBlogFormAct = () => ({
    type: types.RESET_BLOG_FORM
});
export const clearFilteredBlogPostsAct = () => ({
    type: types.CLEAR_FILTERED_BLOG_POSTS
});
export const deletePostAct = postId => ({
    type: types.DELETE_BLOG_POST,
    postId: postId
});