import { ElementNames } from "@koii/data";
import { Values } from "@koii/utils/ts/values";

export const ACTIONS = {
  TOGGLE_BUTTON: "TOGGLE_BUTTON",
};

export type ActionsType = Values<typeof ACTIONS>;

export const initialState: { [key: ElementNames]: boolean } = {
  VOLUME_KNOB: false,
  KEYS_BUTTON: false,
  FADER_BUTTON: false,
  FADER: false,
  A: false,
  B: false,
  C: false,
  D: false,
  ".": false,
  0: false,
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false,
  BPM: false,
  SAMPLE: false,
  PLAY: false,
  RECORD: false,
};

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
