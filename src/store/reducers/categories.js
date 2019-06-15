import * as actionTypes from '../actions/actionTypes';

const initialState = {
  categories: [],
  loading: false,
  errorMsg: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CATEGORIES_START:
      return { ...state, loading: true };
    case actionTypes.FETCH_CATEGORIES_SUCCESS:
      return { ...state, loading: false, categories: action.categories };
    case actionTypes.FETCH_CATEGORIES_FAIL:
      return { ...state, loading: false, errorMsg: action.error.message };
    default:
      return state;
  }
};

export default reducer;
