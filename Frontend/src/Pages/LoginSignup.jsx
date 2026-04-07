import React, { useState } from "react";
import "./LoginSignup.css";

const LoginSignup = ({ close }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("USER"); // default USER

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      role: role
      // name, email, password yaha add karna hai later
    };

    console.log(data);
  };

  return (
    <div className="login-overlay">
      <div className="login-box">
        <button className="close-btn" onClick={close}>✖</button>

        <h2>
          {isLogin ? "Welcome Back to Website" : "Create Your Account On Website"}
        </h2>

        {/* 🔘 Role Selection */}
        <div className="role-selection">
          <label>
            <input
              type="radio"
              name="role"
              value="USER"
              checked={role === "USER"}
              onChange={(e) => setRole(e.target.value)}
            />
            User
          </label>

          <label>
            <input
              type="radio"
              name="role"
              value="ADMIN"
              checked={role === "ADMIN"}
              onChange={(e) => setRole(e.target.value)}
            />
            Admin
          </label>
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input type="text" placeholder="Name" required autoComplete="name" />
          )}

          <input type="email" placeholder="Email ID" required autoComplete="email" />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
            autoComplete="current-password"
          />

          <div className="password-toggle">
            <label>
              <input
                type="checkbox"
                onChange={() => setShowPassword(!showPassword)}
              />
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