import {
    READ_POST_DETAILS
} from '../ActionTypes';

const initialState = {
    selectedPostId: 0
};

export function readMore(state = initialState, action) {
    switch (action.type) {
        case READ_POST_DETAILS:
            return {
                ...state,
                selectedPostId: action.selectedPostId
            };
        default:
            return state;
    }
}

export default readMore;
