import { combineReducers } from 'redux';
import status from './status';
import validation from './validation';
import form from './form';

const rootReducer = combineReducers({
  status,
  validation,
  form
});
export default rootReducer;
