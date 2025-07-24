import React from 'react';

function Hero() {
    return (
        <section className='container-fluid bg-primary text-white' id='supportHero'>
            <div className='d-flex justify-content-between align-items-center p-5'>
                <h4 className='m-0'>Support Portal</h4>
                <a href='' className='text-white text-decoration-underline'>Track tickets</a>
            </div>

            <div className='row px-5 pb-5'>
                <div className='col-md-6'>
                    <h1 className='fs-4 mb-4'>
                        Search for an answer or browse help topics to create a ticket
                    </h1>

                    <div className="position-relative mb-4" style={{ maxWidth: '600px' }}>
                        <input
                            type="text"
                            className="form-control rounded-pill ps-4 pe-5"
                            placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
                            style={{ height: '48px' }}
                        />
                        <span
                            className="position-absolute end-0 top-50 translate-middle-y pe-3"
                            style={{ cursor: 'pointer' }}
                        >
                            <i className="fa fa-search text-secondary"></i>
                        </span>
                    </div>

                    <div className='d-flex flex-wrap gap-4'>
                        <a href='' className='text-white text-decoration-underline'>Track account opening</a>
                        <a href='' className='text-white text-decoration-underline'>Track segment activation</a>
                        <a href='' className='text-white text-decoration-underline'>Intraday margins</a>
                        <a href='' className='text-white text-decoration-underline'>Kite user manual</a>
                    </div>
                </div>

                <div className='col-md-6'>
                    <h1 className='fs-4 mb-4'>Featured</h1>
                    <ol className='text-white'>
                        <li>
                            <a href='' className='text-white text-decoration-underline' style={{lineHeight:'2.2'}}>
                                Quarterly Settlement of Funds - July 2025
                            </a>
                        </li>
                        <li>
                            <a href='' className='text-white text-decoration-underline'  style={{lineHeight:'2.2'}}>
                                Exclusion of F&O contracts on 8 securities from August 29, 2025
                            </a>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;
