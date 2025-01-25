import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Dashboard.css'; // Import the CSS styles

const Dashboard = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Function to handle Login button click
  const handleLoginClick = () => {
    navigate('/UserLogin'); // Navigate to the login page
  };

  // Function to handle Get Started button click
  const handleGetStartedClick = () => {
    navigate('/UserSignup'); // Navigate to the UserSignup page
  };

  return (
    <div className="dashboard">
      {/* Header */}
      <div className="header"></div>
      <center>
      {/* Main Content */}
      <div className="main-content">
        {/* Title Section */}
        <div className="title-container">
          <h1>ECO - CUP</h1>
        </div>

        {/* Image and Button Section */}
        <div className="content-wrapper">
          <div className="image-container">
            <img 
              src="https://i.dailymail.co.uk/1s/2020/11/20/01/35894992-0-image-a-53_1605834595202.jpg" 
              alt="Dashboard Preview" 
            />
          </div>
          <div className="button-section">
            <button className="btn login" onClick={handleLoginClick}>Login</button> {/* On Click Navigate */}
            <p className="haven-text">haven’t been here ?</p>
            <button className="btn get-started" onClick={handleGetStartedClick}>Get Started</button> {/* On Click Navigate */}
          </div>
        </div>
        <Link to="/AdminLogin">Login as Admin !</Link>
      
      </div>
      </center>

      {/* Footer */}
      <div className="footer"></div>
    </div>
  );
};

export default Dashboard;


