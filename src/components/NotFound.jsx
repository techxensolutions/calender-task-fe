import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex justify-center flex-col items-center h-screen">
      <h1 className="text-3xl font-semibold text-red-400">404 - Page Not Found</h1>
      <Link to={"/"} className='mt-6 text-lg underline text-red-400'>Return Back!</Link>
    </div>
  );
};

export default NotFound;
