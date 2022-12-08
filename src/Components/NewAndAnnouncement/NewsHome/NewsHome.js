import React from 'react';
import './NewsHome.css';
import press from '../../../Images/Blogging-bro.svg';

import { AiOutlineArrowRight } from 'react-icons/ai';
function NewsHome ()
{
  return (
    <>
      <div className='news-container container'>
        <div className='token-content-div pb-5 mb-5'>
          <h1 className='title-text text-center fw-bold w-sm-100 w-75 mx-auto linear-text'>GB Media</h1>
          <p className='text-center py-3'>Press information, media kits, and the latest news about GB can be found here.</p>
          <div className='d-flex justify-content-center'>
            <a href='void:' className='news-home-btn a-remove'>Download our Media Kit</a>
          </div>
        </div>


        <div className='press-content-div  px-sm-0 px-2'>
          <div className='row'>
            <h1 className='h1 linear-text fw-bold my-2 mb-md-4'>Press Coverage</h1>
            <div className='col-md-6 d-flex align-items-center justify-content-md-start justify-content-center'>
              <div className='press-img'>
                <img src={press} alt="" width={150}/>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='press-div mt-md-5 mt-4'>
                <h6 className='press-h6 text-secondary'>MEDIA/ August 3, 2022 /Disrupt Africa</h6>
                <h2 className='press-h2'>Nigeria’s GB Finance adds to product suite of its global crypto bank</h2>
                <p className='press-p'>The Nigeria-based GB Finance, a global crypto bank, has announced the launch of GB Bridge, a crypto payment API, and SwitchWallet, a free public wallet infrastructure.</p>
                <a href='void:' className='a-remove '>Read More <i><AiOutlineArrowRight /></i></a>
              </div>
            </div>

            <div className='col-md-6 mt-md-5 mt-3'>
              <div className='press-div mt-md-0 mt-4'>
                <h6 className='press-h6 text-secondary'>MEDIA/ July 29, 2022 /Cryptotvplus</h6>
                <h2 className='press-h2 py-3'>GB Finance to help Businesses with New Crypto Payment System</h2>
                <a href='void:' className='a-remove '>Read More <i><AiOutlineArrowRight /></i></a>
              </div>
              <hr />
            </div>
            <div className='col-md-6  mt-md-5 mt-3'>
              <div className='press-div mt-md-0 mt-4'>
                <h6 className='press-h6 text-secondary'>MEDIA/ July 29, 2022 /Ventureburn</h6>
                <h2 className='press-h2 py-3'>GB launches crypto payment API and wallet infrastructure</h2>
                <a href='void:' className='a-remove'>Read More <i><AiOutlineArrowRight /></i></a>
              </div>
              <hr />
            </div>

            <div className='col-md-6  mt-md-5 mt-3'>
              <div className='press-div mt-md-0 mt-4'>
                <h6 className='press-h6 text-secondary'>MEDIA/ July 29, 2022 /BSC News</h6>
                <h2 className='press-h2 py-3'>GB Expands Reach in Africa With New Products</h2>
                <a href='void:' className='a-remove '>Read More <i><AiOutlineArrowRight /></i></a>
              </div>
              <hr />
            </div>

            <div className='col-md-6  mt-md-5 mt-3'>
              <div className='press-div mt-md-0 mt-4'>
                <h6 className='press-h6 text-secondary'>MEDIA/ July 27, 2022 /BitKE</h6>
                <h2 className='press-h2 py-3'>Introducing GB Bridge API and SwitchWallet Business Wallet Infrastructure by Nigeria’s GB Finance</h2>
                <a href='void:' className='a-remove'>Read More <i><AiOutlineArrowRight /></i></a>
              </div>
              <hr />
            </div>

            <div className='col-md-6  mt-md-5 mt-3'>
              <div className='press-div mt-md-0 mt-4'>
                <h6 className='press-h6 text-secondary'>MEDIA/ July 2, 2022 /BSC News</h6>
                <h2 className='press-h2 py-3'>GB Hits Milestone Upon Launch Into Two New African Nations</h2>
                <a href='void:' className='a-remove'>Read More <i><AiOutlineArrowRight /></i></a>
              </div>
              <hr />
            </div>

            <div className='col-md-6  mt-md-5 mt-3'>
              <div className='press-div mt-md-0 mt-4'>
                <h6 className='press-h6 text-secondary'>MEDIA/ July 1, 2022 /Cryptopolitan</h6>
                <h2 className='press-h2 py-3'>Burgeoning crypto start-up, GB finance launch in Ghana, Kenya</h2>
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