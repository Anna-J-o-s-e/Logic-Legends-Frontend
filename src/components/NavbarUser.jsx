import React from "react";
import { Link } from "react-router-dom";
import "./NavBarUser.css"; // You can add styles here

const NavBarUser = () => {
  

  return (
    <nav className="navbar-user">
      <div className="navbar-container">
        <div className="logo">
          <h2>Eco-Cup</h2>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/UserDashboard">Dashboard</Link>
          </li>
          {/* <li>
            <Link to="/SearchCampaign">Search Campaign</Link>
          </li> */}
          <li>
            <Link to="/ViewCampaigns">View Campaign</Link>
          </li> 
          <li>
            <Link to="/AddAwareness">Add Awareness Ideas</Link>
          </li> 
          <li>
            <Link to="/ViewAwareness">View Awareness Ideas</Link>
          </li> 
          <li>
            <Link to="/AddFeedback">Add feedback</Link>
          </li> 
          <li>
                   <Link to="/">Logout</Link>
                   </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBarUser;