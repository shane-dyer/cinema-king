import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './reducers';

export default configureStore({
  reducer: {
    modal: modalReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
