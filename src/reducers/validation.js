import { handleActions } from 'redux-actions';
import Action from '../constants/action';

export default handleActions(
  {
    [Action.UPDATE_FIELD_VALIDATION]: (state, action) => {
      return { ...state, ...action.payload.validation };
    }
  },
  {
    isValidateFullName: false,
    isValidateEmail: false,
    isValidateConfrimEmail: false
  }
);
