import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    filters: {
      name: "",
    },
  },
  reducers: {
    changeFilter(state, action) {
        state.status = action.payload.toLowerCase();
    },
  },
});

export const { changeFilter } = slice.actions;

export default slice.reducer;