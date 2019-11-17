import {
    SET_ALERT_MESSAGE
} from '../ActionTypes';

const initialState = {
    alertMessage: "",
    isErrorMessage: false
};

export function message(state = initialState, action) {
    switch (action.type) {
        case SET_ALERT_MESSAGE:
            return {
                ...state,
                alertMessage: action.alertMessage,
                isErrorMessage: action.isErrorMessage
            };
        default:
            return state;
    }
}

export default message;
