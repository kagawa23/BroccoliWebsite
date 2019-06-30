import { createAction } from 'redux-actions';
import Action from '../constants/action';

export const showInvitationFrom = createAction(Action.SHOW_INVITATION_FORM);

export const showAllDone = createAction(Action.SHOW_ALL_DONE);

export const resetState = createAction(Action.RESET_STATE);

export const updateFromFiledAndValidation = createAction(Action.UPDATE_FIELD_VALIDATION);
