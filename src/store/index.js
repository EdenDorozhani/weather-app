import { createSlice, configureStore } from "@reduxjs/toolkit";

const modeSlice = createSlice({
  name: "mode",
  initialState: { waiting: false },
  reducers: {
    setWaiting(state) {
      state.waiting = !state.waiting;
    },
  },
});

const store = configureStore({ reducer: modeSlice.reducer });
export const modeAction = modeSlice.actions;

export default store;
