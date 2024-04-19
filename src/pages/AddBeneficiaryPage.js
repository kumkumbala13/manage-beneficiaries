

import React from 'react';
import AddBeneficiaryForm from '../components/AddBeneficiaryForm';
import Navbar from '../components/Navbar';


const AddBeneficiaryPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
      <Navbar/>
        <h2 className="text-2xl font-semibold mb-4">Add Beneficiary</h2>
        <AddBeneficiaryForm />
      </div>
    </div>
  );
};

export default AddBeneficiaryPage;
