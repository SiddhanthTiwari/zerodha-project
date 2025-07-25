// This is what you should use in your actual React app
// (process.env works fine in real React apps)

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
    const [loading, setLoading] = useState(false);

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
        
        // Prevent multiple submissions
        if (loading) return;
        
        setLoading(true);
        
        try {
            // Debug logs
            console.log('🔄 Starting login process...');
            console.log('📧 Email:', email);
            console.log('🌐 API URL:', process.env.REACT_APP_API_URL);
            console.log('🏠 Dashboard URL:', process.env.REACT_APP_DASHBOARD_URL);
            
            // API call with async/await
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/login`,
                {
                    email,
                    password,
                },
                { 
                    withCredentials: true,
                    timeout: 10000, // 10 second timeout
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );
            
            console.log('📦 Response received:', response.data);
            
            const { success, message } = response.data;
            
            if (success) {
                console.log('✅ Login successful');
                handleSuccess(message);
                
                // Wait for success message to show
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                // Handle redirection
                await handleRedirection();
                
            } else {
                console.log('❌ Login failed:', message);
                handleError(message);
            }
            
        } catch (error) {
            console.error('🚨 Login error:', error);
            await handleLoginError(error);
        } finally {
            setLoading(false);
            // Clear form
            setInputValue({
                email: "",
                password: "",
            });
        }
    };

    const handleRedirection = async () => {
        try {
            const dashboardUrl = process.env.REACT_APP_DASHBOARD_URL;
            
            if (dashboardUrl) {
                console.log('🔀 Redirecting to dashboard:', dashboardUrl);
                
                // Check if it's an external URL
                if (dashboardUrl.startsWith('http')) {
                    // External URL - use window.location
                    window.location.href = dashboardUrl;
                } else {
                    // Internal route - use React Router
                    navigate(dashboardUrl);
                }
            } else {
                // Fallback to internal dashboard route
                console.log('🔀 Using fallback route: /dashboard');
                navigate('/dashboard');
            }
        } catch (error) {
            console.error('🚨 Redirection error:', error);
            // Fallback navigation
            navigate('/dashboard');
        }
    };

    const handleLoginError = async (error) => {
        if (error.response) {
            // Server responded with error status
            console.error('📤 Server error response:', error.response.data);
            console.error('📊 Status code:', error.response.status);
            
            const errorMessage = error.response.data?.message || 
                                `Server error: ${error.response.status}`;
            handleError(errorMessage);
            
        } else if (error.request) {
            // Request was made but no response received
            console.error('📡 No response received:', error.request);
            handleError("Unable to connect to server. Please check your connection.");
            
        } else if (error.code === 'ECONNABORTED') {
            // Timeout error
            console.error('⏱️ Request timeout');
            handleError("Request timed out. Please try again.");
            
        } else {
            // Something else happened
            console.error('❓ Unexpected error:', error.message);
            handleError("An unexpected error occurred during login");
        }
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
                    disabled={loading}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleOnChange}
                    required
                    disabled={loading}
                />
                <button 
                    type="submit" 
                    disabled={loading}
                    style={{
                        backgroundColor: loading ? '#ccc' : undefined,
                        cursor: loading ? 'not-allowed' : 'pointer',
                    }}
                >
                    {loading ? 'Logging in...' : 'Login'}
                </button>
                <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </form>
            <ToastContainer />
        </div>
    );
}