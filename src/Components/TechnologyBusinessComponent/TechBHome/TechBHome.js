import React from 'react';


function TechBHome ()
{
  return (
    <>
      <div className='Bus-home'>
        <div className='container-fluid home-container'>
          <div className='container'>
            <div className='home-content-div'>
              <h1 className='h1 text-center fw-bold'>A Global DeFi Platform for Credit Unions, Cooperatives, and Individuals</h1>
              <p className='text-center py-3'>You And Your Organization Can Access DeFi, Stable Currencies, And Up To 15% APY On Your Savings</p>
              <div className='home-btn-group d-flex flex-md-row flex-column justify-content-center align-items-center'>

                <a className='a-remove' href='https://play.google.com/store/apps/details?id=com.xendmobile' target='_blank' rel='noreferrer'>
                  <button className='home-btn d-flex align-item-center m-3'>
                    <p className='text-start '>
                      <span className='btn-small-text uc'>get it on</span><br /><span>Google Play</span>
                    </p>
                  </button>
                </a>

                <a className='a-remove' href='https://apps.apple.com/us/app/xend-finance/id1587050825' target='_blank' rel='noreferrer'>
                  <button
                    className='home-btn d-flex align-item-center m-3'>
                    <p className='text-start '><span className='btn-small-text uc'>download on</span><br /><span>App Store</span>
                    </p>
                  </button>
                </a>

              </div>


            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default TechBHome;;