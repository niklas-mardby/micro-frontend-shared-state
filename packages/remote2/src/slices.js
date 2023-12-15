// src/slices.js
import getHookAndProvider from "react-context-slices";

export const { useSlice, Provider } = getHookAndProvider({
  slices: {
    count1: { initialArg: 0 },
    count2: {
      initialState: 0,
      reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1,
      },
    },
  },
});
