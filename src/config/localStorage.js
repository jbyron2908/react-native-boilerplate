import { AsyncStorage } from 'react-native';

class LocalStorage {
  async load(key, defaultValue = null) {
    let result = defaultValue;
    try {
      const value = await AsyncStorage.getItem(key);
      result = (!value) ? defaultValue : value;
    } catch (error) {
      result = defaultValue;
    }
    return result;
  }

  async save(key, data) {
    try {
      await AsyncStorage.setItem(key, data);
      return true;
    } catch (error) {
      return false;
    }
  }

  async remove(key) {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (error) {
      return false;
    }
  }

  async clear() {
    try {
      await AsyncStorage.clear();
      return true;
    } catch (error) {
      return false;
    }
  }
}

const localStorage = new LocalStorage();

export default localStorage;
