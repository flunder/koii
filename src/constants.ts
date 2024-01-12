import { Values } from "@koii/utils/ts/values";

export const LOCAL_STORAGE_KEYS = {
  UI_STATE: "UI_STATE",
};

export type LocalStorageKeys = Values<typeof LOCAL_STORAGE_KEYS>;
