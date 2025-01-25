import React, { useState } from 'react';
import axios from 'axios';
import NavBarAdmin from './NavBarAdmin';
import './AddCampaign.css'; // You can style this component similarly
import { Link } from 'react-router-dom';

const AddCampaign = () => {
  const [data, setData] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    image: '',
    status: 'active', // Default status can be 'active'
  });

  // Input handler to update state
  const inputHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  // Submit handler for the form
  const readValue = () => {
    if (!data.title || !data.description || !data.startDate || !data.endDate) {
      alert("Please fill in all required fields.");
      return;
    }

    axios.post('http://localhost:8080/AddCampaign', data)
      .then((response) => {
        if (response.data.status === 'success') {
          alert("Campaign added successfully!");
        } else {
          alert("Error adding campaign");
        }
      })
      .catch((error) => {
        console.error("Error adding campaign:", error);
        alert("An error occurred while adding the campaign.");
      });
  };

  return (
    <div className="add-campaign">
      <NavBarAdmin />
      <center>
        <br />
        <h1>ADD CAMPAIGN</h1>
        <div className="container">
          <div className="row">
            <br />
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-6">
                <label className="form-label">Campaign Title</label>
                <input
                  type="text"
                  name="title"
                  onChange={inputHandler}
                  value={data.title}
                  className="form-control"
                  placeholder="Enter campaign title"
                  required
                />
              </div>
              <div className="col col-12 col-md-6">
                <label className="form-label">Campaign Description</label>
                <textarea
                  name="description"
                  onChange={inputHandler}
                  value={data.description}
                  className="form-control"
                  placeholder="Enter campaign description"
                  required
                ></textarea>
              </div>
              <div className="col col-12 col-sm-6 col-md-6">
                <label className="form-label">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  onChange={inputHandler}
                  value={data.startDate}
                  className="form-control"
                  required
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6">
                <label className="form-label">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  onChange={inputHandler}
                  value={data.endDate}
                  className="form-control"
                  required
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6">
                <label className="form-label">Campaign Image (Optional)</label>
                <input
                  type="text"
                  name="image"
                  onChange={inputHandler}
                  value={data.image}
                  className="form-control"
                  placeholder="Enter image URL"
                />
              </div>
              <div className="col col-12 col-md-6">
                <label className="form-label">Campaign Status</label>
                <select
                  name="status"
                  onChange={inputHandler}
                  value={data.status}
                  className="form-control"
                >
                  <option value="active">Active</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <div className="col col-12 col-md-6">
                <center>
                  <button className="btn btn-warning" onClick={readValue}>ADD CAMPAIGN</button>
                </center>
              </div>
            </div>
          </div>
        </div>
       
      </center>
    </div>
  );
};

export default AddCampaign;
