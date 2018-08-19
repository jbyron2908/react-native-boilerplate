import { createSelector } from 'reselect';

const categoriesState = state => state.categories;

const categoriesSelector = createSelector(
  categoriesState,
  state => state.categories,
);

export {
  categoriesState,
  categoriesSelector,
};
