import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginWithEmailAndPassword } from './authActions';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector((state) => state.auth.error);
  const handleLogin = () => {
    dispatch(loginWithEmailAndPassword(email, password));
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
     </div>
  );
};

export default Login;
