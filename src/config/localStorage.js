import { AsyncStorage } from 'react-native';

class LocalStorage {
  async load(key, defaultValue = null) {
    let result = defaultValue;
    try {
      console.log('load');
      const value = await AsyncStorage.getItem(key);
      console.log(`value = ${value}`);
      result = (!value) ? defaultValue : value;
    } catch (error) {
      console.log(`error = ${error}`);
      result = defaultValue;
    }
    console.log('out');
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
