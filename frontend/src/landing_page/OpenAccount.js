import React from 'react';
import { Link } from 'react-router-dom'

function OpenAccount() {
    return (
        <div className='container'>
            <div className='text-center mt-5 p-5'>
                <h1 className='mb-4 '>Open a Zerodha account</h1>
                <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <Link to="/signup" style={{ textDecoration: 'none' }}>
                    <button className="mt-3 btn btn-primary fs-5" style={{ width: "20%", margin: "0 auto", display: "block" }}>
                        Sign up for free
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default OpenAccount;