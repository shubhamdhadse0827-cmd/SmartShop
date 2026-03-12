import React, { useState } from "react";
import "./LoginSignup.css";

const LoginSignup = ({ close }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-overlay">
      <div className="login-box">
        <button className="close-btn" onClick={close}>✖</button>

        <h2>
          {isLogin ? "Welcome Back to Website" : "Create Your Account On Website"}
        </h2>

        <form>
          {!isLogin && (
            <input type="text" placeholder="Name" required autoComplete="name" />
          )}

          <input type="email" placeholder="Email ID" required autoComplete="email" />

          <input type={showPassword ? "text" : "password"} placeholder="Password" required autoComplete="current-password"/>

          <div className="password-toggle">
            <label>
              <input type="checkbox" onChange={() => setShowPassword(!showPassword)} />
              Show Password
            </label>
          </div>

          <button className="login-btn">
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        <p className="switch-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Sign Up" : " Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;