import "./login.css";
import { GoogleLogin } from "@react-oauth/google";
import React, { useState } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

export default function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const handleSuccess = async (credentialResponse) => {
    const googleToken = credentialResponse.credential;
    console.log(googleToken);
  };
  return (
    <div className="auth-container">
      <div className={`auth-card ${isSignup ? "signup" : "login"}`}>
        <h2>{isSignup ? "Create Account" : "Welcome Back"}</h2>
        <p className="subtitle">
          {isSignup ? "Sign up to get started" : "Login to your account"}
        </p>

        {isSignup && <input type="text" placeholder="Full Name" />}
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button className="primary-btn">
          {isSignup ? "Sign Up" : "Login"}
        </button>

        <div className="divider">OR</div>

        <div className="social-login">
          <button className="facebook-btn">
            <FaFacebookF /> Continue with Facebook
          </button>
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={() => console.log("Login Failed")}
          />
        </div>

        <p className="switch-text">
          {isSignup ? "Already have an account?" : "Don’t have an account?"}
          <span onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? " Login" : " Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
}
