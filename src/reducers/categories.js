import _ from 'lodash';

// Actions
const UPDATE_CATEGORIES = 'reducer/categories/UPDATE_CATEGORIES';
const ADD_CATEGORY = 'reducer/categories/ADD_CATEGORY';
const REMOVE_CATEGORY = 'reducer/categories/REMOVE_CATEGORY';

// Reducer
const initialState = {
  categories: [],
};

export default function reducer(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, payload],
      };
    case REMOVE_CATEGORY:
      return {
        ...state,
        categories: _.filter(state.categories, category => category.id !== payload.id),
      };
    default:
      return state;
  }
}

// Action Creators
export function updateCategoriesAction(categories) {
  return {
    type: UPDATE_CATEGORIES,
    payload: categories,
  };
}

export function addCategoryAction(category) {
  return {
    type: ADD_CATEGORY,
    payload: category,
  };
}

export function removeCategoryAction(category) {
  return {
    type: REMOVE_CATEGORY,
    payload: category,
  };
}
