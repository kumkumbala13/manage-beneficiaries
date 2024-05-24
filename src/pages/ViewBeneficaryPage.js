import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectBeneficiaries, selectSelectedBeneficiary, selectBeneficiary } from '../features/beneficiaries/beneficiariesSlice';
import Navbar from '../components/Navbar';
import BackButton from '../components/BackButton';
import EditModal from '../components/EditModal';
import RemoveConfirmationModal from '../components/RemoveConfirmationModal'; 
import { editBeneficiary, removeBeneficiary } from '../features/beneficiaries/beneficiariesSlice';

const ViewBeneficiaryPage = () => {
  const dispatch = useDispatch();
  const beneficiaries = useSelector(selectBeneficiaries);
  const selectedBeneficiary = useSelector(selectSelectedBeneficiary);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRemoveConfirmationOpen, setIsRemoveConfirmationOpen] = useState(false); 

  const handleBeneficiaryClick = (beneficiary) => {
    if (selectedBeneficiary && selectedBeneficiary.id === beneficiary.id) {
      dispatch(selectBeneficiary(null)); 
    } else {
      dispatch(selectBeneficiary(beneficiary)); 
    }
  };

  const handleEditClick = (event, beneficiary) => {
    event.stopPropagation();
    dispatch(selectBeneficiary(beneficiary));
    setIsModalOpen(true);
  };

  const handleRemoveClick = (event, beneficiary) => {
    event.stopPropagation();
    setIsRemoveConfirmationOpen(true);
  };

  const confirmRemoveBeneficiary = () => {
    dispatch(removeBeneficiary(selectedBeneficiary.id));
    setIsRemoveConfirmationOpen(false);
  };

  return (
    <>
      <div className="container mx-auto flex justify-center items-center h-full">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
          <div className="justify-between items-center ">
            <Navbar />
          </div>
          <h1 className="text-2xl font-semibold mb-4">Beneficiaries List</h1>
          <div className="grid gap-4">
            {beneficiaries.map(beneficiary => (
              <div key={beneficiary.id} className="bg-white rounded shadow-md p-4 cursor-pointer" onClick={() => handleBeneficiaryClick(beneficiary)}>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold mb-2">{beneficiary.name}</p>
                  <div>
                    <button className="text-blue-500 mr-2" onClick={(event) => handleEditClick(event, beneficiary)}>Edit</button>
                    <button className="text-red-500" onClick={(event) => handleRemoveClick(event, beneficiary)}>Remove</button>
                  </div>
                </div>
                {selectedBeneficiary && selectedBeneficiary.id === beneficiary.id && (
                  <>
                    <p className="text-gray-700">Account Number: {beneficiary.accountNumber}</p>
                    <p className="text-gray-700">Bank Name: {beneficiary.bankName}</p>
                    <p className="text-gray-700">Account Type: {beneficiary.accountType}</p>
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            <Link to="/add-beneficiary" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded text-xs mt-4">Add Beneficiaries</Link>
            <BackButton />
          </div>
        </div>
      </div>
      {isModalOpen && selectedBeneficiary && (
        <EditModal
          beneficiary={selectedBeneficiary}
          closeModal={() => setIsModalOpen(false)}
          onSubmit={(data) => {
            dispatch(editBeneficiary({ id: selectedBeneficiary.id, ...data }));
            setIsModalOpen(false);
          }}
        />
      )}
      {isRemoveConfirmationOpen && selectedBeneficiary && (
        <RemoveConfirmationModal
          closeModal={() => setIsRemoveConfirmationOpen(false)}
          confirmRemove={confirmRemoveBeneficiary}
        />
      )}
    </>
  );
};

export default ViewBeneficiaryPage;
