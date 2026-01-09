// import { useState } from "react";
// import { BASE_URL } from "./config";
// import "./reg.css";
// import { GoogleLogin } from "@react-oauth/google";
// import { Link , useNavigate } from "react-router-dom";
// import axios from "axios";

// export function Register() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const savedetails = async (e) => {
//     e.preventDefault();
//     const payload = { email, password };
//     console.log("register payload =",payload);
//     const r = await axios.post(`${BASE_URL}/register`, payload);
//     // const r= await axios.post("http://localhost:8000/register", payload);

//     console.log("registerd data = ",r);
//     if (r.status === 200) {
//             navigate("/home");
//     } else {
//             navigate("/login");
//     }
//   };

//   const handleGoogleLogin = async (credentialResponse) => {
//     try {
//       const token = credentialResponse.credential;

//       const r = await axios.post(`${BASE_URL}/googleauth`, { token });

//       if (r.status === 200) {
//         window.location.href = "/home";
//       }
//     } catch (err) {
//       console.error("Google login failed", err);
//     }
//   };

//   return (
//     <div className="register-container">
//       <form className="register-form" onSubmit={savedetails}>
//         <h2 className="register-title">Register</h2>

//         <label className="register-label">Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="register-input"
//         />

//         <label className="register-label">Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="register-input"
//         />

//         <button type="submit" className="register-button">
//           Register
//         </button>

//         <div className="google-section" >
//           <p className="or-text">or</p>
//           <GoogleLogin 
//             onSuccess={handleGoogleLogin}
//             onError={() => console.log("Google Sign In Failed")}
//           />
//         </div>

//         <button className="login-button" type="button">
//           <Link to="/login" className="login-link">
//             Login
//           </Link>
//         </button>
//       </form>
//     </div>
//   );
// }



import { useState } from "react";
import { BASE_URL } from "./config";
import "./reg.css";
import { GoogleLogin } from "@react-oauth/google";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const savedetails = async (e) => {
    e.preventDefault();

    const payload = { email, password };
    console.log("register payload =", payload);

    try {
      const r = await axios.post(`${BASE_URL}/register`, payload);

      console.log("registered data =", r);

      if (r.status === 200 || r.status === 201) {
        alert("Registration successful");
        navigate("/home");
      }
    } catch (error) {
      if (error.response) {
        // Backend responded with error
        if (error.response.status === 409) {
          alert("User already exists. Please login.");
          navigate("/login");
        } else {
          alert("Registration failed");
        }
      } else {
        alert("Server not reachable");
        console.error(error);
      }
    }
  };

  const handleGoogleLogin = async (credentialResponse) => {
    try {
      const token = credentialResponse.credential;

      const r = await axios.post(`${BASE_URL}/googleauth`, { token });

      if (r.status === 200) {
        navigate("/home");
      }
    } catch (err) {
      console.error("Google login failed", err);
      alert("Google login failed");
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={savedetails}>
        <h2 className="register-title">Register</h2>

        <label className="register-label">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="register-input"
          required
        />

        <label className="register-label">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="register-input"
          required
        />

        <button type="submit" className="register-button">
          Register
        </button>

        <div className="google-section">
          <p className="or-text">or</p>
          <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={() => alert("Google Sign In Failed")}
          />
        </div>

        <button className="login-button" type="button">
          <Link to="/login" className="login-link">
            Login
          </Link>
        </button>
      </form>
    </div>
  );
}