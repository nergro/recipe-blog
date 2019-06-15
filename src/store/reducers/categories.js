import * as actionTypes from '../actions/actionTypes';

const initialState = {
  categories: [],
  categoriesNames: [],
  loading: false,
  errorMsg: ''
};

const fetchCategoriesSucces = (state, action) => {
  // let names = [];
  // action.categories.map(cat => {
  //   names.push(cat.strCategory);
  //   return cat;
  // });
  return {
    ...state,
    loading: false,
    categories: action.categories
    // categoriesNames: names
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CATEGORIES_START:
      return { ...state, loading: true };
    case actionTypes.FETCH_CATEGORIES_SUCCESS:
      return fetchCategoriesSucces(state, action);
    case actionTypes.FETCH_CATEGORIES_FAIL:
      return { ...state, loading: false, errorMsg: action.error.message };
    default:
      return state;
  }
};

export default reducer;
