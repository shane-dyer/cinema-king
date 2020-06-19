import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
  movie: null,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.open = true;
      state.movie = action.payload;
    },
    closeModal: (state) => {
      state.open = false;
    },
    clearMovie: (state) => {
      state.movie = null;
    },
  },
});

export const selectOpen = (state) => state.modal.open;
export const selectMovie = (state) => state.modal.movie;

export const closeModalAsync = () => (dispatch) => {
  dispatch(closeModal());
  setTimeout(() => {
    dispatch(clearMovie());
  }, 500);
};

export const { openModal, closeModal, clearMovie } = modalSlice.actions;

export default modalSlice.reducer;
