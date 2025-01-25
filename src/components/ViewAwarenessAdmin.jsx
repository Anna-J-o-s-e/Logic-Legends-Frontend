import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Viewawareness.css";
import NavBarAdmin from "./NavBarAdmin";

const ViewAwarenessAdmin = () => {
    const [todos, changeTodos] = useState([]);

    const fetchData = () => {
        axios
            .get("http://localhost:8080/ViewAllAwarenessIdeas")
            .then((response) => {
                changeTodos(response.data.ideas); // Extract "ideas" array from response
            })
            .catch((error) => console.error("Error fetching data:", error));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="view-awareness">
            <NavBarAdmin />
            <div>
                <center>
                    <h1>VIEW IDEAS</h1>
                </center>
                <br />
                <center>
                    <div className="container">
                        <div className="row">
                            <div className="col col-12">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Idea Title</th>
                                            <th scope="col">Idea Description</th>
                                            <th scope="col">Created At</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {todos.length === 0 ? (
                                            <tr>
                                                <td colSpan="4" style={{ textAlign: "center" }}>No ideas found</td>
                                            </tr>
                                        ) : (
                                            todos.map((value, index) => (
                                                <tr key={index}>
                                                    <td>{value.ideaTitle}</td>
                                                    <td>{value.ideaDescription}</td>
                                                    <td>{new Date(value.createdAt).toLocaleString()}</td>
                                                    <td>{value.status}</td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </center>
            </div>
        </div>
    );
};

export default ViewAwarenessAdmin;