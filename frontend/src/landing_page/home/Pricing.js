import React from 'react';

function Pricing() {
    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-4 text-right'>
                    <h1 className='mb-4 fs-2'>Unbeatable pricing</h1>
                    <p>
                        We pioneered the concept of discount broking and price transparency in India.
                        Flat fees and no hidden charges.
                    </p>
                    <a href='' style={{ textDecoration: "none" }}>
                        See Pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>

                
                <div className='col-8'>
                    <div className='row text-center'>
                        <div className='col-4'>
                            <img src='media/images/pricing-eq.svg' alt='Free Account Opening' style={{ width: '100px' }} />
                            <p>Free Account Opening</p>
                        </div>
                        <div className='col-4'>
                            <img src='media/images/direct.svg' alt='Free equity delivery' style={{ width: '100px' }} />
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col-4  mb-5'>
                            <img src='media/images/other-trades.svg' alt='Intraday and F&O' style={{ width: '100px' }} />
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
