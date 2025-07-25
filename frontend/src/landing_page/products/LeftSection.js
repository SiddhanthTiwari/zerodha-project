import React from 'react';

function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <img src={imageURL}/>
                </div>
                <div className='col-6 p-5 mt-5 mb-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo}>Try Demo  <i class="fa fa-long-arrow-right" aria-hidden="true" style={{ color: 'blue' }}></i></a>
                        <a href={learnMore} style={{marginLeft:'50px'}}>Learn More  <i class="fa fa-long-arrow-right" aria-hidden="true" style={{ color: 'blue' }}></i></a>
                    </div>
                    <div className='mt-4'>
                        <a href={googlePlay}><img src='media/images/googlePlayBadge.svg'/></a>
                        <a href={appStore} style={{marginLeft:'50px'}}><img src='media/images/appstoreBadge.svg'/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;