import React, { useState } from 'react';
import App from './App';

const Login = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // Check if credentials are correct
    if (username === 'smart' && password === '1234') {
      // Set isLoggedIn to true if the credentials are correct
      setLoggedIn(true);
    } else {
      // Display an error message for incorrect credentials
      setErrorMessage('Incorrect username or password');
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <App />
      ) : (
        <div>
          <h1>Login</h1>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Log In</button>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
      )}
    </div>
  );
};

export default Login;
