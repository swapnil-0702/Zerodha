import React from 'react';

function Pricing() {
    return ( 
        <div className='container p-5'>
            <div className='row align-items-center'>
                <div className='col-5'>
                    <h2>Unbeatable pricing</h2>
                    <p className='mt-4'>We pioneered the concept of discount broking and price <br/> transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' style={{textDecoration:"none"}}>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a> 
                </div>
                <div className='col-7 d-flex align-items-center justify-content-between gap-4'>
                    <div className='pricing-option'>
                        <img src='media/images/pricing-eq.svg' alt='Zero rupees' className='pricing-option-img'/>
                        <p className='pricing-option-text'>Free account opening</p>
                    </div>
                    <div className='pricing-option'>
                        <img src='media/images/pricing-eq (1).svg' alt='Zero rupees' className='pricing-option-img'/>
                        <p className='pricing-option-text'>Free equity delivery and direct mutual funds</p>
                    </div>
                    <div className='pricing-option'>
                        <img src='media/images/other-trades.svg' alt='Twenty rupees' className='pricing-option-img'/>
                        <p className='pricing-option-text'>Intraday and F&O</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;
