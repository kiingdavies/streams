import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; //we renamed the named import reducer to formReducer
import authReducer from './authReducer';

export default combineReducers({
   auth: authReducer,
   form: formReducer
});