import React from 'react';
import './NewsHome.css';
function NewsHome ()
{
  return (
    <>
      <div className='news-container container'>
        <div className='token-content-div pb-5 mb-5'>
          <h1 className='h1 text-center fw-bold w-sm-100 w-75 mx-auto'>Xend Media</h1>
          <p className='text-center py-3'>Press information, media kits, and the latest news about Xend can be found here.</p>
          <div className='d-flex justify-content-center'>
            <a href='void:' className='news-home-btn a-remove'>Download our Media Kit</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsHome;