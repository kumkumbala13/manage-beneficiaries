
import { configureStore } from '@reduxjs/toolkit';
import beneficiariesReducer from './features/beneficiaries/beneficiariesSlice';

const store = configureStore({
  reducer: {
    beneficiaries: beneficiariesReducer,
  },
});

export default store;

