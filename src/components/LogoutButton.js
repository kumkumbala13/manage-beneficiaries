// src/components/LogoutButton.js

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  // Implement logout functionality
  const handleLogout = () => {
    // Your logout logic goes here
    // For example, clearing user session or token
    // After logout, navigate to the login page
    navigate('/');
  };

  return (
    <Link to="/" className="inline-block text-center mt-0 text-blue-500 hover:text-blue-700 text-xs " onClick={handleLogout}>
      Logout
    </Link>
  );
};

export default LogoutButton;
