
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice'
import beneficiariesReducer from './features/beneficiaries/beneficiariesSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    beneficiaries: beneficiariesReducer,
  },
});

export default store;

