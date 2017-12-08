import axios from 'axios';
import {
  FETCH_MOVIES,
  FETCH_MOVIE
} from './types';

export const fetchMovies = searchText => async dispatch => {
  const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=fa155f635119344d33fcb84fb807649b&query=${searchText}`);
  dispatch({ type: FETCH_MOVIES, payload: res.data.results });
}

export const fetchMovie = id => async dispatch => {
  const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=fa155f635119344d33fcb84fb807649b`);
  dispatch({ type: FETCH_MOVIE, payload: res.data });
}
