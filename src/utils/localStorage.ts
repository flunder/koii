import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LocalStorageKeys } from "@koii/constants";

const storage_getItem = async (key: LocalStorageKeys) => {
  try {
    const item = await AsyncStorage.getItem(key);
    if (!item) return false;
    return JSON.parse(item);
  } catch (err) {
    console.log(`AsyncStorage-Error for key: ${key}`, err);
    return false;
  }
};

const storage_removeItem = async (key: LocalStorageKeys) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (err) {
    console.log(`AsyncStorage-Error for key: ${key}`, err);
    return false;
  }
};

const storage_saveItem = async (key: LocalStorageKeys, data: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (err) {
    console.log(`AsyncStorage-Error for key: ${key}`, err);
    return false;
  }
};

export { storage_getItem, storage_removeItem, storage_saveItem };
