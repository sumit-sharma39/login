import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import { Login } from './login.jsx'; 
import { Register } from './register.jsx'; 
import { Home } from './home.jsx'; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path ="/Login" element = {<Login />} />
        <Route path ="/Register" element = {<Register />} />
        <Route path ="/Home" element = {<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
