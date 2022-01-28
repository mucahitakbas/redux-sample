import { createSlice } from "@reduxjs/toolkit";
export const main = createSlice({
  name: "main",
  initialState: {
    dark: false,
    language: "tr",
  },
  reducers: {
    setDarkMode: (state) => {
      state.dark = !state.dark;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});
export const { setDarkMode, setLanguage } = main.actions;
export default main.reducer;
