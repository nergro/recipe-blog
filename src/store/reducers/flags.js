import * as actionTypes from '../actions/actionTypes';

const initialState = {
  meals: [],
  loading: false,
  errorMsg: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_FLAGS_START:
      return { ...state, loading: true };
    case actionTypes.FETCH_FLAGS_SUCCESS:
      return { ...state, loading: false, meals: action.meals };
    case actionTypes.FETCH_FLAGS_FAIL:
      return { ...state, loading: false, errorMsg: action.error.message };
    default:
      return state;
  }
};

export default reducer;
