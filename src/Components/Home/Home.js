import React from 'react';
import './Home.css';
import { FaGooglePlay } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { BsApple } from 'react-icons/bs';
import { ImAndroid } from 'react-icons/im';
import { IoMdArrowRoundForward } from 'react-icons/io';

import homeMock from '../../Images/Xend_Finance_Screen_Mockup.svg';
function Home ()
{
  return (
    <>
      <div className='container-fluid home-container'>
        <div className='container'>
          <div className='home-content-div'>
            <h1 className='h1 text-center fw-bold'>Crypto Banking <br /> For Everyone</h1>
            <p className='text-center py-3'>Easily Convert Your Local Currency And Save In Stable Crypto Or US Dollars <br />
              <span>Earn Up To 15% Annual Interest</span></p>
            <div className='home-btn-group d-flex flex-md-row flex-column justify-content-center align-items-center'>
              <button className='home-btn d-flex align-item-center m-3'>
                <i className='my-auto me-3 ms-1'><FaGooglePlay /></i>
                <p className='text-start '>
                  <span className='btn-small-text uc'>get it on</span><br /><span>Google Play</span>
                </p>
              </button>
              <button
                className='home-btn d-flex align-item-center m-3'><i className='my-auto me-3 ms-1'><BsApple /></i>
                <p className='text-start '><span className='btn-small-text uc'>download on</span><br /><span>App Store</span>
                </p>
              </button>
              <button
                className='home-btn d-flex align-item-center m-3'>
                <i className='my-auto me-3 ms-1'><ImAndroid /></i>
                <p className='text-start '><span className='btn-small-text uc'>download apk</span><br /><span>Android</span>
                </p></button>
            </div>

            <div className='home-img-div'>
              <img src={homeMock} alt="" />
            </div>
          </div>


        </div>
        <div className='container'>
          <div className='home-card-div'>
            <div className='card home-card'>
              <div className='card-body'>
                <h1 className='text-center home-card-h1'>For Developers</h1>
                <p className=' text-center w-75 mx-auto home-card-p my-3'>Xend Finance has created a highly flexible and robust infrastructure to become a Layer-2 DeFi protocol. Composed of multiple Layer-1 DeFi protocols across different blockchains to provide better yields, as opposed to using Layer-1 DeFi yield platforms individually, we invite developers to build for free.</p>
                <div className='d-flex flex-row align-items-center justify-content-center'>
                  <button className='sdk-btn mx-2'><i className='me-2'><FiDownload /></i>Download SDK</button>
                  <button className='sdk-learn-btn mx-2'>Learn More <i><IoMdArrowRoundForward /></i></button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;