import { createSlice, configureStore } from "@reduxjs/toolkit";

const modeSlice = createSlice({
  name: "mode",
  initialState: { mode: false },
  reducers: {
    changeTheme(state) {
      state.mode = !state.mode;
    },
  },
});

const store = configureStore({ reducer: modeSlice.reducer });
export const modeAction = modeSlice.actions;

export default store;
