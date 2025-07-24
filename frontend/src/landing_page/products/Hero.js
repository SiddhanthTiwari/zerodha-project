import React from 'react';

function Hero() {
    return (
        <div className='container '>
            <div className='text-center p-5 mt-5 mb-5 border-bottom'>
                <h1>Zerodha Products</h1>
                <h4 className='text-muted mb-4 mt-4'>Sleek, modern, and intuitive trading platforms</h4>
                <p className='fs-5 mb-5'>Check out our <a href='' style={{ textDecoration: 'none' }}>investment offerings</a> <i class="fa fa-long-arrow-right" aria-hidden="true" style={{ color: 'blue' }}></i></p>
            </div>
        </div>
    );
}

export default Hero;