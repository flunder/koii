import React from "react";
import { ElementNames } from "@koii/data";
import { Values } from "@koii/utils/ts/values";

export const ACTIONS = {
  TOGGLE_BUTTON: "TOGGLE_BUTTON",
};

export type ActionsType = Values<typeof ACTIONS>;

export const reducer = (
  state: any,
  action: { type: ActionsType; name: ElementNames }
) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_BUTTON:
      return { ...state, [action.name]: !state?.[action.name] };

    default:
      return state;
  }
};
