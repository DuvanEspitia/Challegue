import React from 'react';
import { useAuth } from './AuthContext';

const Home = () => {
  const { username, logout } = useAuth();

  return (
    <div>
      <h2>Hola, {username}!</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
