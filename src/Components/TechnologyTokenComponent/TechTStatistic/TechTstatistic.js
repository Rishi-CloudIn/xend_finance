import React from 'react';
import './TechTStatistic.css';
import { MdContentCopy } from 'react-icons/md';
import Binance from '../../../Images/Tech-Token/getstart/binance-smart-chain.svg';
import Ethereum from '../../../Images/Tech-Token/getstart/Ethereum-Icon.svg';
import huobi from '../../../Images/Tech-Token/getstart/huobi-eco-chain.svg';
import polygon from '../../../Images/Tech-Token/getstart/polygon-eco-chain.svg';
import Swal from 'sweetalert2';
import { HiExternalLink } from 'react-icons/hi';


import coinImg from '../../../Images/Token/coin-img.png';
import model from '../../../Images/Assets/Xend-Destribution-Model.svg';





function TechTStatistic ()
{



  const Toast = Swal.mixin( {
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: ( toast ) =>
    {
      toast.addEventListener( 'mouseenter', Swal.stopTimer );
      toast.addEventListener( 'mouseleave', Swal.resumeTimer );
    }
  } );


  function copy1 ()
  {
    navigator.clipboard.writeText( '0x4a0803...84a8a5e61b500608' );

    Toast.fire( {
      icon: 'success',
      title: 'Code Copied Successfully'
    } );
  }

  // function copy2 ()
  // {
  //   navigator.clipboard.writeText( '0x86775d...B34Ba8f318d715ec' );
  //   Toast.fire( {
  //     icon: 'success',
  //     title: 'Code Copied Successfully'
  //   } );

  // }


  // function copy3 ()
  // {
  //   navigator.clipboard.writeText( '0xE4CFE9...68fD8Ab0F6D44903' );
  //   Toast.fire( {
  //     icon: 'success',
  //     title: 'Code Copied Successfully'
  //   } );
  // }

  // function copy4 ()
  // {
  //   navigator.clipboard.writeText( '0xA64932...B4378deAe68CE23F' );
  //   Toast.fire( {
  //     icon: 'success',
  //     title: 'Code Copied Successfully'
  //   } );
  // }
  return (
    <>
      <div className='container py-5 '>
        <h1 className='h1 fw-bold text-center linear-text py-4'>$GB Token Price Statistics</h1>
        <div className='statis-content-div table-responsive-md px-sm-0 px-2'>
          <table className='table table-light table-bordered '>
            <tbody>
              <tr className='col-4'>
                <td>
                  <p className='text-secondary'>GB Token Price</p>
                  <h6 className='h6'>$0.03296917735545847</h6>
                </td>
                <td className='col-4'>
                  <p className='text-secondary'>24 Hour Trading Volume</p>
                  <h6 className='h6'>$500,480.53831953</h6>
                </td>
                <td className='col-4'>
                  <p className='text-secondary'>24 Hour Change %</p>
                  <h6 className='h6'>2.25182521 %</h6>
                </td>
              </tr>

              <tr>
                <td className='col-4'>
                  <p className='text-secondary'>Market Cap</p>
                  <h6 className='h6'>$3925,318.479683468</h6>
                </td>
                <td className='col-4'>
                  <p className='text-secondary'>Circulating Supply</p>
                  <h6 className='h6'>119,060,249.4373 GB</h6>
                </td>
                <td className='col-4'>
                  <p className='text-secondary'>Total Volume</p>
                  <h6 className='h6'>$200,000,000</h6>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='py-5 px-sm-0 px-2'>
          <div className='card bus-parter-card'>
            <div className='bus-card-inner py-4'>
              <h1 className='bus-card-partner-h1'>GB Finance Tokens have been issued on below public chains</h1>

              <div className='row'>
                <div className='col-lg-6 col-12 p-3'>
                  <div className='token-copy-card d-flex flex-sm-row flex-column align-items-center justify-content-between w-75 mx-auto mt-sm-0 mt-4'>
                    <img src={Binance} alt="" />
                    <div className='mx-2 my-sm-0 my-2'>
                      <h6 className='text-light text-sm-start text-center'>Binance Smart Chain</h6>
                      <p className='text-white mb-0 text-sm-start text-center'>0x4a0803...84a8a5e61b500608</p>
                    </div>
                    <div>
                      <div><i className='fs-2 text-white cursor-pointer' onClick={() => copy1()}><MdContentCopy /></i></div>
                    </div>
                  </div>
                </div>

                <div className='col-lg-6 col-12 p-3'>
                  <div className='token-copy-card d-flex flex-sm-row flex-column align-items-center justify-content-start w-75 mx-auto mt-sm-0 mt-4'>
                    <img src={polygon} alt="" />
                    {/* <div className='mx-2 my-sm-0 my-2'>
                      <h6 className='text-light text-sm-start text-center'>Polygon Eco Chain</h6>
                      <p className='text-white mb-0 text-sm-start text-center'>0x86775d...B34Ba8f318d715ec</p>
                    </div>
                    <div>
                      <div><i className='fs-2 text-white cursor-pointer' onClick={() => copy2()}><MdContentCopy /></i></div>
                    </div> */}
                    <h2 className='h4 text-secondary fw-bold  ms-3 mt-md-1 mt-3'>Coming Soon.....</h2>
                  </div>
                </div>

                <div className='col-lg-6 col-12 p-3'>
                  <div className='token-copy-card d-flex flex-sm-row flex-column align-items-center justify-content-start w-75 mx-auto mt-sm-0 mt-4'>
                    <img src={Ethereum} alt="" />
                    {/*<div className='mx-2 my-sm-0 my-2'>
                      <h6 className='text-light text-sm-start text-center'>Ethereum</h6>
                      <p className='text-white mb-0 text-sm-start text-center' onClick={() => copy3()}>0xE4CFE9...68fD8Ab0F6D44903</p>
                    </div>
                    <div>
                      <div><i className='fs-2 text-white cursor-pointer'><MdContentCopy /></i></div>
                    </div> */}
                    <h2 className='h4 text-secondary fw-bold  ms-3 mt-md-1 mt-3'>Coming Soon.....</h2>
                  </div>
                </div>

                <div className='col-lg-6 col-12 p-3'>
                  <div className='token-copy-card d-flex flex-sm-row flex-column align-items-center justify-content-start w-75 mx-auto mt-sm-0 mt-4'>
                    <img src={huobi} alt="" />
                    {/* <div className='mx-2 my-sm-0 my-2'>
                      <h6 className='text-light text-sm-start text-center'>Huobi Eco Chain</h6>
                      <p className='text-white mb-0 text-sm-start text-center'>0xA64932...B4378deAe68CE23F</p>
                    </div>
                    <div>
                      <div><i className='fs-2 text-white cursor-pointer' onClick={() => copy4()}><MdContentCopy /></i></div>
                    </div> */}
                    <h2 className='h4 text-secondary fw-bold ms-3 mt-md-1 mt-3'>Coming Soon.....</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container text-center mt-5'>
          <h1 className='here-h1 linear-text'>Get $GB Here</h1>
          <h5 className='here-h5 my-3'>Exchanges that offers $GB Tokens</h5>
          <div>
            <a href='void:' className='m-2'>
              <button className='here-btn'><span className='me-2'><img src={coinImg} alt='img' className='here-img' /></span>Gate.io<i className='ms-2'><HiExternalLink /></i></button>
            </a>
            <a href='void:' className='m-2'>
              <button className='here-btn'><span className='me-2'><img src={coinImg} alt='img' className='here-img' /></span>Ascendex<i className='ms-2'><HiExternalLink /></i></button>
            </a>
            <a href='void:' className='m-2'>
              <button className='here-btn'><span className='me-2'><img src={coinImg} alt='img' className='here-img' /></span>Uniswap<i className='ms-2'><HiExternalLink /></i></button>
            </a>
            <a href='void:' className='m-2'>
              <button className='here-btn'><span className='me-2'><img src={coinImg} alt='img' className='here-img' /></span>pancakeswap<i className='ms-2'><HiExternalLink /></i></button>
            </a>

          </div>

        </div>

        <div className='container text-center mt-5'>
          <div className='tech-mod-img-div'>
            <img src={model} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default TechTStatistic;