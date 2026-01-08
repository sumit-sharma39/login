import { useState } from 'react';
import {BASE_URL} from './config.js';
// import { useEffect } from 'react';
import './index.css';
import { GoogleLogin } from '@react-oauth/google'

import { Link } from 'react-router-dom';
import axios from 'axios';
// import {jwtDecode} from "jwt-decode";


export function Register(){
    const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


const savedetails = async (e) => {
    e.preventDefault();
    const payload = { email, password };
    const r = await axios.post(`${BASE_URL}/register`, payload);
    console.log(r);
    if (r.data === 1) {
        window.location.href = "/home";
    } else {
        window.location.href = "/login";
    }

};

    const handleGoogleLogin = async (credentialResponse) => {
  try {
    const token = credentialResponse.credential;

    const r = await axios.post(
      `${BASE_URL}/googleauth`,
      { token }
    );

    if (r.status === 200) {
      window.location.href = "/home";
    }
  } catch (err) {
    console.error("Google login failed", err);
  }
};

    return (
        <div
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
    }}>
        <form className="login-form" onSubmit={savedetails}>
        <h2 style={{"color": "#ced4daff" }}>Register</h2>

        <label style={{"color": "#ced4daff" }}>Email:</label>
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

        <label style={{"color": "#ced4daff" }} >Password:</label>
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
        <button type="submit" 
        style={{
        "margin-top":"10px", 
        height : "30px",
        width  : "205px",
        backgroundColor : "darkgrey",
        borderRadius : "5px",
        borderStyle : "inset",

      }}  >
        Register</button>


        <div style={{ marginTop: 12, textAlign: 'center' }}>
        <p style={{ margin: '8px 0', color:"white" , size: "8px" }}>or</p>

        <GoogleLogin
            onSuccess={ handleGoogleLogin}
            onError={() => console.log('Google Sign In Failed')}
            
        />
        </div>

        <button style={{"color": "#ced4daff" ,"margin-top":"10px", 
        height : "30px",
        width  : "205px",
        backgroundColor : "darkgrey",
        borderRadius : "5px",
        borderStyle : "inset", }}>
         <Link to="/Login" style={{"color": "#b81515ff" ,"text-decoration": "none"}}>Login</Link>
        </button>
    </form>

    
    </div>
    );
}






    
// const handleGoogleLogin = async (response) => {
//     try {
//         const token = response?.credential;
//         if (!token) {
//             console.error('No Google credential returned');
//             return;
//         }
//         // POST the Google token to your backend. Update endpoint if needed.
//         const r = await axios.post("http://localhost:3000/register", { token });
//         if (r) {
//             window.location.href = "/home";
//         }
//     } catch (err) {
//         console.error('Google sign-in error:', err);
//     }
// };
//     //     const handleCredentialLogin = async (response) => {
//     //     await axios.post("http://localhost:3000/register", {
//     //     token: response.credential
//     //     });
//     // };
    
//     useEffect(() => {
//         window.google.accounts.id.initialize( {
//             client_id: "473241438268-qnhr59knngsbcj3d1bak2n7l037b8njk.apps.googleusercontent.com",
//             callback: handleGoogleLogin
//         } ) 
    
//     } , []);