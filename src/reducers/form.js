import { handleActions } from 'redux-actions';
import Action from '../constants/action';

export default handleActions(
  {
    [Action.UPDATE_FIELD_VALIDATION]: (state, action) => {
      const { form } = action.payload;
      return { ...state, ...form };
    }
  },
  {
    fullName: '',
    email: '',
    confirmEmail: ''
  }
);
