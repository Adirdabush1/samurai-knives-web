import React from "react";

export default function LoginSignUp() {
  return (
    <div>
      <title>Sign-up</title>
      <div className="container"></div>
      <div className="auth-section">
        <h2>Welcome! Please Log In or Sign Up</h2>
        <div class="form-group">
          <input
            type="email"
            id="signup-email"
            placeholder="Enter your email"
          ></input>
          <input
            type="password"
            id="signup-password"
            placeholder="Enter your password"
          ></input>
          <button id="signup-btn" className="btn primary">
            Sign Up
          </button>
        </div>
      </div>
      <div className="form-group">
        <input
          type="email"
          id="login-email"
          placeholder="Enter your email"
        ></input>
        <input
          type="password"
          id="login-password"
          placeholder="Enter your password"
        ></input>
      </div>
    </div>
  );
}
