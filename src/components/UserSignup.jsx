import React, { useState } from "react";
import axios from "axios";
import "./UserSignup.css";

const UserSignup = () => {
    const [data, setdata] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "" // Add this to store confirmPassword
    });

    const inputHandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value });
    };

    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    };

    const readvalue = () => {
        console.log(data);
        if (data.password !== data.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        if (!validateEmail(data.email)) {
            alert("Please enter a valid email address.");
            return;
        }

        axios
            .post("http://localhost:8080/usersignup", data)
            .then((response) => {
                console.log(data);
                if (response.data.status === "success") {
                    alert("Successfully signed up");
                } else {
                    alert("Error signing up");
                }
            })
            .catch((error) => {
                console.error("Error during signup:", error);
                alert("An error occurred while signing up.");
            });
    };

    return (
        <div className="signup-page">
            <center>
                <br />
                
                <div className="container">
                    <div className="row">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6">
                                <label className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    name="name" // Match state property name
                                    onChange={inputHandler}
                                    value={data.name}
                                    className="form-control"
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6">
                                <label className="form-label">Email Address</label>
                                <input
                                    type="email"
                                    name="email" // Match state property name
                                    onChange={inputHandler}
                                    value={data.email}
                                    className="form-control"
                                    placeholder="Enter your email address"
                                    required
                                />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    name="password" // Match state property name
                                    onChange={inputHandler}
                                    value={data.password}
                                    className="form-control"
                                    placeholder="Create your password"
                                    required
                                />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6">
                                <label className="form-label">Confirm Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword" // Match state property name
                                    onChange={inputHandler}
                                    value={data.confirmPassword}
                                    className="form-control"
                                    placeholder="Confirm your password"
                                    required
                                />
                            </div>
                            <div className="col col-12 col-md-6">
                                <center>
                                    <button className="btn btn-success" onClick={readvalue}>
                                        SIGN UP
                                    </button>
                                </center>
                            </div>
                            <div className="col col-12">
                                <p>
                                    <a href="/UserLogin" className="link">
                                        Already have an account? Login here
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
        </div>
    );
};

export default UserSignup;


