import React from 'react';
import LogoutButton from './LogoutButton';
import { useSelector } from 'react-redux';
import { selectAuth } from '../features/auth/authSlice';
import './Navbar.css'; 

function Navbar() {
  const auth = useSelector(selectAuth);
  console.log("Auth:", auth); 
  const user = auth && auth.user ? auth.user : {}; 
  console.log("User:", user);
  return (
    <div className="navbar">
      {user && user.username ? (
        <p className="welcome font-semibold text-lg">
          Welcome <strong>{user.username}!</strong>
        </p>
      ) : (
        <p className="welcome font-semibold text-lg">Welcome Guest!</p>
      )}
      <span className="logout font-semibold">
        <LogoutButton />
      </span>
    </div>
  );
}

export default Navbar;
