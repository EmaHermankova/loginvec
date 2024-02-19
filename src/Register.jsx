import React from 'react';

const Register = ({ switchToLogin }) => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div class="auth-form-container">
      <h1>Sign-up</h1>
      <input value={username} type="text" placeholder="Username" onChange={handleUsernameChange} />
      <input value={email} type="email" placeholder="Email" onChange={handleEmailChange} />
      <input value={password} type="password" placeholder="Password" onChange={handlePasswordChange} />
      <button>Sign-up</button>
      <p className="link-btn" onClick={switchToLogin}>Already have an account? Log in.</p>
    </div>
  );
};

export default Register;