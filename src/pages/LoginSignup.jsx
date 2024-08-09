import React, { useState } from "react";
import axios from "axios";
import "../assets/style/loginSignup.css";


export const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const login = async () => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      if (response.status === 200 && response.data.token) {
        localStorage.setItem('auth_token', response.data.token);
        localStorage.setItem('isLoggedIn', true);
        setSuccess(response.data.message);
        setError("");
        clearFields(); 
        window.location.replace("/");
      } else {
        setError("Login failed.");
        setSuccess("");
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred during login.");
      setSuccess("");
    }
  };

  const signup = async () => {
    try {
      const response = await axios.post("http://localhost:5000/signup", {
        name: username,
        email,
        password,
      });

      if (response.status === 201 && response.data.token) {
        localStorage.setItem('auth_token', response.data.token);
        localStorage.setItem('isLoggedIn', true);
        setSuccess(response.data.message);
        setError("");
        clearFields();
        window.location.replace("/");
      } else {
        setError("Signup failed.");
        setSuccess("");
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred during signup.");
      setSuccess("");
    }
  };

  const handleSubmit = async () => {
    if (state === "Login") {
      await login();
      window.location.replace("/");
      
    } else {
      await signup();
      window.location.replace("/");
    }
  };

  const clearFields = () => {
    setEmail("");
    setPassword("");
    if (state === "Sign Up") {
      setUsername("");
    }
  };

  return (
    <div className="loginsignup">
      <div className="form">
        <span className="signup">{state}</span>
        {state === "Sign Up" && (
          <input
            type="text"
            placeholder="Username"
            className="form--input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="form--input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="form--marketing">
          <input type="checkbox" id="agree" className="checkbox" />
          <label htmlFor="agree">I agree to the Terms and Conditions</label>
        </div>
        <button className="form--submit" onClick={handleSubmit}>
          Continue
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
        <p className="signin">
          {state === "Login" ? (
            <>
              Don’t have an account?{" "}
              <a href="#" onClick={() => setState("Sign Up")}>
                Sign Up
              </a>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <a href="#" onClick={() => setState("Login")}>
                Login
              </a>
            </>
          )}
        </p>
      </div>
    </div>
  );
};
