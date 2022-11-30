import React from 'react';
import './TechBsolution.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
import wallet from '../../../Images/Tech-Business/sol/switch-wallet.svg';
import bridge from '../../../Images/Tech-Business/sol/xend-bridge.svg';
import icon from '../../../Images/Assets/xend-icon.svg';
import learn from '../../../Images/Assets/learn-img.svg';
import { AnimationOnScroll } from 'react-animation-on-scroll';


function TechBSolution ()
{
  return (
    <>
      <div className='container'>
        <div className='bus-sol-content-div py-5'>
          <h1 className='h1 fw-bold'>Business Solutions</h1>
          <h5 className='h5 text-secondary'>Complete tools to empower your business</h5>
          <div className='row'>
            <div className='col-md-6 col-12 p-3'>
              <AnimationOnScroll animateIn="animate__fadeIn" className='h-100'>
                <div className='card d-flex flex-row h-100'>
                  <div className='bus-sol-img-div me-3'>
                    <img src={wallet} alt="img" width={30} />
                  </div>
                  <div className='bus-sol-div d-flex flex-column justify-content-between'>
                    <div>
                      <h3 className='bus-sol-h3'>SwitchWallet</h3>
                      <p className='bus-sol-p'>SwitchWallet is a wallet service that allows developers to create and manage wallets for their users on EVM compatible blockchains as well as Bitcoin and Bitcoin Derivative blockchains.</p>
                    </div>
                    <div>
                      <a className='a-remove text-dark' href='void'>Learn More <i><AiOutlineArrowRight /></i></a>
                    </div>

                  </div>
                </div>
              </AnimationOnScroll>
            </div>

            <div className='col-md-6 col-12 p-3'>
              <AnimationOnScroll animateIn="animate__fadeIn" className='h-100'>
                <div className='card d-flex flex-row h-100'>
                  <div className='bus-sol-img-div me-3'>
                    <img src={icon} alt="img" width={40} />
                  </div>
                  <div className='bus-sol-div  d-flex flex-column justify-content-between'>
                    <div>
                      <h3 className='bus-sol-h3'>Xend Finance AutoYield SDK</h3>
                      <p className='bus-sol-p'>Our SDK enables other developers to build on the Xend Finance AutoYield protocols such as xVault and xAuto. We also have the SDK-UI which is a javascript plugin for developers that want to integrate Xend Finance directly with very little code. Our SDK makes it easy for non-blockchain developers to access DeFi.</p>
                    </div>
                    <div>
                      <a className='a-remove text-dark' href='void'>Learn More <i><AiOutlineArrowRight /></i></a>
                    </div>
                  </div>
                </div>
              </AnimationOnScroll>
            </div>

            <div className='col-md-6 col-12 p-3'>
              <AnimationOnScroll animateIn="animate__fadeIn" className='h-100'>
                <div className='card d-flex flex-row h-100'>
                  <div className='bus-sol-img-div me-3'>
                    <img src={bridge} alt="img" width={40} />
                  </div>
                  <div className='bus-sol-div  d-flex flex-column justify-content-between'>
                    <div>
                      <h3 className='bus-sol-h3'>XendBridge</h3>
                      <p className='bus-sol-p'>XendBridge enables users to convert their local currencies to crypto currencies and vice versa. The XendBridge comes as a library for android or iOS and also an API for developers to integrate into their web or mobile apps.</p>
                    </div>
                    <div>
                      <a className='a-remove text-dark' href='void'>Learn More <i><AiOutlineArrowRight /></i></a>
                    </div>
                  </div>
                </div>
              </AnimationOnScroll>
            </div>
          </div>

          <div className='py-5'>
            <div className='row'>
              <div className="col-lg-6 ">
                <div className='bus-sol-img-2 mx-md-0 mx-auto'>
                  <img src={learn} alt="" />
                </div>
              </div>

              <div className='col-lg-6 d-flex flex-row align-items-center '>
                <div className='bus-sol-div-2'>
                  <h2 className='bus-sol-h2-2'>Learn More</h2>
                  <p className='bus-sol-p-2 text-secondary py-4'>You and your organization can access the best of DeFi, Web3, and Blockchain through Xend Finance’s white-labeled technology on your own platform.</p>
                  <a className='a-remove bus-sol-btn-2' href='void:'>Go to Docs</a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default TechBSolution;