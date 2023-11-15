// Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login, setLastVisitedPage } = useAuth();

  const handleLogin = () => {
    login('Profesor');
    const lastVisitedPage = localStorage.getItem('lastVisitedPage') || '/';
    setLastVisitedPage(lastVisitedPage);
    navigate(lastVisitedPage);
  };

  return (
    <div>
      <h2>Simula datos para entrar.</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
