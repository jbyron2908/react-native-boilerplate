
import reduxStore from './reduxStore';

export const getReduxStorageValue = (selector) => {
  const { store } = reduxStore;
  const value = selector(store.getState());
  return value;
};

export default { };
