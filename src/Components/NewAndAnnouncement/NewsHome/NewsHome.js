import React from 'react';
import './NewsHome.css';
import press from '../../../Images/News_and_Announcement/xend-launches-two-african-countries.png';

import { AiOutlineArrowRight } from 'react-icons/ai';
function NewsHome ()
{
  return (
    <>
      <div className='news-container container'>
        <div className='token-content-div pb-5 mb-5'>
          <h1 className='h1 text-center fw-bold w-sm-100 w-75 mx-auto linear-text'>Xend Media</h1>
          <p className='text-center py-3'>Press information, media kits, and the latest news about Xend can be found here.</p>
          <div className='d-flex justify-content-center'>
            <a href='void:' className='news-home-btn a-remove'>Download our Media Kit</a>
          </div>
        </div>


        <div className='press-content-div'>
          <div className='row'>
            <h1 className='h1 linear-text fw-bold my-2 mb-md-4'>Press Coverage</h1>
            <div className='col-md-6 d-flex align-items-center justify-content-md-start justify-content-center'>
              <div className='press-img'>
                <img src={press} alt="" />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='press-div mt-md-0 mt-4'>
                <h6 className='press-h6 text-secondary'>MEDIA/ August 3, 2022 /Disrupt Africa</h6>
                <h2 className='press-h2'>Nigeria’s Xend Finance adds to product suite of its global crypto bank</h2>
                <p className='press-p'>The Nigeria-based Xend Finance, a global crypto bank, has announced the launch of XendBridge, a crypto payment API, and SwitchWallet, a free public wallet infrastructure.</p>
                <a href='void:' className='a-remove '>Read More <i><AiOutlineArrowRight /></i></a>
              </div>
            </div>

            <div className='col-md-6 mt-md-5 mt-3'>
              <div className='press-div mt-md-0 mt-4'>
                <h6 className='press-h6 text-secondary'>MEDIA/ July 29, 2022 /Cryptotvplus</h6>
                <h2 className='press-h2 py-3'>Xend Finance to help Businesses with New Crypto Payment System</h2>
                <a href='void:' className='a-remove '>Read More <i><AiOutlineArrowRight /></i></a>
              </div>
              <hr />
            </div>
            <div className='col-md-6  mt-md-5 mt-3'>
              <div className='press-div mt-md-0 mt-4'>
                <h6 className='press-h6 text-secondary'>MEDIA/ July 29, 2022 /Ventureburn</h6>
                <h2 className='press-h2 py-3'>Xend launches crypto payment API and wallet infrastructure</h2>
                <a href='void:' className='a-remove'>Read More <i><AiOutlineArrowRight /></i></a>
              </div>
              <hr />
            </div>

            <div className='col-md-6  mt-md-5 mt-3'>
              <div className='press-div mt-md-0 mt-4'>
                <h6 className='press-h6 text-secondary'>MEDIA/ July 29, 2022 /BSC News</h6>
                <h2 className='press-h2 py-3'>Xend Expands Reach in Africa With New Products</h2>
                <a href='void:' className='a-remove '>Read More <i><AiOutlineArrowRight /></i></a>
              </div>
              <hr />
            </div>

            <div className='col-md-6  mt-md-5 mt-3'>
              <div className='press-div mt-md-0 mt-4'>
                <h6 className='press-h6 text-secondary'>MEDIA/ July 27, 2022 /BitKE</h6>
                <h2 className='press-h2 py-3'>Introducing XendBridge API and SwitchWallet Business Wallet Infrastructure by Nigeria’s Xend Finance</h2>
                <a href='void:' className='a-remove'>Read More <i><AiOutlineArrowRight /></i></a>
              </div>
              <hr />
            </div>

            <div className='col-md-6  mt-md-5 mt-3'>
              <div className='press-div mt-md-0 mt-4'>
                <h6 className='press-h6 text-secondary'>MEDIA/ July 2, 2022 /BSC News</h6>
                <h2 className='press-h2 py-3'>Xend Hits Milestone Upon Launch Into Two New African Nations</h2>
                <a href='void:' className='a-remove'>Read More <i><AiOutlineArrowRight /></i></a>
              </div>
              <hr />
            </div>

            <div className='col-md-6  mt-md-5 mt-3'>
              <div className='press-div mt-md-0 mt-4'>
                <h6 className='press-h6 text-secondary'>MEDIA/ July 1, 2022 /Cryptopolitan</h6>
                <h2 className='press-h2 py-3'>Burgeoning crypto start-up, Xend finance launch in Ghana, Kenya</h2>
                <a href='void:' className='a-remove'>Read More <i><AiOutlineArrowRight /></i></a>
              </div>
              <hr />
            </div>


          </div>
        </div>
      </div>
    </>
  );
}

export default NewsHome;