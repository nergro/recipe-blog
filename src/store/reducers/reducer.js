import * as actionTypes from '../actions/actionTypes';

const initialState = {
  latestRecipes: [],
  loading: false,
  errorMsg: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_LATEST_START:
      return { ...state, loading: true };
    case actionTypes.FETCH_LATEST_SUCCESS:
      return { ...state, loading: false, latestRecipes: action.recipes };
    case actionTypes.FETCH_LATEST_FAIL:
      return { ...state, loading: false, errorMsg: action.error.message };
    default:
      return state;
  }
};

export default reducer;
