import AsyncStorage from '@react-native-async-storage/async-storage';

export const getStorage = async (key: string) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.log(error);
  }
};

export const setStorage = async (key: string, value: any) => {
  try {
    return await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};
