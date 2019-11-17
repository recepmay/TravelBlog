import {
    DELETE_BLOG_POST
} from '../ActionTypes';

const initialState = {

};

export function clear(state = initialState, action) {
    switch (action.type) {
        case DELETE_BLOG_POST:
            return {
                ...state
            };
        default:
            return state;
    }
}

export default clear;
