import {
    CLEAR_FILTERED_BLOG_POSTS,
    SET_FILTERED_BLOG_POSTS,
    SET_SEARCH_INPUT
} from '../ActionTypes';

const initialState = {
    filteredBlogPosts: [],
    searchInput: ""
};

export function search(state = initialState, action) {
    switch (action.type) {
        case SET_FILTERED_BLOG_POSTS:
            return {
                ...state,
                filteredBlogPosts: action.filteredBlogPosts
            };
        case SET_SEARCH_INPUT:
            return {
                ...state,
                searchInput: action.searchInput
            };
        case CLEAR_FILTERED_BLOG_POSTS:
            return {
                ...state,
                filteredBlogPosts: []
            };
        default:
            return state;
    }
}

export default search;
