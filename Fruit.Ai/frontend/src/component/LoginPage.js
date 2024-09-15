import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faPinterestP, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '../css/LoginPage.css';

function LoginPage() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Simulate login request (replace with actual API call)
      if (credentials.email === 'admin@example.com' && credentials.password === 'password') {
        // Store token or user info if needed
        localStorage.setItem('token', 'your-token'); // Example of storing a token
        navigate('/home');
      } else {
        setError('Invalid email or password.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error('Login error:', err);
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <p className="login-subtitle">
        By signing in, you agree to our <a href="#">Terms and Privacy Policy</a>.
      </p>
      <div className="tab-container">
        <span className="active-tab">Login</span>
        <span className="tab">Register</span>
      </div>
      {error && <p className="error-message">{error}</p>}
      <div className="input-group">
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
        <input
          type="email"
          placeholder="Email Address"
          aria-label="Email Address"
          value={credentials.email}
          onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
          className="input-field"
        />
      </div>
      <div className="input-group">
        <FontAwesomeIcon icon={faLock} className="icon" />
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          aria-label="Password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          className="input-field"
        />
        <FontAwesomeIcon
          icon={showPassword ? faEyeSlash : faEye}
          className="icon-toggle"
          onClick={() => setShowPassword(!showPassword)}
        />
      </div>
      <div className="extras">
        <label>
          <input type="checkbox" aria-label="Remember me" /> Remember me
        </label>
        <a href="#" className="forget-password">Forgot password?</a>
      </div>
      <button className="login-btn" onClick={handleLogin}>Login</button>
      <p className="connect-with">or connect with</p>
      <div className="social-icons">
        <FontAwesomeIcon icon={faFacebookF} className="social-icon" aria-label="Facebook" />
        <FontAwesomeIcon icon={faInstagram} className="social-icon" aria-label="Instagram" />
        <FontAwesomeIcon icon={faPinterestP} className="social-icon" aria-label="Pinterest" />
        <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" aria-label="LinkedIn" />
      </div>
    </div>
  );
}

export default LoginPage;
