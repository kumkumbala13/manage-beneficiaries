// src/components/LoginForm.js

import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use the useNavigate hook from react-router-dom

  const onSubmit = (data) => {
    // Dispatch login action with form data
    dispatch(login(data));
    // Navigate to dashboard upon successful login
    navigate('/dashboard');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-xs">
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            {...register('username', { required: 'Username is required' })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.username && <span className="text-red-500">{errors.username.message}</span>}
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            {...register('password', { required: 'Password is required' })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.password && <span className="text-red-500">{errors.password.message}</span>}
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
