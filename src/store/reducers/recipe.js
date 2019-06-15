import * as actionTypes from '../actions/actionTypes';

const initialState = {
  recipe: [],
  loading: false,
  errorMsg: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_RECIPE_START:
      return { ...state, loading: true };
    case actionTypes.FETCH_RECIPE_SUCCESS:
      return { ...state, loading: false, recipe: action.recipe };
    case actionTypes.FETCH_RECIPE_FAIL:
      return { ...state, loading: false, errorMsg: action.error.message };
    default:
      return state;
  }
};

export default reducer;
