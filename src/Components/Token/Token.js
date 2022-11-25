import React from 'react';
import { MdContentCopy } from 'react-icons/md';
import { HiExternalLink } from 'react-icons/hi';
import bscToken from '../../Images/Token/bsc.svg';
import ethereum from '../../Images/Token/ethereum.svg';
import polygon from '../../Images/Token/polygon.svg';
import cryptoimg from '../../Images/Token/crypto_img.jpg';
import coinImg from '../../Images/Token/coin-img.png';
import './Token.css';
function Token ()
{
  return (
    <>
      <div className='container py-5'>
        <div className='token-content-div'>
          <div className='row'>

            <div className='col-lg-6 col-12'>
              <div className='token-div-1'>
                <h1 className='token-h2'>$XEND Token</h1>
                <p className='token-h6 mt-2 mb-4'>The Xend token ($XEND) powers a decentralized savings and cross-chain high yield aggregator protocol. The $XEND tokens also generate interest for the users as they hold on to the tokens.</p>
                <h5 className=' token-h5'>Xend Finance Tokens have been issued on below public chains:</h5>

                <div className='token-copy-div'>
                  <div className='token-1 d-flex align-items-center justify-content-around mt-4'>
                    <div className='token-img-div '>
                      <img src={bscToken} alt="" />
                    </div>
                    <div className='token-text-sec mx-4 overflow-hidden'>
                      <h4 className='token-h4'>Binance Smart Chain</h4>
                      <p className='token-p'>0x4a080377f83d669d7bb83b3184a8a5e61b500608
                      </p>
                    </div>
                    <div className='copy-icon'><i className='fs-2'><MdContentCopy /></i></div>
                  </div>

                  <div className='token-1 d-flex align-items-center mt-4 justify-content-around'>
                    <div className='token-img-div '>
                      <img src={ethereum} alt="" />
                    </div>
                    <div className='token-text-sec mx-4 overflow-hidden'>
                      <h4 className='token-h4'>Ethereum</h4>
                      <p className='token-p'>0xE4CFE9eAa8Cdb0942A80B7bC68fD8Ab0F6D44903
                      </p>
                    </div>
                    <div className='copy-icon'><i className='fs-2'><MdContentCopy /></i></div>
                  </div>

                  <div className='token-1 d-flex align-items-center mt-4 justify-content-around'>
                    <div className='token-img-div'>
                      <img src={polygon} alt="" />
                    </div>
                    <div className='token-text-sec mx-4 overflow-hidden'>
                      <h4 className='token-h4'>Polygon Eco Chain</h4>
                      <p className='token-p'>0x86775d0B80B3df266AF5377dB34Ba8f318d715ec
                      </p>
                    </div>
                    <div className='copy-icon'><i className='fs-2'><MdContentCopy /></i></div>
                  </div>

                </div>
              </div>
            </div>


            <div className='col-lg-6 col-12'>
              <div className='token-crypto-img'>
                <img src={cryptoimg} alt="" />
              </div>
            </div>
          </div>


        </div>
      </div>


      <div className='container text-center mt-5'>
        <h1 className='here-h1'>Get $XEND Here</h1>
        <h5 className='here-h5 my-3'>Exchanges that offers $XEND Tokens</h5>
        <button className='here-btn'><span className='me-2'><img src={coinImg} alt='img' className='here-img' /></span>pancakeswap<i className='ms-2'><HiExternalLink /></i></button>
      </div>
    </>
  );
}

export default Token; 