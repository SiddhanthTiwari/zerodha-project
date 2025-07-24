import React from 'react';
import { Link } from 'react-router-dom';

function Universe() {
    return (
        <div className='container'>
            <h4 className='text-center text-muted mt-5 mb-5 p-4'>Want to know more about our technology stack? Check out the <a href='' style={{ color: 'blue', textDecoration: 'none' }}>Zerodha.tech</a> blog.</h4>
            <div className='row text-center p-4'>
                <h1 className='text-center mt-3 mb-3'>The Zerodha Universe</h1>
                <p className='text-center text-muted mt-3'>Extend your trading and investment experience even further with our partner platforms</p>

                <div className='col-4 p-2 mt-5'>
                    <img src='media/images/smallcaseLogo.png' />
                    <p className='text-muted text-small mt-3'>Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.</p>
                </div>
                <div className='col-4 p-2 mt-5'>
                    <img src='media/images/sensibullLogo.svg' style={{ width: '60%' }} />
                    <p className='text-muted text-small mt-3'>Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.
                    </p>
                </div>
                <div className='col-4 p-2 mt-5'>
                    <img src='media/images/zerodhaFundhouse.png' style={{ width: '50%' }} />
                    <p className='text-muted text-small mt-3'>Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.
                    </p>
                </div>
                <div className='col-4 p-2 mt-5'>
                    <img src='media/images/dittoLogo.png' style={{ width: '40%' }} />
                    <p className='text-muted text-small mt-3'>Personalized advice on life
                        and health insurance. No spam
                        and no mis-selling.
                        Sign up for free</p>
                </div>
                <div className='col-4 p-2 mt-5'>
                    <img src='media/images/streakLogo.png' style={{ width: '50%' }} />
                    <p className='text-muted text-small mt-3'>Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding.</p>
                </div>
                <div className='col-4 p-2 mt-5'>
                    <img src='media/images/tijori.svg' style={{ width: '50%' }} />
                    <p className='text-muted text-small mt-3'>Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.</p>
                </div>
                <Link to="/signup" style={{ textDecoration: 'none' }}>
                    <button className="mt-3 btn btn-primary fs-5" style={{ width: "20%", margin: "0 auto", display: "block" }}>
                        Sign up for free
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Universe;