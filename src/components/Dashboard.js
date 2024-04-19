

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from '../features/auth/authSlice';
import './Dashboard.css'
// import LogoutButton from './LogoutButton';
import Navbar from './Navbar';

const Dashboard = () => {

  return (
    <div className="max-w-lg mx-auto mt-10 px-4">
      <Navbar/>

      {/* "Manage Beneficiaries" section */}
      <div className="mb-8">
        <h3 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline inline-block mb-4">Manage Beneficiaries</h3>
        <div className="flex space-x-4">
          <Link to="/add-beneficiary" className="btn bg-gray-100 font-bold">Add Beneficiary</Link>
          <Link to="/view-beneficiaries" className="btn bg-gray-100 font-bold">View Beneficiaries</Link>
        </div>
      </div>
     
      <div className="bg-gray-100 p-4 rounded">
        <h3 className="text-lg font-semibold mb-2">Recent Transactions</h3>
        <ul>
          <li className="mb-2">Transaction 1</li>
          <li className="mb-2">Transaction 2</li>
        </ul>
      </div>

     
    </div>
  );
};

export default Dashboard;
