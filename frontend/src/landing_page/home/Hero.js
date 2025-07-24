import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className='container p-5 mb-5' >
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero' className='mb-5' />
                <h1 className='mt-5'>Invest in everything</h1>
                <p className='fs-4'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <Link to="/signup" style={{ textDecoration: 'none' }}>
                    <button className="mt-3 btn btn-primary fs-5" style={{ width: "20%", margin: "0 auto", display: "block" }}>
                        Sign up for free
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Hero;