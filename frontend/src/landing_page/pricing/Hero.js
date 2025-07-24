import React from 'react';

function Hero() {
    return (
        <div className='container'>
            <div className='p-4 mb-5 mt-5 text-center '>
                <h1 className='p-2'>Charges</h1>
                <p className='text-muted fs-4 mb-5'>List of all charges and taxes</p>
            </div>
            <div className='row p-5 mt-5 text-center'>
                <div className='col-4 p-5'>
                    <img src='media/images/pricing0.svg' style={{ width: '95%' }} />
                    <h3 className='text-muted mb-3 fs-3'>Free equity delivery</h3>
                    <p className='text-muted fs-5'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 p-4 text-center'>
                    <img src='media/images/other-trades.svg' style={{ width: '95%' }} />
                    <h3 className='text-muted mb-3 fs-3'>Intraday and F&O trades</h3>
                    <p className='text-muted fs-5'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 p-5 text-center'>
                    <img src='media/images/pricing0.svg' style={{ width: '95%' }} />
                    <h3 className='text-muted mb-3 fs-3'>Free direct MF</h3>
                    <p className='text-muted fs-5'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges. </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;