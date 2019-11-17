import * as types from '../ActionTypes';

export const setAlertMessageAct = (alertMessage, isErrorMessage) => ({
    type: types.SET_ALERT_MESSAGE,
    alertMessage: alertMessage,
    isErrorMessage: isErrorMessage
});