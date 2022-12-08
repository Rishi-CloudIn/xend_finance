import React from 'react';
import growth from '../../Images/GB_Fin/growth-circle.svg';
import dev from '../../Images/GB_Fin/dev-circle.svg';
import './Journey.css';

function H2 ()
{
  return (
    <>
      <div className='container h1-container'>
        <div className='h1-content-div mt-5'>
          <div className='row'>
            <div className='col-lg-6 col-12'>
              <div className='h1-div-1'>
                <h1 className='h1-h1 mb-4'><img src={growth} alt="" className='me-3' width={50} />Growth</h1>
                <ul className='ms-3 mt-4 h1-ul'>
                  <li>Acquiring up to 1,000,000 users</li>
                  <li>Growing TVL up to $300M</li>
                  <li>Launching more projects on GB Launchpad</li>
                </ul>
              </div>
            </div>
            <div className='col-lg-6 col-12'>
              <div className='h1-div-2 pt-lg-0 pt-5'>
                <h1 className='h1-h1 mb-4'><img src={dev} alt="" className='me-3' width={50} />Development</h1>
                <ul className=' h1-ul'>
                  <li>Full version Cross Chain DeFi Browser Extension Wallet to support</li>
                  <li>DeFi Browser Extension Wallet to support
                    <ul className='d-flex flex-row justify-content-between w-75  h1-ul'>
                      <li>Swapping</li>
                      <li>Bridging</li>
                      <li>NFT Marketplace</li>
                    </ul>
                    <ul className='h1-ul'>
                      <li>Customized Wallet Skins</li>
                    </ul>
                  </li>
                  {/* <li>Support of GB Bridge on Cross Chain DeFi browser extension wallet</li> */}
                  <li>Development of Cross Chain DeFi browser wallet on mobile.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default H2;
