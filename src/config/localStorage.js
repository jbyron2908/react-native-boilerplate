import { AsyncStorage } from 'react-native';

class LocalStorage {
  async load(key, defaultValue) {
    try {
      const value = await AsyncStorage.getItem(key);
      const result = (!value) ? defaultValue : value;
      return result;
    } catch (error) {
      return defaultValue;
    }
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
