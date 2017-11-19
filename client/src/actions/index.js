import axios from 'axios';
import {
  FETCH_USER,
  POST_USER,
  FETCH_PRODUCTS
} from './types';

export const submitUser = values => async dispatch => {
  const res = await axios.post('/auth/login', values)
  .then(res => {
    dispatch({ type: POST_USER });
  })
  .catch(err => {
    dispatch({ type: POST_USER, payload: err})
  });
};

export const submitRegister = values =>
  async dispatch => {
    const res = await axios.post('/auth/register', values)
      .then(res => {
        dispatch({type: POST_USER});
      })
      .catch(err => {
        dispatch({type: POST_USER, payload: err})
      });
}

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')
    .then(res => {
      dispatch({ type: FETCH_USER, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_USER, payload: err });
    });
};

export const fetchProducts = () => async dispatch => {
  const res = await axios.get('/api/products')
    .then(res => {
      dispatch({ type: FETCH_PRODUCTS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_PRODUCTS, payload: err });
    })
}
