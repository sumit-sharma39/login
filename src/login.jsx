import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "./config";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkdetails = async (e) => {
    e.preventDefault();
    console.log("Login button clicked");
    const payload = { email, password };
    console.log(payload);
    const r = await axios.post(`${BASE_URL}/login`, payload);
    // const r = await axios.post("http://localhost:8000/login", payload);
    console.log("r = data",r);


    if (r.data === 1) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={checkdetails}>
        <h2 className="login-title">Login</h2>

        <label className="login-label">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />

        <label className="login-label">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />

        <button type="submit" className="login-button">
          Login
        </button>

        <p className="login-text">
          Don't have an account?
          <Link to="/register" className="register-link">
            {" "}
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
