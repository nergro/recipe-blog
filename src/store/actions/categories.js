import axios from 'axios';
import * as actionTypes from './actionTypes';

export const fetchCategoriesStart = () => {
  return {
    type: actionTypes.FETCH_CATEGORIES_START
  };
};

export const fetchCategoriesSuccess = categories => {
  return {
    type: actionTypes.FETCH_CATEGORIES_SUCCESS,
    categories: categories
  };
};

export const fetchCategoriesFail = error => {
  return {
    type: actionTypes.FETCH_CATEGORIES_FAIL,
    error: error
  };
};

export const fetchCategories = () => {
  return dispatch => {
    dispatch(fetchCategoriesStart());
    axios
      .get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(res => {
        dispatch(fetchCategoriesSuccess(res.data['categories']));
      })
      .catch(error => {
        dispatch(fetchCategoriesFail(error));
      });
  };
};
