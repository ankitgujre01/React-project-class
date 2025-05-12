// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import someReducer from './features/someSlice'; // replace with your actual slice

const store = configureStore({
  reducer: {
    someFeature: someReducer
  }
});

export default store;
