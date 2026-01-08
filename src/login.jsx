import "./index.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import {BASE_URL} from '../config/config.js';

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // calling the backend api to check the details
  const checkdetails = async (e) => {
    e.preventDefault();
    const payload = { email, password };
    const r= await axios.post(`${ BASE_URL}/login`, payload);
    if(r.statusText==="OK "){
      window.location.href = "/home";
    }
    else{
      window.location.href = "/register";
    }
  };

  return (
    <div className="login-container" 
    style={{
      "padding-left": "25px",
      "padding-right": "25px",
      "background-color": "#0e5b82ff",
      "border-radius": "10px", 
      "border-style": "inset", 
      "border-color" : "#002c42ff",
      height: "120%",
      width: "130%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"

    }}
    > 
    <form className="login-form" onSubmit={checkdetails} >
      <h2 style={{"color": "#ced4daff" }}>Login</h2>
      <label style={{
        color: "white",

        }}>Email:</label>
      <br />
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}

        style={{
          borderRadius: "5px",
          size : "15px",
          height : "25px",
          width  : "200px"
        }}

      />

      <br />

      <label style={{"color": "#ced4daff" }}>Password:</label>
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}

        style={{
          borderRadius: "5px",
          size : "15px",
          height : "25px",
          width  : "200px"
        }}
      />

      <br />
        {/* login button  */}
      <button type="submit" 
      style={{
        "margin-top":"10px", 
        height : "30px",
        width  : "205px",
        backgroundColor : "darkgrey",
        borderRadius : "5px",
        borderStyle : "inset",
        transition: "height 0.3s, width 0.3s",
        "transitionDuration": "0.3s"
      }} > 
        Login
        </button>

      <p style={{ 
        marginTop: 12,
        "font-size": "15px",
        color: "white"
      }}>
        Don't have an account?

        <Link to="/register" 
        style={{"color": "#b81515ff",  }}
        >
          
          Register</Link>
      </p>
    </form>
    </div>
  );
}



// createRoot(document.getElementById('root')).render(
//   <Header />
// );
