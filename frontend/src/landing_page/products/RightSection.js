import React from 'react';

function RightSection({imageURL,productName,productDescription,learnMore}) {
    return (
        <div className='container'>
            <div className='row '>
                <div className='col-6 p-5 mt-5 mb-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <a href={learnMore}>Learn More  <i class="fa fa-long-arrow-right" aria-hidden="true" style={{ color: 'blue' }}></i></a>
                    
                </div>
                <div className='col-6'>
                    <img src={imageURL}/>
                </div>
            </div>
        </div>
    );
}

export default RightSection;