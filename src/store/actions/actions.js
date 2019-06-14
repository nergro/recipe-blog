import axios from 'axios';
import * as actionTypes from './actionTypes';

export const fetchLatestStart = () => {
  return {
    type: actionTypes.FETCH_LATEST_START
  };
};

export const fetchLatestSuccess = recipes => {
  return {
    type: actionTypes.FETCH_LATEST_SUCCESS,
    recipes: recipes
  };
};

export const fetchLatestFail = error => {
  return {
    type: actionTypes.FETCH_LATEST_FAIL,
    error: error
  };
};

export const fetchLatestRecipes = () => {
  return dispatch => {
    dispatch(fetchLatestStart());
    axios
      .get('https://www.themealdb.com/api/json/v1/1/latest.php')
      .then(res => {
        dispatch(fetchLatestSuccess(res.data['meals']));
      })
      .catch(error => dispatch(fetchLatestFail(error)));
  };
};
