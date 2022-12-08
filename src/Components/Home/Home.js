import React from 'react';
import './Home.css';
import { FaGooglePlay } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { BsApple } from 'react-icons/bs';
import { ImAndroid } from 'react-icons/im';
import { IoMdArrowRoundForward } from 'react-icons/io';
import homeMock from '../../Images/GB_Fin/Mockup-01.svg';
import { AnimationOnScroll } from 'react-animation-on-scroll';
function Home ()
{
  return (
    <>
      <div className='container-fluid home-container'>
        <div className='container'>
          <div className='home-content-div'>
            <h1 className='title-text text-center fw-bold linear-text'>Crypto Banking For Everyone</h1>
            <p className='text-center py-3'>Easily Convert Your Local Currency And Save In Stable Crypto Or US Dollars <br />
              <span className='linear-text'>Earn Up To 15% Annual Interest</span></p>

            <div className=' d-flex align-items-center justify-content-center mt-3'>
              <h2 className='token-h4 h2 fw-bold'>Coming Soon...</h2>
            </div>

            <div className='home-btn-group d-flex flex-md-row flex-column justify-content-center align-items-center'>




              <a className='a-remove' href='https://play.google.com/store/apps/details?id=com.xendmobile' target='_blank' rel='noreferrer'>
                <button className='home-btn d-flex align-item-center m-3'>
                  <i className='my-auto me-3 ms-1'><FaGooglePlay /></i>
                  <p className='text-start '>
                    <span className='btn-small-text uc'>get it on</span><br /><span>Google Play</span>
                  </p>
                </button>
              </a>

              <a className='a-remove' href='https://apps.apple.com/us/app/xend-finance/id1587050825' target='_blank' rel='noreferrer'>
                <button
                  className='home-btn d-flex align-item-center m-3'><i className='my-auto me-3 ms-1'><BsApple /></i>
                  <p className='text-start '><span className='btn-small-text uc'>download on</span><br /><span>App Store</span>
                  </p>
                </button>
              </a>
              <a className='a-remove' href='https://mega.nz/file/Io1gDKRL#fEaJyqyY9ePSRw79qVjvV3X2ARtUHVFzv4LEpCp1ak4' target='_blank' rel='noreferrer'>
                <button
                  className='home-btn d-flex align-item-center m-3'>
                  <i className='my-auto me-3 ms-1'><ImAndroid /></i>
                  <p className='text-start '><span className='btn-small-text uc'>download apk</span><br /><span>Android</span>
                  </p></button>
              </a>
            </div>

            <AnimationOnScroll className='home-img-div' animateIn="animate__bounceInUp animate__slower ">
              <img src={homeMock} alt="" />
            </AnimationOnScroll>
          </div>


        </div>
        <div className='container'>
          <div className='home-card-div'>
            <AnimationOnScroll className='card home-card' animateIn="animate__fadeInUp animate__slower">
              <div className='card-body'>
                <h1 className='text-center home-card-h1 linear-text fw-bold'>For Developers</h1>
                <p className=' text-center w-75 mx-auto home-card-p my-3'>GB Finance has created a highly flexible and robust infrastructure to become a Layer-2 DeFi protocol. Composed of multiple Layer-1 DeFi protocols across different blockchains to provide better yields, as opposed to using Layer-1 DeFi yield platforms individually, we invite developers to build for free.</p>
                <div className='d-flex flex-row align-items-center justify-content-center'>
                  <a href='https://www.npmjs.com/package/@xend-finance/web-sdk' target='_blank' rel='noreferrer'>
                    <button className='sdk-btn mx-2'><i className='me-2'><FiDownload /></i>Download SDK</button></a>
                  <button className='sdk-learn-btn mx-2'>Learn More <i><IoMdArrowRoundForward /></i></button>
                </div>
              </div>

            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;