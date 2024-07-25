import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      await axios.get('https://calendertask-be.vercel.app/api/auth/logout');
      Cookies.remove('token');
      navigate('/login');
    };

    logoutUser();
  }, [navigate]);

  return null;
};

export default Logout;
