

import React from 'react';
import { Link } from 'react-router-dom';

const BackButton = () => {
  return (
    <Link to="/dashboard" className="inline-block text-center mt-4 text-blue-500 hover:text-blue-700 text-sm mr-0">
      Back
    </Link>
  );
};

export default BackButton;
