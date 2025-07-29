import React, { useState } from 'react';
import './LoginSignup.css';
import { motion } from 'framer-motion';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [useEmail, setUseEmail] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: ''
  });

  const [message, setMessage] = useState('');

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setMessage('');
    setFormData({
      username: '',
      email: '',
      mobile: '',
      password: '',
      confirmPassword: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const toggleInputType = (type) => {
    setUseEmail(type === 'email');
    setFormData((prev) => ({
      ...prev,
      email: '',
      mobile: ''
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, mobile, password, confirmPassword } = formData;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    if (isLogin) {
      const identifier = useEmail ? email : mobile;

      const existingUser = users.find((user) =>
        useEmail ? user.email === email : user.mobile === mobile
      );

      if (!identifier || !password) {
        setMessage("Please fill in all fields.");
        return;
      }

      if (!existingUser) {
        setMessage("User does not exist.");
        return;
      }

      if (existingUser.password !== password) {
        setMessage("Incorrect password.");
        return;
      }

      setMessage(`Welcome back, ${existingUser.username || 'User'}! ✅`);
    } else {
      if (!username || (!email && !mobile) || !password || !confirmPassword) {
        setMessage("Please fill in all fields.");
        return;
      }

      if (password !== confirmPassword) {
        setMessage("Passwords do not match.");
        return;
      }

      const duplicateUser = users.find((user) =>
        useEmail ? user.email === email : user.mobile === mobile
      );

      if (duplicateUser) {
        setMessage("User already exists with this email/mobile.");
        return;
      }

      const newUser = {
        username,
        email: useEmail ? email : '',
        mobile: useEmail ? '' : mobile,
        password
      };

      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      setMessage("Account created successfully ✅");
      setFormData({
        username: '',
        email: '',
        mobile: '',
        password: '',
        confirmPassword: ''
      });
    }
  };

  return (
    <div className="login-signup-container">
      <motion.div
        className="auth-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>{isLogin ? "Welcome Back" : "Join SARGA"}</h2>

        <div className="selector-buttons">
          <button
            className={useEmail ? 'active' : ''}
            onClick={() => toggleInputType('email')}
          >
            Email
          </button>
          <button
            className={!useEmail ? 'active' : ''}
            onClick={() => toggleInputType('mobile')}
          >
            Mobile
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          )}

          {useEmail ? (
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          ) : (
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleInputChange}
              pattern="[0-9]{10}"
              required
            />
          )}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />

          {!isLogin && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          )}

          <button type="submit">{isLogin ? "Login" : "Create Account"}</button>
        </form>

        {message && <div className="message">{message}</div>}

        <div className="toggle-link">
          {isLogin ? (
            <>
              New to SARGA? <span onClick={toggleForm}>Create your journey</span>
            </>
          ) : (
            <>
              Already a member? <span onClick={toggleForm}>Login here</span>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default LoginSignup;
