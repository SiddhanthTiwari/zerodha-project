import React from 'react';

function Brokerage() {
    return (
        <div className='container'>
            <div className='row text-center border-top mb-5 mt-5 p-5'>
                <div className='col-8 p-3'>
                    <a href='' style={{ textDecoration: 'none' }}><h1 className='fs-5 mb-5' >Brokerage Calculator</h1></a>
                    <ul style={{textAlign:'left',lineHeight:'2.2'}} className='text-muted'>
                        <li>Call & Trade and RVS auto-squareoff: Additional charges of ₹50 GST per order.</li>
                        
                        <li>Digital contract notes will be sent via e-mail.</li>

                        <li>Physical copies of contract notes, if required, shall be charged 120 per contract note. Courier charges apply.</li>
                        
                        <li>For NRI account (non-PIS), 0.5% or 100 per executed order for equity (whichever is lower)</li>
                        
                        <li>for NRI account (PIS), 0.5% or 200 per executed order for equity (whichever is lower).</li>
                        
                        <li>If the account is in debit balance, any order plad will be charged 148 per executed order Instead of 28 por executed order.</li>
                    </ul>
                </div>
                <div className='col-4 p-3  '>
                    <a href='' style={{ textDecoration: 'none' }}><h1 className='fs-5'>Lists of Charges</h1></a>
                </div>
                </div>
                <div className='row text-muted mb-5'>
                    <h3>Disclaimer</h3>
                    <p>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
            </div>
        </div>
    );
}

export default Brokerage;