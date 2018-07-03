import { fromJS } from 'immutable';

// Actions
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// Reducer
const initialState = fromJS({
  counter: 0,
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state.set('counter', state.get('counter') + 1);
    case DECREASE:
      return state.set('counter', state.get('counter') - 1);
    default:
      return state;
  }
}

// Action Creators

export function increase() {
  return { type: INCREASE };
}

export function decrease() {
  return { type: DECREASE };
}
