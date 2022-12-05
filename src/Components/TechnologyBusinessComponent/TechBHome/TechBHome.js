import React from 'react';
import './TechBHome.css';
import officer1 from '../../../Images/Tech-Business/cz.svg';
import officer3 from '../../../Images/Tech-Business/onajite.svg';
import officer2 from '../../../Images/Tech-Business/yele.svg';

function TechBHome ()
{
  return (
    <>
      <div className='Bus-home py-5'>
        <div className='container-fluid mt-5'>
          <div className='container'>
            <div className='home-content-div py-md-5 py-4'>
              <h1 className='h1 text-center fw-bold w-sm-100 w-75 mx-auto linear-text'>A Global DeFi Platform for Credit Unions, Cooperatives, and Individuals</h1>
              <p className='text-center py-3'>You And Your Organization Can Access DeFi, Stable Currencies,<br /> And Up To 15% APY On Your Savings</p>
              <div className='home-btn-group d-flex flex-md-row flex-column justify-content-center align-items-center'>

                <a className='a-remove mx-1' href='https://play.google.com/store/apps/details?id=com.xendmobile' target='_blank' rel='noreferrer'>
                  <button className='bus-btn'>
                    Contact a Fund Manager
                  </button>
                </a>

                <a className='a-remove mx-1 mt-md-0 mt-3' href='https://play.google.com/store/apps/details?id=com.xendmobile' target='_blank' rel='noreferrer'>
                  <button className='bus-btn-2'>
                    Access 15% Interest Now
                  </button>
                </a>
              </div>


            </div>

          </div>

          <div className='container'>
            <div className='bus-officer py-5'>
              <h1 className='h2 my-3 text-center fw-bold linear-text'>Inspired By</h1>
              <div className='row'>
                <div className='col-lg-4 col-12 p-3'>
                  <div className='bus-officer-div d-flex flex-row'>
                    <div className='bus-officer-img me-2'>
                      <img src={officer1} alt="img" width={50} />
                    </div>
                    <div className='bus-officer-inner'>
                      <h6 className='bus-officer-h6'>
                        With their platform, they are able to bring stable currency and DeFi investment opportunities to those who normally wouldn’t have them.</h6>
                      <p className='bus-officer-p'>Changpeng Zhao-CEO of Binance</p>
                    </div>
                  </div>
                </div>

                <div className='col-lg-4 col-12  p-3'>
                  <div className='bus-officer-div d-flex flex-row'>
                    <div className='bus-officer-img me-2'>
                      <img src={officer2} alt="img" width={50} />
                    </div>
                    <div className='bus-officer-inner'>
                      <h6 className='bus-officer-h6'>
                        With their platform, they are able to bring stable currency and DeFi investment opportunities to those who normally wouldn’t have them.</h6>
                      <p className='bus-officer-p'>Changpeng Zhao-CEO of Binance</p>
                    </div>
                  </div>
                </div>

                <div className='col-lg-4 col-12  p-3'>
                  <div className='bus-officer-div d-flex flex-row'>
                    <div className='bus-officer-img me-2'>
                      <img src={officer3} alt="img" width={50} />
                    </div>
                    <div className='bus-officer-inner'>
                      <h6 className='bus-officer-h6'>
                        With their platform, they are able to bring stable currency and DeFi investment opportunities to those who normally wouldn’t have them.</h6>
                      <p className='bus-officer-p'>Changpeng Zhao-CEO of Binance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default TechBHome;;