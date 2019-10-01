import {
    GET_BLOG_POSTS,
    SET_BLOG_POSTS,
    READ_POST_DETAILS,
    SET_POST_TITLE,
    SET_POST_CONTENT,
    SET_POST_CATEGORIES,
    SAVE_BLOG_POST,
    RESET_BLOG_FORM,
    SET_ALERT_MESSAGE,
    SET_FILTERED_BLOG_POSTS,
    CLEAR_FILTERED_BLOG_POSTS,
    SET_SEARCH_INPUT,
    DELETE_BLOG_POST,
    UPLOAD_IMAGE
} from '../ActionTypes';

const initialState = {
    blogPosts: [],
    selectedPostId: 0,
    postTitle: "",
    postContent: "",
    postCategories: [],
    createdPost: {},
    alertMessage: "",
    isErrorMessage: false,
    filteredBlogPosts: [],
    searchInput: "",
    imageFile: {}
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
        case READ_POST_DETAILS:
            return {
                ...state,
                selectedPostId: action.selectedPostId
            };
        case SET_POST_TITLE:
            return {
                ...state,
                postTitle: action.postTitle
            };
        case SET_POST_CONTENT:
            return {
                ...state,
                postContent: action.postContent
            };
        case SET_POST_CATEGORIES:
            return {
                ...state,
                postCategories: action.postCategories
            };
        case SAVE_BLOG_POST:
            return {
                ...state,
                createdPost: action.createdPost
            };
        case RESET_BLOG_FORM:
            return {
                ...state,
                postTitle: "",
                postContent: "",
                postCategories: [],
                createdPost: {}
            };
        case SET_ALERT_MESSAGE:
            return {
                ...state,
                alertMessage: action.alertMessage,
                isErrorMessage: action.isErrorMessage
            };
        case SET_FILTERED_BLOG_POSTS:
            return {
                ...state,
                filteredBlogPosts: action.filteredBlogPosts
            };
        case CLEAR_FILTERED_BLOG_POSTS:
            return {
                ...state,
                filteredBlogPosts: []
            };
        case SET_SEARCH_INPUT:
            return {
                ...state,
                searchInput: action.searchInput
            };
        case DELETE_BLOG_POST:
            return {
                ...state
            };
        case UPLOAD_IMAGE:
            return {
                ...state,
                imageFile: action.file
            };
        default:
            return state;
    }
}

export default mainPage;
