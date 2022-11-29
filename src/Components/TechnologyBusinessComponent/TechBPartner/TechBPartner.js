import React from 'react';
import hashkey from '../../../Images/Tech-Business/partner/haskey.svg';
import google from '../../../Images/Tech-Business/partner/google-launchpad-2.svg';
import amplifi from '../../../Images/Tech-Business/partner/amplifi.svg';
import au21 from '../../../Images/Tech-Business/partner/au21.svg';
import binance from '../../../Images/Tech-Business/partner/binance.svg';
import delta from '../../../Images/Tech-Business/partner/delta-hub.svg';
import longhash from '../../../Images/Tech-Business/partner/long-hash.svg';
import ngc from '../../../Images/Tech-Business/partner/ngc.svg';
import apex from '../../../Images/Tech-Business/partner/twin-apex.svg';
import './TechBPartner.css';

function TechBPartner ()
{
  return (
    <>
      <div className='container bus-partner'>
        <h1 className='h1 text-center fw-bold mb-4'>Investment and Business Partners</h1>
        <div className='row justify-content-center'>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 p-2">
            <div className='card'>
              <div className='bus-partner-img d-flex align-items-center justify-content-center'>
                <img src={hashkey} alt="" />
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-12 p-2">
            <div className='card'>
              <div className='bus-partner-img d-flex align-items-center justify-content-center'>
                <img src={google} alt="" />
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-12 p-2">
            <div className='card'>
              <div className='bus-partner-img d-flex align-items-center justify-content-center'>
                <img src={apex} alt="" />
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-12 p-2">
            <div className='card'>
              <div className='bus-partner-img d-flex align-items-center justify-content-center'>
                <img src={binance} alt="" />
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-12 p-2">
            <div className='card'>
              <div className='bus-partner-img d-flex align-items-center justify-content-center'>
                <img src={au21} alt="" />
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-12 p-2">
            <div className='card'>
              <div className='bus-partner-img d-flex align-items-center justify-content-center'>
                <img src={ngc} alt="" />
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-12 p-2">
            <div className='card'>
              <div className='bus-partner-img d-flex align-items-center justify-content-center'>
                <img src={longhash} alt="" />
              </div>
            </div>
          </div>


          <div className="col-lg-3 col-md-4 col-sm-6 col-12 p-2">
            <div className='card'>
              <div className='bus-partner-img d-flex align-items-center justify-content-center'>
                <img src={delta} alt="" />
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-12 p-2">
            <div className='card'>
              <div className='bus-partner-img d-flex align-items-center justify-content-center'>
                <img src={amplifi} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className='py-5'>
          <div className='card bus-parter-card'>
            <div className='bus-card-inner py-4'>
              <h1 className='bus-card-partner-h1'>Get Started</h1>
              <p className='bus-card-partner-p my-4'>Consult with an expert today</p>

              <div className='d-flex flex-md-row flex-column justify-content-center align-items-center'>
                <div className='mb-md-0 mb-4 mt-md-0 mt-4'>
                  <a className='a-remove bus-card-partner-btn mx-1' href='void:'>Contact a Fund Manager</a>
                </div>
                <div className='mt-md-0 mt-3'>
                  <a className='a-remove bus-card-partner-btn-1 mx-1' href='void:'>Earn 15% Interest Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default TechBPartner;