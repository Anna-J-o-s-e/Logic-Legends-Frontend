import React, { useState } from 'react';
import axios from 'axios';
import NavBarUser from './NavbarUser';
import './AddAwareness.css'; // Optional: Add your CSS here

const AddAwareness = () => {
  const [data, setData] = useState({
    ideaTitle: '',
    ideaDescription: '',
    createdAt: '',
    status: 'active', // Default value for the select dropdown
  });

  // Input handler to update state
  const inputHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  // Submit handler for the form
  const readValue = () => {
    if (!data.ideaTitle || !data.ideaDescription || !data.createdAt || !data.status) {
      alert('Please fill in all required fields.');
      return;
    }

    axios
      .post('http://localhost:8080/AddAwarenessIdeas', data)
      .then((response) => {
        if (response.data.status === 'success') {
          alert('Awareness Idea added successfully!');
        } else {
          alert('Error adding idea');
        }
      })
      .catch((error) => {
        console.error('Error adding idea:', error);
        alert('An error occurred while adding the idea.');
      });
  };

  return (
    <div className="add-awareness">
      <NavBarUser />
      <center>
        <br />
        <h1>ADD AWARENESS IDEA</h1>
        <div className="container">
          <div className="row">
            <br />
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-6">
                <label className="form-label">Idea Title</label>
                <input
                  type="text"
                  name="ideaTitle" // Corrected name
                  onChange={inputHandler}
                  value={data.ideaTitle}
                  className="form-control"
                  placeholder="Enter campaign title"
                  required
                />
              </div>
              <div className="col col-12 col-md-6">
                <label className="form-label">Idea Description</label>
                <textarea
                  name="ideaDescription" // Corrected name
                  onChange={inputHandler}
                  value={data.ideaDescription}
                  className="form-control"
                  placeholder="Enter campaign description"
                  required
                ></textarea>
              </div>
              <div className="col col-12 col-sm-6 col-md-6">
                <label className="form-label">Date</label>
                <input
                  type="date"
                  name="createdAt" // Corrected name
                  onChange={inputHandler}
                  value={data.createdAt}
                  className="form-control"
                  required
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6">
                <label className="form-label">Status</label>
                <input
                  type="tect"
                  name="status" // Corrected name
                  onChange={inputHandler}
                  value={data.status}
                  className="form-control"
                  required
                />
              </div>
              
              <div className="col col-12 col-md-6">
                <center>
                  <button className="btn btn-warning" onClick={readValue}>
                    ADD IDEA
                  </button>
                </center>
              </div>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default AddAwareness;
