import React from 'react';
import './Footer.css';
import logowhite from '../Images/Footer/logo-white.svg';
import tidal from '../Images/Footer/tidal.svg';


function Footer ()
{
  return (
    <>
      <div className='footer-container container-fluid bg-dark'>
        <div className='footer-content-div  p-5'>
          <div className='row'>
            <div className='col-md-3 col-12'>
              <div className='footer-col-1'>
                <div className='footer-img-div'>
                  <img src={logowhite} alt="img" />
                </div>
                <p className='footer-p mt-3'>
                  Get our Monthtly Newsletters
                </p>
                <button className='footer-btn my-4'>Subscribe</button>
                <p className='footer-p mb-0 mt-4'>Insured for up to $300 Million by</p>
                <img src={tidal} alt="" width='60%' className='mt-2' />
              </div>
            </div>


            <div className='col-md-3 col-12 ps-md-5 mt-md-0 mt-5'>
              <div className='footer-col-1'>
                <div className='footer-inner'>
                  <h5 className='footer-h5'>Technology</h5>
                  <div className='footer-ul mt-3'>
                    <p><a href='void:'>Business</a></p>
                    <p><a href='void:'>Developer</a></p>
                  </div>
                </div>

                <div className='footer-inner mt-4'>
                  <h5 className='footer-h5'>Quick Links</h5>
                  <div className='footer-ul mt-3'>
                    <p><a href='void:'>Hackathon 2021</a></p>

                    <p><a href='void:'>Leaderboard</a></p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-3 col-12 ps-md-5 mt-md-0 mt-5'>
              <div className='footer-col-1'>
                <div className='footer-inner'>
                  <h5 className='footer-h5'>Products</h5>
                  <div className='footer-ul mt-3'>
                    <p><a href='void:'>Xend Mobile</a></p>
                    <p><a href='void:'>Vault</a></p>
                    <p><a href='void:'>Staking</a></p>
                    <p><a href='void:'>SDK</a></p>
                    <p><a href='void:'>Lauchpad</a></p>
                    <p><a href='void:'>XEND Token</a></p>
                    <p><a href='void:'>X-Wallet</a></p>
                    <p><a href='void:'>XendBridge</a></p>
                    <p><a href='void:'>SwitchWallet</a></p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-3 col-12 ps-md-5 mt-md-0 mt-5'>
              <div className='footer-col-1'>
                <div className='footer-inner'>
                  <h5 className='footer-h5'>About</h5>
                  <div className='footer-ul mt-3'>
                    <p><a href='void:'>Litepaper</a></p>
                    <p><a href='void:'>Team</a></p>
                    <p><a href='void:'>Media</a></p>
                    <p><a href='void:'>FAQs</a></p>
                    <p><a href='void:'>BlogBlog</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='policy-div d-flex flex-md-row flex-column text-md-block text-center justify-content-center pt-5'>
            <div className='policy-1'>
              <p><a href='void:'>&#169; 2022 Xent Finance</a></p>
            </div>
            <div className='policy-1 mx-5'>
              <p><a href='void:'>Privacy Policy</a></p>
            </div>
            <div className='policy-1'>
              <p><a href='void:'>Terms and Conditions</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;