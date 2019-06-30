import { handleActions } from 'redux-actions';
import constant from 'lodash/constant';
import Action from '../constants/action';
import Status from '../constants/status';

export default handleActions(
  {
    [Action.SHOW_INVITATION_FORM]: constant(Status.FILL_INFO),
    [Action.SHOW_ALL_DONE]: constant(Status.ALL_DONE)
  },
  Status.START
);
