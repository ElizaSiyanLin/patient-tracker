
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const mockUser = {
  email: 'dr.elizabeth@umass.edu',
  password: 'lucas123'
};

function Login({ setAuth }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === mockUser.email && password === mockUser.password) {
      setAuth(true); 
      navigate('/dashboard');
    } else {
      setError('Invalid credentials.');
      setAuth(false);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>LOGIN</h2>
        {error && <p className="error">{error}</p>}
        <label htmlFor="email">Username/ Email:</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
}

export default Login;
