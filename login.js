import { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // To handle login errors

  const handleLogin = async (e) => {
    e.preventDefault();

    // Client-side form validation (you can customize this)
    if (!username || !password) {
      setError('Username and password are required.');
      return;
    }

    // Send a POST request to your login route with username and password
    try {
      const response = await fetch('/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        setError(null); // Clear any previous errors
        // Login was successful, you can redirect to the user's dashboard or display a success message
        // Optionally, you can redirect the user to their dashboard here
      } else {
        const data = await response.json();
        setError(data.error || 'Invalid credentials. Please try again.');
      }
    } catch (error) {
      setError('Network or server error. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

