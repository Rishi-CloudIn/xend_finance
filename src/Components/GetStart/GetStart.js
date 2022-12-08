import React from 'react';
import { FaGooglePlay } from 'react-icons/fa';
import { BsApple } from 'react-icons/bs';
import { ImAndroid } from 'react-icons/im';
function GetStart ()
{
  return (
    <>
      <div className='container get-container'>
        <div className='get-content-div'>
          <h1 className='journey-h1'>Get Started</h1>

          <div className=' d-flex align-items-center justify-content-start mb-2 mt-4'>
            <h2 className='token-h4 h2 fw-bold'>Coming Soon...</h2>
          </div>
          <div className='home-btn-group d-flex flex-md-row flex-column justify-content-start my-4 align-items-center pb-3'>
            <a className='a-remove' href='void:' target='_blank' rel='noreferrer'>
              <button className='home-btn d-flex align-item-center m-3'>
                <i className='my-auto me-3 ms-1'><FaGooglePlay /></i>
                <p className='text-start '>
                  <span className='btn-small-text uc'>get it on</span><br /><span>Google Play</span>
                </p>
              </button>
            </a>

            <a className='a-remove' href='void:' target='_blank' rel='noreferrer'>
              <button
                className='home-btn d-flex align-item-center m-3'><i className='my-auto me-3 ms-1'><BsApple /></i>
                <p className='text-start '><span className='btn-small-text uc'>download on</span><br /><span>App Store</span>
                </p>
              </button>
            </a>

            <a className='a-remove' href='void:' target='_blank' rel='noreferrer'>
              <button
                className='home-btn d-flex align-item-center m-3'>
                <i className='my-auto me-3 ms-1'><ImAndroid /></i>
                <p className='text-start '><span className='btn-small-text uc'>download apk</span><br /><span>Android</span>
                </p></button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetStart;