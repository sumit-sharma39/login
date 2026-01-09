import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "./config";

// start of the function
export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // << -------- function to check login details ------------->>
  const checkdetails = async (e) => {
    e.preventDefault();  // checks for default behavior

    const payload = { email, password };
    console.log("login payload =", payload);

    try {
      const r = await axios.post(`${BASE_URL}/login`, payload);  // calling the backend login api
      console.log("login response =", r);

        if (r.status === 200) {
              alert("Login successful");
              navigate("/home");
            } else {
              alert("Invalid credentials");
            }
      } 
    
    catch (error) {  
      if (error.response) {
        if (error.response.status === 401) {
          alert("Invalid email or password");
        } 
        else if (error.response.status === 404) {
          alert("User not found. Please register.");
          navigate("/register");
        } else {
          alert("Login failed");
        }
      } 
      
      else {
        alert("Server not reachable");
        console.error(error);
      }
    }
  };


  // << -------- return statement ------------->>
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
          required
        />

        <label className="login-label">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
          required
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