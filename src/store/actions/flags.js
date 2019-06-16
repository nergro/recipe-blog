import axios from 'axios';
import * as actionTypes from './actionTypes';

export const fetchFlagstart = () => {
  return {
    type: actionTypes.FETCH_FLAGS_START
  };
};

export const fetchFlagsSuccess = meals => {
  return {
    type: actionTypes.FETCH_FLAGS_SUCCESS,
    meals: meals
  };
};

export const fetchFlagsFail = error => {
  return {
    type: actionTypes.FETCH_FLAGS_FAIL,
    error: error
  };
};

export const fetchFlags = country => {
  return dispatch => {
    dispatch(fetchFlagstart());
    axios
      .get('https://www.themealdb.com/api/json/v1/1/filter.php?a=' + country)
      .then(res => {
        dispatch(fetchFlagsSuccess(res.data['meals']));
      })
      .catch(error => dispatch(fetchFlagsFail(error)));
  };
};
