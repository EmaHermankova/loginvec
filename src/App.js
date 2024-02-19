import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import './App.css';

function App() {
  const [showLogin, setShowLogin] = useState(true);

  const switchToRegister = () => {
    setShowLogin(false);
  };

  const switchToLogin = () => {
    setShowLogin(true);
  };

  return (
    <div className="App">
      {showLogin ? <Login switchToRegister={switchToRegister} /> : <Register switchToLogin={switchToLogin} />}
    </div>
  );
}

export default App;