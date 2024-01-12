import React, { useEffect, useReducer } from "react";

import { ElementNames } from "@koii/data";
import { LOCAL_STORAGE_KEYS } from "@koii/constants";
import { storage_saveItem } from "@koii/utils/localStorage";
import { reducer, ACTIONS, initialState } from "@koii/reducer";

const key = LOCAL_STORAGE_KEYS.UI_STATE;

export const useUpdateButtonState = (name: ElementNames) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onPress = () => {
    dispatch({ type: ACTIONS.TOGGLE_BUTTON, name: name });
  };

  useEffect(() => {
    const storeData = async (value: any) => {
      await storage_saveItem(key, value);
    };
    storeData(state);
  }, [state]);

  return {
    onPress: onPress,
    state: state,
  };
};
