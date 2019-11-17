import * as types from '../ActionTypes';

export const setSearchInputAct = searchInput => ({
    type: types.SET_SEARCH_INPUT,
    searchInput: searchInput
});
export const setFilteredBlogPostsAct = filteredBlogPosts => ({
    type: types.SET_FILTERED_BLOG_POSTS,
    filteredBlogPosts: filteredBlogPosts
});