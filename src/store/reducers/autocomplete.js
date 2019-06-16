import * as actionTypes from '../actions/actionTypes';

const initialState = {
  meals: [],
  loading: false,
  errorMsg: ''
};

const fetchSearchSuccess = (state, action) => {
  if (action.meals) {
    return { ...state, loading: false, meals: action.meals };
  } else {
    return { ...state, loading: false, meals: [] };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SEARCH_START:
      return { ...state, loading: true };
    case actionTypes.FETCH_SEARCH_SUCCESS:
      return fetchSearchSuccess(state, action);
    case actionTypes.FETCH_SEARCH_FAIL:
      return { ...state, loading: false, errorMsg: action.error.message };
    default:
      return state;
  }
};

export default reducer;
