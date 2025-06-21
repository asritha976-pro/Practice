import { useState } from 'react';
import '../styles/auth.css';

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState({
    login: false,
    signup: false
  });

  const togglePassword = (form) => {
    setShowPassword((prev) => ({
      ...prev,
      [form]: !prev[form]
    }));
  };

  return (
    <>
      <header className="header">
        <h1>ExpenseVault</h1>
      </header>

      <div className="backGround">
        <div className="form-box">
          <div className="button-box">
            <div id="btn" style={{ left: isLogin ? '0' : '110px' }}></div>
            <button className="toggle-btn" onClick={() => setIsLogin(true)}>LogIn</button>
            <button className="toggle-btn" onClick={() => setIsLogin(false)}>SignUp</button>
          </div>

          <div className="social-icons">
            <img src="/google.png" alt="Google" />
            <img src="/apple.jpg" alt="Apple" />
          </div>

          {isLogin ? (
            <form className="input-group" style={{ left: '50px' }}>
              <input type="text" className="input-field" placeholder="User_Id" required />
              <div className="password-container">
                <input
                  type={showPassword.login ? 'text' : 'password'}
                  className="input-field"
                  placeholder="Password"
                  required
                />
                <img
                  src={showPassword.login ? '/eye-off.png' : '/eye.png'}
                  className="eye-icon"
                  onClick={() => togglePassword('login')}
                />
              </div>
              <input type="checkbox" className="check-box" />
              <span>Remember Password</span>
              <button type="submit" className="submit-btn">LogIn</button>
            </form>
          ) : (
            <form className="input-group" style={{ left: '50px' }}>
              <input type="text" className="input-field" placeholder="User_Id" required />
              <input type="email" className="input-field" placeholder="Email" required />
              <div className="password-container">
                <input
                  type={showPassword.signup ? 'text' : 'password'}
                  className="input-field"
                  placeholder="Password"
                  required
                />
                <img
                  src={showPassword.signup ? '/eye-off.png' : '/eye.png'}
                  className="eye-icon"
                  onClick={() => togglePassword('signup')}
                />
              </div>
              <input type="checkbox" className="check-box" />
              <span>I agree to the terms and condition</span>
              <button type="submit" className="submit-btn">SignIn</button>
            </form>
          )}
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2025 ExpenseVault. All rights reserved.</p>
      </footer>
    </>
  );
}

export default AuthPage;
