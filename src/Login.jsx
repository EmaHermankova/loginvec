import React from 'react';

const Login = ({ switchToRegister }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div class="auth-form-container">
      <h1>Log-in</h1>
      <input value={email} type="email" placeholder="Email" onChange={handleEmailChange} />
      <input value={password} type="password" placeholder="Password" onChange={handlePasswordChange} />
      <button>Log-in</button>
      <p className="link-btn" onClick={switchToRegister}>Don't have an account? Register here.</p>
    </div>
  );
};

export default Login;