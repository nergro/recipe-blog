import axios from 'axios';
import * as actionTypes from './actionTypes';

export const fetchRecipeStart = () => {
  return {
    type: actionTypes.FETCH_RECIPE_START
  };
};

export const fetchRecipeSuccess = recipe => {
  return {
    type: actionTypes.FETCH_RECIPE_SUCCESS,
    recipe: recipe
  };
};

export const fetchRecipeFail = error => {
  return {
    type: actionTypes.FETCH_RECIPE_FAIL,
    error: error
  };
};

export const fetchRecipe = recipeId => {
  return dispatch => {
    dispatch(fetchRecipeStart());
    axios
      .get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + recipeId)
      .then(res => {
        dispatch(fetchRecipeSuccess(res.data['meals'][0]));
      })
      .catch(error => {
        dispatch(fetchRecipeFail(error));
      });
  };
};

export const fetchRandomRecipe = () => {
  return dispatch => {
    dispatch(fetchRecipeStart());
    axios
      .get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(res => {
        dispatch(fetchRecipeSuccess(res.data['meals'][0]));
      })
      .catch(error => {
        dispatch(fetchRecipeFail(error));
      });
  };
};
