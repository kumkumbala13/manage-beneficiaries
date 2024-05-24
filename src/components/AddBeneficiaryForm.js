

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addBeneficiary } from '../features/beneficiaries/beneficiariesSlice';
import BackButton from './BackButton';
// import Navbar from './Navbar';
import { Link } from 'react-router-dom';


const AddBeneficiaryForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onBlur' });
  const dispatch = useDispatch();
  const [showNotification, setShowNotification] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState(null);

  const onSubmit = (data) => {
    setFormData(data);
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    dispatch(addBeneficiary(formData));
    setShowNotification(true);
    setShowConfirmation(false);
  };

  // Effect to hide notification after 5 seconds
  useEffect(() => {
    let timeout;
    if (showNotification) {
      timeout = setTimeout(() => {
        setShowNotification(false);
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [showNotification]);

  return (
  <>
    {/* <Navbar/> */}
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
    
      <div className="flex flex-col">
        <label htmlFor="name" className="mb-1">Name:</label>
        <input type="text" id="name" {...register('name', { required: 'Name is required' })} className="border border-gray-300 rounded-md p-2" />
        {errors.name && <span className="text-red-500">{errors.name.message}</span>}
      </div>
      <div className="flex flex-col">
        <label htmlFor="accountNumber" className="mb-1">Account Number:</label>
        <input type="text" id="accountNumber" {...register('accountNumber', { required: 'Account number is required' })} className="border border-gray-300 rounded-md p-2" />
        {errors.accountNumber && <span className="text-red-500">{errors.accountNumber.message}</span>}
      </div>
      <div className="flex flex-col">
        <label htmlFor="bankName" className="mb-1">Bank Name:</label>
        <input type="text" id="bankName" {...register('bankName', { required: 'Bank name is required' })} className="border border-gray-300 rounded-md p-2" />
        {errors.bankName && <span className="text-red-500">{errors.bankName.message}</span>}
      </div>
      <div className="flex flex-col">
        <label htmlFor="accountType" className="mb-1">Account Type:</label>
        <select id="accountType" {...register('accountType', { required: 'Account type is required' })} className="border border-gray-300 rounded-md p-2">
          <option value="">Select Account Type</option>
          <option value="savings">Savings</option>
          <option value="current">Current</option>
        </select>
        {errors.accountType && <span className="text-red-500">{errors.accountType.message}</span>}
      </div>
      <div className="flex justify-between">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded text-xs">Add Beneficiary</button>
        <Link to="/view-beneficiaries" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded text-xs">View Beneficiaries</Link>
        <BackButton />
      </div>

      {/* Confirmation modal */}
      {showConfirmation && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white shadow-md rounded px-8 py-6">
            <p className="mb-4">Are you sure you want to add this beneficiary?</p>
            <div className="flex justify-end mt-4">
              <button onClick={() => setShowConfirmation(false)} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-4">Cancel</button>
              <button onClick={handleConfirm} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Confirm</button>
            </div>
          </div>
        </div>
      )}

      {/* Success notification */}
      {showNotification && (
        <div className="text-center bg-green-200 border-green-600 text-green-900 p-2 mt-2">
          <p className="font-bold"> New beneficiary added successfully !</p>
        </div>
      )}
    </form>
  </>
    
  );
};

export default AddBeneficiaryForm;
