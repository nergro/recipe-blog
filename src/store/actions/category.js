import axios from 'axios';
import * as actionTypes from './actionTypes';

export const fetchCategoryStart = () => {
  return {
    type: actionTypes.FETCH_CATEGORY_START
  };
};

export const fetchCategorySuccess = meals => {
  return {
    type: actionTypes.FETCH_CATEGORY_SUCCESS,
    meals: meals
  };
};

export const fetchCategoryFail = error => {
  return {
    type: actionTypes.FETCH_CATEGORY_FAIL,
    error: error
  };
};

export const fetchCategory = category => {
  return dispatch => {
    dispatch(fetchCategoryStart());
    axios
      .get('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + category)
      .then(res => {
        dispatch(fetchCategorySuccess(res.data['meals']));
      })
      .catch(error => {
        dispatch(fetchCategoryFail(error));
      });
  };
};
