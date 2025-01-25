import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavBarAdmin from './NavBarAdmin';
import './ViewUsers.css'; // Import external CSS file

const ViewUsers = () => {
    const [todos, changeTodos] = useState([]);

    const fetchData = () => {
        axios.get("http://localhost:8080/viewusers").then(
            (response) => {
                changeTodos(response.data);
            }
        ).catch(error => console.error("Error fetching data:", error));
    };

    useEffect(() => { fetchData(); }, []);

    return (
        <div className="view-users">
            <NavBarAdmin />
            <h1>VIEW USERS</h1>
            <table>
                <thead>
                    <tr>
                        <th scope="col">NAME</th>
                        <th scope="col">EMAIL</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{value.name}</th>
                                    <td>{value.email}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ViewUsers;
