import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavBarUser from './NavbarUser';
import './ViewCampaigns.css'; // Import external CSS file

const ViewCampaigns = () => {
    const [todos, changeTodos] = useState([]);

    const fetchData = () => {
        axios.get("http://localhost:8080/viewcampaigns").then(
            (response) => {
                changeTodos(response.data);
            }
        ).catch(error => console.error("Error fetching data:", error));
    };

    useEffect(() => { fetchData(); }, []);

    return (
        <div className="view-campaigns">
            <NavBarUser />
            <div>
                <center><h1>VIEW CAMPAIGNS</h1></center>
                <br />
                <center>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Start Date</th>
                                <th scope="col">End Date</th>
                                <th scope="col">Photos</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todos.map((value, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{value.title}</td>
                                            <td>{value.description}</td>
                                            <td>{value.startDate}</td>
                                            <td>{value.endDate}</td>
                                            <td>
                                                {value.image ? (
                                                    <img 
                                                        src={value.image} 
                                                        alt={value.title} 
                                                        style={{ width: '100px', height: '100px', objectFit: 'cover' }} 
                                                    />
                                                ) : 'No Image'}
                                            </td>
                                            <td>{value.status}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </center>
            </div>
        </div>
    );
};

export default ViewCampaigns;
