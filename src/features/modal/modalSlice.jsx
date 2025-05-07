import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      const modalState = action.payload;
      state.isOpen = modalState;
    },

    closeModal: (state, action) => {
      const modalState = action.payload;
      state.isOpen = modalState;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
