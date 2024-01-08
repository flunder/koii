import { color } from "@koii/components/Button";
import { ArrowBack } from "@koii/components";
import { Values } from "@koii/utils/ts/values";
import { color as buttonColors } from "@koii/components/Button";

export interface Button {
  color: color;
  text: string;
  icon?: any;
  name?: string;
  defaultState?: boolean;
}

const ELEMENT_NAMES: { [key: string]: string } = {
  VOLUME_KNOB: "VOLUME_KNOB",
  KEYS_BUTTON: "KEYS_BUTTON",
  FADER_BUTTON: "FADER_BUTTON",
  FADER: "FADER",
  A: "A",
  B: "B",
  C: "C",
  D: "D",
  ".": ".",
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  BPM: "BPM",
  SAMPLE: "SAMPLE",
  PLAY: "PLAY",
  RECORD: "RECORD",
};

export type ElementNames = Values<typeof ELEMENT_NAMES>;

export const ELEMENT_TYPES = {
  KNOB: "KNOB",
  FADER: "FADER",
  BUTTON_SMALL: "BUTTON_SMALL",
  BUTTON_LARGE: "BUTTON_LARGE",
};

export type ElementTypes = Values<typeof ELEMENT_TYPES>;

export const LAYOUT: ElementNames[][] = [
  ["VOLUME_KNOB", "KEYS_BUTTON", "FADER_BUTTON", "FADER"],
  ["A", "B", "C", "D"],
  ["5", "3", "1", "."],
  ["6", "4", "2", "0"],
  ["BPM", "SAMPLE", "PLAY", "RECORD"],
];

export interface ElementProps {
  flex?: number;
  type?: ElementTypes;
  color?: buttonColors; // needs to depend on the type
  text?: string;
  hasIndicator?: boolean;
  shortName?: string;
  defaultState?: boolean;
  icon?: React.ReactNode;
  style?: any;
  variant?: any;
}

export const ELEMENTS: {
  [key: string]: {
    type: ElementTypes;
    style: ElementProps;
  };
} = {
  VOLUME_KNOB: {
    style: {
      flex: 0.85,
    },
    type: ELEMENT_TYPES.KNOB,
  },
  KEYS_BUTTON: {
    style: {
      flex: 0.5,
    },
    type: ELEMENT_TYPES.BUTTON_SMALL,
  },
  FADER_BUTTON: {
    style: {
      flex: 0.5,
    },
    type: ELEMENT_TYPES.BUTTON_SMALL,
  },
  FADER: {
    style: {
      flex: 2,
    },
    type: ELEMENT_TYPES.FADER,
  },
  A: {
    style: {
      flex: 1,
      color: "gray300",
      defaultState: true,
      text: "A",
      icon: <ArrowBack left={-1} />,
      hasIndicator: true,
    },
    type: ELEMENT_TYPES.BUTTON_LARGE,
  },
  B: {
    style: {
      flex: 1,
      color: "gray300",
      defaultState: false,
      text: "B",
      hasIndicator: true,
    },
    type: ELEMENT_TYPES.BUTTON_LARGE,
  },
  C: {
    style: {
      flex: 1,
      color: "gray300",
      defaultState: false,
      text: "C",
      hasIndicator: true,
    },
    type: ELEMENT_TYPES.BUTTON_LARGE,
  },
  D: {
    style: {
      flex: 1,
      color: "gray300",
      defaultState: false,
      text: "D",
    },
    type: ELEMENT_TYPES.BUTTON_LARGE,
  },
  ".": {
    style: {
      flex: 1,
      color: "black",
      defaultState: false,
      text: ".",
    },
    type: ELEMENT_TYPES.BUTTON_LARGE,
  },
  0: {
    style: {
      flex: 1,
      color: "black",
      defaultState: false,
      text: "0",
    },
    type: ELEMENT_TYPES.BUTTON_LARGE,
  },
  1: {
    style: {
      flex: 1,
      color: "black",
      defaultState: false,
      text: "1",
      shortName: "TUNE",
      hasIndicator: true,
    },
    type: ELEMENT_TYPES.BUTTON_LARGE,
  },
  2: {
    style: {
      flex: 1,
      color: "black",
      defaultState: true,
      text: "2",
      shortName: "VEL",
      hasIndicator: true,
    },
    type: ELEMENT_TYPES.BUTTON_LARGE,
  },
  3: {
    style: {
      flex: 1,
      color: "black",
      defaultState: false,
      text: "3",
      shortName: "MOD",
      hasIndicator: true,
    },
    type: ELEMENT_TYPES.BUTTON_LARGE,
  },
  4: {
    style: {
      flex: 1,
      color: "black",
      defaultState: false,
      text: "4",
      shortName: "REL",
      hasIndicator: true,
    },
    type: ELEMENT_TYPES.BUTTON_LARGE,
  },
  5: {
    style: {
      flex: 1,
      color: "black",
      defaultState: true,
      text: "5",
      shortName: "REL",
      hasIndicator: true,
    },
    type: ELEMENT_TYPES.BUTTON_LARGE,
  },
  6: {
    style: {
      flex: 1,
      color: "black",
      defaultState: true,
      text: "6",
      shortName: "ATK",
      hasIndicator: true,
    },
    type: ELEMENT_TYPES.BUTTON_LARGE,
  },
  BPM: {
    style: {
      flex: 1,
    },
    type: ELEMENT_TYPES.KNOB,
  },
  SAMPLE: {
    style: {
      flex: 1,
    },
    type: ELEMENT_TYPES.BUTTON_SMALL,
  },
  PLAY: {
    style: {
      flex: 1,
      color: "gray400",
      text: "PLAY",
      variant: "transport",
    },
    type: ELEMENT_TYPES.BUTTON_LARGE,
  },
  RECORD: {
    style: {
      flex: 1,
      text: "RECORD",
      variant: "transport",
    },
    type: ELEMENT_TYPES.BUTTON_LARGE,
  },
};
