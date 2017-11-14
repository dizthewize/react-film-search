import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
// import productReducer from './productReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  form: reduxForm
  // products: productReducer
});

export default rootReducer;
