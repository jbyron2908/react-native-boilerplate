// Actions
const INCREASE = 'reducer/counter/INCREASE';
const DECREASE = 'reducer/counter/DECREASE';

// Reducer
const initialState = {
  counter: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return { ...state, counter: state.counter + 1 };
    case DECREASE:
      return { ...state, counter: state.counter - 1 };
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
