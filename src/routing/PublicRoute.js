import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

const PublicRoute = () => {
  const token = Cookies.get('token');
  return token ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
