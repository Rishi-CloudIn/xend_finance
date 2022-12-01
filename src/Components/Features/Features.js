import React from 'react';
import './Features.css';
import fea1 from '../../Images/GB_Fin/high-interest.svg';
import global from '../../Images/GB_Fin/global.svg';
import flex from '../../Images/GB_Fin/flexible.svg';
import insurance from '../../Images/GB_Fin/insurance.svg';
import stable from '../../Images/GB_Fin/stable.svg';
import earn from '../../Images/GB_Fin/earn.svg';
import { AnimationOnScroll } from 'react-animation-on-scroll';


function Features ()
{
  return (
    <>
      <div className='container mt-5'>
        <div className='feature-content-div py-md-5'>
          <h1 className='here-h2 text-center linear-text'>Features</h1>
          <h5 className='here-h5 text-center'>Every tool you need to optimize your savings potential</h5>

          <div className='feature-div'>
            <div className='row'>

              <div className='col-sm-4 col-12 px-2 py-4'>
                <AnimationOnScroll animateIn="animate__bounceIn">
                  <div className='feature-card text-center'>
                    <div className='feature-img'>
                      <img src={fea1} alt='' />
                    </div>
                    <h4 className='feature-h4'>High Interest Rates
                    </h4>
                    <p className='feature-h6'>Up to 15% APY. Traditional interest rates offer 1 – 2% APY</p>
                  </div>
                </AnimationOnScroll>

              </div>

              <div className='col-sm-4 col-12 p-2 py-4'>
                <AnimationOnScroll animateIn="animate__bounceIn">

                  <div className='feature-card text-center'>
                    <div className='feature-img'>
                      <img src={global} alt='' />
                    </div>
                    <h4 className='feature-h4'>A Global Access
                    </h4>
                    <p className='feature-h6'>Unrestricted membership from around the world.</p>
                  </div>
                </AnimationOnScroll>
              </div>

              <div className='col-sm-4 col-12 p-2 py-4'>
                <AnimationOnScroll animateIn="animate__bounceIn">

                  <div className='feature-card text-center'>
                    <div className='feature-img'>
                      <img src={flex} alt='' />
                    </div>
                    <h4 className='feature-h4'>Flexible Loans
                    </h4>
                    <p className='feature-h6'>Access to loans with flexible repayment and terms.</p>
                  </div>
                </AnimationOnScroll>
              </div>

              <div className='col-sm-4 col-12 p-2 py-4'>
                <AnimationOnScroll animateIn="animate__bounceIn">

                  <div className='feature-card text-center'>
                    <div className='feature-img'>
                      <img src={insurance} alt='' />
                    </div>
                    <h4 className='feature-h4'>Insurance
                    </h4>
                    <p className='feature-h6'>Decentralized insurance to protect assets and investments.</p>
                  </div>
                </AnimationOnScroll>
              </div>

              <div className='col-sm-4 col-12 p-2 py-4'>

                <AnimationOnScroll animateIn="animate__bounceIn">
                  <div className='feature-card text-center'>
                    <div className='feature-img'>
                      <img src={stable} alt='' />
                    </div>
                    <h4 className='feature-h4'>Save in Stable Currencies
                    </h4>
                    <p className='feature-h6'>Fluctuating and devalued currency is a worry of the past.</p>
                  </div>
                </AnimationOnScroll>
              </div>

              <div className='col-sm-4 col-12 p-2 py-4'>
                <AnimationOnScroll animateIn="animate__bounceIn">
                  <div className='feature-card text-center'>
                    <div className='feature-img'>
                      <img src={earn} alt='' />
                    </div>
                    <h4 className='feature-h4'>Earn Interest and Tokens
                    </h4>
                    <p className='feature-h6'>Our secure savings earn multiple levels of interest and benefits.
                    </p>
                  </div>
                </AnimationOnScroll>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;