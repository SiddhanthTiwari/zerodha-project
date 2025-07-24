import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";

export default function Login() {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
    });
    const { email, password } = inputValue;

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const handleError = (err) =>
        toast.error(err, {
            position: "bottom-left",
        });

    const handleSuccess = (msg) =>
        toast.success(msg, {
            position: "bottom-left",
        });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                `${process.env.REACT_APP_API_URL}/login`,
                {
                    ...inputValue,
                },
                { withCredentials: true }
            );
            console.log(data);
            const { success, message } = data;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    window.location.href = 'https://zerodha-dashboard-2cvo.onrender.com';
                }, 1000);
            } else {
                handleError(message);
            }
        } catch (error) {
            console.log(error);
            handleError("An error occurred during login");
        }
        setInputValue({
            email: "",
            password: "",
        });
    };

    return (
        <div className="auth-page">
            <form className="auth-box" onSubmit={handleSubmit}>
                <h2 className='text-muted'>Access Your Dashboard</h2>
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleOnChange}
                    required
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleOnChange}
                    required
                />
                <button type="submit">Login</button>
                <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </form>
            <ToastContainer />
        </div>
    );
}