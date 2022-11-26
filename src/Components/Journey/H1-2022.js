import React from 'react';
import growth from '../../Images/Journey/growth-circle.svg';
import dev from '../../Images/Journey/dev-circle.svg';
import './Journey.css';

function H1 ()
{
  return (
    <>
      <div className='container h1-container'>
        <div className='h1-content-div mt-5'>
          <div className='row'>
            <div className='col-lg-6 col-12'>
              <div className='h1-div-1'>
                <h1 className='h1-h1 mb-4'><img src={growth} alt="" className='me-3' />Growth</h1>
                <ul className='ms-3 mt-4 h1-ul'>
                  <li>Acquiring up to 500,000 users</li>
                  <li>Growing TVL up to $50m</li>
                  <li>Launching more projects on Xend Launchpad</li>
                </ul>
              </div>
            </div>
            <div className='col-lg-6 col-12'>
              <div className='h1-div-2 pt-lg-0 pt-5'>
                <h1 className='h1-h1 mb-4'><img src={dev} alt="" className='me-3' />Development</h1>
                <ul className=' h1-ul'>
                  <li>Launching of Alpha version Cross Chain</li>
                  <li>DeFi Browser Extension Wallet to support
                    <ul className='d-flex flex-row justify-content-between w-75  h1-ul'>
                      <li>Savings</li>
                      <li>Swapping</li>
                      <li>Bridging</li>
                    </ul>
                    <ul className=' h1-ul'>
                      <li>NFT Marketplace</li>
                      <li>Customized Wallet Skins</li>
                      <li>Support for GameFi</li>
                    </ul>
                  </li>
                  <li>Development of Swapping on mobile</li>
                  <li>Multiple digital asset support on mobile app</li>
                  <li>Staking support on mobile app</li>
                  <li>Development of xVault on Polygon</li>
                  <li>Scaling XendBridge to support multiple local currencies such as KES, USD, Euro etc</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default H1;