import { createSlice } from '@reduxjs/toolkit';

const initialState = { dropdown: false, sign: 'Sign in', showModal: false };
const HomeSlice = createSlice({
  name: 'HomeSlice',
  initialState,
  reducers: {
    setDropdown: (state, action) => {
      if (action.payload) {
        state.dropdown = false;
        return;
      }
      state.dropdown = !state.dropdown;
    },
    setSign: (state, action) => {
      console.log(action.payload.title);
      state.sign = action.payload.title;
    },
    setShowModal: (state) => {
      state.showModal = !state.showModal;
    },
  },
});

export const { setDropdown, setSign, setShowModal } = HomeSlice.actions;
export default HomeSlice.reducer;
