import {
    GET_BLOG_POSTS,
    SET_BLOG_POSTS
} from '../ActionTypes';

const initialState = {
    blogPosts: []
};

export function mainPage(state = initialState, action) {
    switch (action.type) {
        case GET_BLOG_POSTS:
            return {
                ...state
            };
        case SET_BLOG_POSTS:
            return {
                ...state,
                blogPosts: action.blogPosts
            };
        default:
            return state;
    }
}

export default mainPage;
