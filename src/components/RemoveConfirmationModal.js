import React from 'react';

const RemoveConfirmationModal = ({ closeModal, confirmRemove }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-md">
        <h2 className="text-lg font-semibold mb-4">Confirm Removal</h2>
        <p className="mb-4">Are you sure you want to remove this beneficiary?</p>
        <div className="flex justify-end">
          <button className="bg-red-500 text-white px-4 py-2 rounded mr-2" onClick={confirmRemove}>Confirm</button>
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded" onClick={closeModal}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default RemoveConfirmationModal;
