import React from "react";
import { Link } from "react-router-dom";
import "./NavBarUser.css"; // You can add styles here

const NavBarAdmin = () => {


  return (
    <nav className="navbar-user">
      <div className="navbar-container">
        <div className="logo">
          <h2>Eco-Cup Admin</h2>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/AdminDashboard">Dashboard</Link>
          </li>
          
          <li>
            <Link to="/ViewUsers">View Users</Link>
          </li>
         <Link to="/AddCampaign">Add Campaign</Link>
         
          <li>
            <Link to="/ViewcampaignsAdmin">View campaigns</Link>
          </li>
          <li>
            <Link to="/ViewAwarenessAdmin">View Awareness Ideas</Link>
          </li>
          <li>
            <Link to="/ViewFeedback">View Feedback</Link>
          </li>
          <li>
          <Link to="/">Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBarAdmin;
