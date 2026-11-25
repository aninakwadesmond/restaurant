import { configureStore } from '@reduxjs/toolkit';
import HomeSliceReducer from './HomeSlice';

const store = configureStore({
  reducer: { home: HomeSliceReducer },
});

export default store;
