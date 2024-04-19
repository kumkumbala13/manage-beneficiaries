
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  
  const handleLogout = () => {
    navigate('/');
  };

  return (
    <Link to="/" className="inline-block text-center mt-0 text-blue-500 hover:text-blue-700 text-xs " onClick={handleLogout}>
      Logout
    </Link>
  );
};

export default LogoutButton;
