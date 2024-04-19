

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  beneficiaries: [
    { id: 1, name: 'John Doe', accountNumber: '1234567890', bankName: 'ABC Bank', accountType: 'Savings' },
    { id: 2, name: 'Jane Smith', accountNumber: '0987654321', bankName: 'XYZ Bank', accountType: 'Checking' },
  ],
  selectedBeneficiary: null,
};

export const beneficiariesSlice = createSlice({
  name: 'beneficiaries',
  initialState,
  reducers: {
    addBeneficiary: (state, action) => {
      state.beneficiaries.push(action.payload);
    },
    editBeneficiary: (state, action) => {
      const { id, ...updatedFields } = action.payload;
      const existingBeneficiary = state.beneficiaries.find(beneficiary => beneficiary.id === id);
      if (existingBeneficiary) {
        Object.assign(existingBeneficiary, updatedFields);
      }
    },
    selectBeneficiary: (state, action) => {
      state.selectedBeneficiary = action.payload;
    },
    removeBeneficiary: (state, action) => {
      const id = action.payload;
      state.beneficiaries = state.beneficiaries.filter(beneficiary => beneficiary.id !== id);
    },
  },
});

export const { addBeneficiary, editBeneficiary, selectBeneficiary, removeBeneficiary  } = beneficiariesSlice.actions;

export const selectBeneficiaries = (state) => state.beneficiaries.beneficiaries;
export const selectSelectedBeneficiary = (state) => state.beneficiaries.selectedBeneficiary;

export const selectBeneficiaryById = (state, id) =>
  state.beneficiaries && state.beneficiaries.beneficiaries.find(beneficiary => beneficiary.id === Number(id));

export default beneficiariesSlice.reducer;
