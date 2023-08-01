import { createSlice, configureStore } from "@reduxjs/toolkit";

const modeSlice = createSlice({
  name: "mode",
  initialState: { mode: false, waiting: false },
  reducers: {
    changeTheme(state) {
      state.mode = !state.mode;
    },
    setWaiting(state) {
      state.waiting = !state.waiting;
    },
  },
});

const store = configureStore({ reducer: modeSlice.reducer });
export const modeAction = modeSlice.actions;

export default store;
