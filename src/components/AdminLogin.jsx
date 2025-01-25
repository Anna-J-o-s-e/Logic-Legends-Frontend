import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AdminLogin.css'; // Import the CSS file

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
  
    const handleLogin = async (e) => {
      e.preventDefault();
  
      // Reset error message before making requests
      setError("");
  
      try {
        // Try to login as user
        const userResponse = await axios.post("http://localhost:8080/AdminSignin", {
          email,
          password,
        });
  
        if (userResponse.status === 200) {
          // If user login is successful, navigate to user dashboard
          navigate("/AdminDashboard");
          return;
        }
      } catch (userError) {
        console.log("Admin login failed, error:", userError.response?.data || userError.message);
        setError("Invalid email or password");
      }
  
      // If user login fails
      setError("Invalid email or password");
    };
  



    return (

        <div className="adminlogin">
      <img className="background-img" src="https://media.istockphoto.com/id/1411289606/photo/paper-eco-friendly-disposable-tableware-with-recycling-signs-on-the-background-of-green-plants.jpg?s=612x612&w=0&k=20&c=ng731oZuBvrja5tNFkrcW-hWtWJqieyxw3A2HSei0QI=" alt="background" />
      <div className="login-box">
        <img className="logo-img" src="https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg" alt="logo" />
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            placeholder="Enter your email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-input"
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
    )
}

export default AdminLogin
