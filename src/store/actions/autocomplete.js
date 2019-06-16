import axios from 'axios';
import * as actionTypes from './actionTypes';

export const fetchSearchStart = () => {
  return {
    type: actionTypes.FETCH_SEARCH_START
  };
};

export const fetchSearchSuccess = meals => {
  return {
    type: actionTypes.FETCH_SEARCH_SUCCESS,
    meals: meals
  };
};

export const fetchSearchFail = error => {
  return {
    type: actionTypes.FETCH_SEARCH_FAIL,
    error: error
  };
};

export const fetchSearch = search => {
  return dispatch => {
    dispatch(fetchSearchStart());
    axios
      .get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + search)
      .then(res => {
        dispatch(fetchSearchSuccess(res.data['meals']));
      })
      .catch(error => {
        dispatch(fetchSearchFail(error));
      });
  };
};
