import * as actionTypes from '../actions/actionTypes';

const initialState = {
  meals: [],
  loading: false,
  errorMsg: '',
  noFound: null
};

const fetchSearchSuccess = (state, action) => {
  if (action.meals) {
    return { ...state, loading: false, meals: action.meals, noFound: null };
  } else {
    return {
      ...state,
      loading: false,
      meals: [],
      noFound: 'Sorry! No recipes found'
    };
  }
};

const fetchSearchFail = (state, action) => {
  return {
    ...state,
    loading: false,
    errorMsg: action.error.message
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SEARCH_START:
      return { ...state, loading: true };
    case actionTypes.FETCH_SEARCH_SUCCESS:
      return fetchSearchSuccess(state, action);
    case actionTypes.FETCH_SEARCH_FAIL:
      return fetchSearchFail(state, action);
    default:
      return state;
  }
};

export default reducer;
