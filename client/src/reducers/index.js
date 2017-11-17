import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import userReducer from './userReducer';
// import productReducer from './productReducer';

const rootReducer = combineReducers({
  user: userReducer,
  form: reduxForm
  // products: productReducer
});

export default rootReducer;
