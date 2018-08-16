import { createSelector } from 'reselect';

const selectCounter = state => state.counter;

const getSelectCounter = createSelector(
  selectCounter,
  counterState => counterState.counter,
);

export {
  selectCounter,
  getSelectCounter,
};
