import { createSlice } from '@reduxjs/toolkit';

const initialState = { dropdown: false };
const HomeSlice = createSlice({
  name: 'HomeSlice',
  initialState,
  reducers: {
    setDropdown: (state) => {
      state.dropdown = !state.dropdown;
    },
  },
});

export const { setDropdown } = HomeSlice.actions;
export default HomeSlice.reducer;
