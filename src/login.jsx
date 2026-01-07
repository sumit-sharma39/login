import "./index.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkdetails = async (e) => {
    e.preventDefault();

    const payload = { email, password };
    const r= await axios.post("http://localhost:3000/login", payload);
    console.log(r);
    if(r.statusText==="OK "){
      window.location.href = "/home";
    }
    else{
      window.location.href = "/register";
    }
  };

  return (
    <form className="login-form" onSubmit={checkdetails}>
      <h2>Login</h2>
      <label>Email:</label>
      <br />
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <br />

      <label>Password:</label>
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />

      <button type="submit">Login</button>

      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </form>
  );
}




/*

1 : Understand Difference in GET POST PATCH DELETE PUT



*/