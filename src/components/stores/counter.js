import { createSlice } from "@reduxjs/toolkit";
export const count = createSlice({
  name: "counter",
  initialState: {
    value: 1,
  },
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});
export const { incremented, decremented } = count.actions;
export default count.reducer;
