import * as types from '../ActionTypes';

export const getBlogPostsAct = () => ({
    type: types.GET_BLOG_POSTS
});
export const setBlogPostsAct = blogPosts => ({
    type: types.SET_BLOG_POSTS,
    blogPosts: blogPosts
});
export const postSelectedAct = id => ({
    type: types.READ_POST_DETAILS,
    selectedPostId: id
});
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
export const saveBlogPostAct = createdPost => ({
    type: types.SAVE_BLOG_POST,
    createdPost: createdPost
});
export const resetBlogFormAct = () => ({
    type: types.RESET_BLOG_FORM
});
export const setAlertMessageAct = (alertMessage, isErrorMessage) => ({
    type: types.SET_ALERT_MESSAGE,
    alertMessage: alertMessage,
    isErrorMessage: isErrorMessage
});
export const setFilteredBlogPostsAct = filteredBlogPosts => ({
    type: types.SET_FILTERED_BLOG_POSTS,
    filteredBlogPosts: filteredBlogPosts
});
export const clearFilteredBlogPostsAct = () => ({
    type: types.CLEAR_FILTERED_BLOG_POSTS
});
export const setSearchInputAct = searchInput => ({
    type: types.SET_SEARCH_INPUT,
    searchInput: searchInput
});
export const deletePostAct = postId => ({
    type: types.DELETE_BLOG_POST,
    postId: postId
});
export const uploadImageAct = file => ({
    type: types.UPLOAD_IMAGE,
    file: file
});

