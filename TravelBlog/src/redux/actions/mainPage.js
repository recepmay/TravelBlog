import * as types from '../ActionTypes';

export const getBlogPostsAct = () => ({
    type: types.GET_BLOG_POSTS
});
export const setBlogPostsAct = blogPosts => ({
    type: types.SET_BLOG_POSTS,
    blogPosts: blogPosts
});