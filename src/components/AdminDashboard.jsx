import React, { useState } from 'react'
import NavBarAdmin from './NavBarAdmin'
import "./Admindashboard.css";

const AdminDashboard = () => {
     // States for storing user input and carbon footprint
      const [paperCupsAvoided, setPaperCupsAvoided] = useState(0);
      const [carbonFootprint, setCarbonFootprint] = useState(null);
    
      // Carbon intensity per paper cup (in kg CO₂ per cup)
      const carbonPerCup = 0.03; 
    
      // Handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        const footprint = paperCupsAvoided * carbonPerCup;
        setCarbonFootprint(footprint); // Set the calculated footprint
      };
  return (
    <div className="admin-dashboard">
      <NavBarAdmin />

      <h1>Welcome to Your Eco-Friendly Dashboard</h1>

      {/* Carbon Footprint Calculation Form */}
      <div className="carbon-footprint">
        <h3>Calculate Your Carbon Footprint</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="cupsAvoided">Enter the number of paper cups you've avoided:</label>
            <input
              type="number"
              id="cupsAvoided"
              value={paperCupsAvoided}
              onChange={(e) => setPaperCupsAvoided(e.target.value)}
              min="0"
              required
            />
          </div>
          <button type="submit">Calculate Footprint</button>
        </form>

        {/* Show calculated carbon footprint */}
        {carbonFootprint !== null && (
          <div className="result">
            <h4>Your estimated carbon footprint saved:</h4>
            <p>{carbonFootprint.toFixed(2)} kg CO₂</p>
          </div>
        )}
      </div>
    </div>
       
  )
}

export default AdminDashboard