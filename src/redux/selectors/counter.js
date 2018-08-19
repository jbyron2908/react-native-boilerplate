import { createSelector } from 'reselect';

const selectCounter = state => state.counter;

const counterSelector = createSelector(
  selectCounter,
  counterState => counterState.counter,
);

export {
  selectCounter,
  counterSelector,
};
