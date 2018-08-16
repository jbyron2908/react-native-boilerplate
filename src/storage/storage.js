import { AsyncStorage } from 'react-native';

class Storage {
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

  async loadObject(key, defaultValue = null) {
    let result = defaultValue;
    try {
      const value = await AsyncStorage.getItem(key);
      result = (!value) ? defaultValue : JSON.parse(value);
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

  async saveObject(key, data) {
    try {
      const dataStr = JSON.stringify(data);
      await AsyncStorage.setItem(key, dataStr);
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

const storage = new Storage();

export default storage;
