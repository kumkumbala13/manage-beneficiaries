
import React from 'react';
import { useForm } from 'react-hook-form';

const EditModal = ({ beneficiary, closeModal, onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: beneficiary.name,
      accountNumber: beneficiary.accountNumber,
      bankName: beneficiary.bankName,
      accountType: beneficiary.accountType
    }
  });

  const handleFormSubmit = (data) => {
    onSubmit(data); 
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">Edit Beneficiary Details</h3>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold">Name</label>
                    <input type="text" id="name" {...register("name", { required: true })} className="form-input mt-1 block w-full" />
                    {errors.name && <span className="text-red-500">Name is required</span>}
                  </div>
                  <div className="mb-4">
                    <label htmlFor="accountNumber" className="block text-gray-700 font-bold">Account Number</label>
                    <input type="text" id="accountNumber" {...register("accountNumber", { required: true })} className="form-input mt-1 block w-full" />
                    {errors.accountNumber && <span className="text-red-500">Account Number is required</span>}
                  </div>
                  <div className="mb-4">
                    <label htmlFor="bankName" className="block text-gray-700 font-bold">Bank Name</label>
                    <input type="text" id="bankName" {...register("bankName", { required: true })} className="form-input mt-1 block w-full" />
                    {errors.bankName && <span className="text-red-500">Bank Name is required</span>}
                  </div>
                  <div className="mb-4">
                    <label htmlFor="accountType" className="block text-gray-700 font-bold">Account Type</label>
                    <input type="text" id="accountType" {...register("accountType", { required: true })} className="form-input mt-1 block w-full" />
                    {errors.accountType && <span className="text-red-500">Account Type is required</span>}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="submit" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                Save Changes
              </button>
              <button type="button" onClick={closeModal} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
