import {
    SET_POST_TITLE,
    SET_POST_CONTENT,
    SET_POST_CATEGORIES,
    UPLOAD_IMAGE,
    SAVE_BLOG_POST,
    RESET_BLOG_FORM
} from '../ActionTypes';

const initialState = {
    postTitle: "",
    postContent: "",
    postCategories: [],
    createdPost: {},
    imageFile: {}
};

export function creation(state = initialState, action) {
    switch (action.type) {
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
        case UPLOAD_IMAGE:
            return {
                ...state,
                imageFile: action.file
            };
        case RESET_BLOG_FORM:
            return {
                ...state,
                postTitle: "",
                postContent: "",
                postCategories: [],
                createdPost: {},
                imageFile: {}
            };
        default:
            return state;
    }
}

export default creation;
