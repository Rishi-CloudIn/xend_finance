import React from 'react';
import './community.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsTelegram, BsLinkedin, BsTwitter, BsYoutube, BsReddit, BsDiscord, BsMedium, BsFacebook, BsGithub } from 'react-icons/bs';
function Community ()
{
  return (
    <>
      <div className='container community-container py-5' >
        <div className='community-content-div'>
          <h1 className='journey-h1 text-center linear-text'>Join Our Communities</h1>
          <p className='journey-p text-center'>Be the first to learn about company updates, product launches, and giveaways.</p>
          <div className='row d-flex flex-wrap'>
            {/* <div className='col-xl-2 col-md-3 col-sm-4 col-6 p-2 '>
              <div className="dropdown  ">
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic" className=' mx-md-0 mx-auto'>
                    <i className='me-2'><BsTelegram /></i><span className='me-2'>Telegram</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="https://t.me/GBCryptoBank" className='fw-bold h5'>select Telegram Channel</Dropdown.Item>
                    <Dropdown.Item href="https://t.me/XendFinanceDevs" target='_blank'>Developer Group</Dropdown.Item>
                    <Dropdown.Item href="https://t.me/xendFinance" target='_blank'>Official Group</Dropdown.Item>
                    <Dropdown.Item href="https://t.me/XendAnnouncements" target='_blank'>Announcement Channel</Dropdown.Item>
                    <Dropdown.Item href="https://t.me/XendFinanceVietnam" target='_blank'>Vietnamese</Dropdown.Item>
                    <Dropdown.Item href="https://t.me/XendFinanceTurkish" target='_blank'>Turkish</Dropdown.Item>
                    <Dropdown.Item href="https://t.me/XendFinanceRussian" target='_blank'>Russian</Dropdown.Item>
                    <Dropdown.Item href="https://t.me/XendFinanceKorean" target='_blank'>Korean</Dropdown.Item>
                    <Dropdown.Item href="https://t.me/XendFinanceChinese" target='_blank'>Chinese</Dropdown.Item>
                    <Dropdown.Item href="https://t.me/XendFinanceSpanish" target='_blank'>Spanish</Dropdown.Item>
                    <Dropdown.Item href="https://t.me/XendFinanceFrench" target='_blank'>French</Dropdown.Item>
                    <Dropdown.Item href="https://t.me/XendFinancePersian" target='_blank'>Persian</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div> */}

            <div className='col-xl-2 col-md-3 col-sm-4 col-6 p-2 '>
              <div className="dropdown">
                <a className='btn-community mx-md-0 mx-auto btn a-remove' href='https://t.me/GBCryptoBank' target='_blank' rel='noreferrer'><i className='me-3'><BsTelegram /></i>Telegram</a>
              </div>
            </div>

            <div className='col-xl-2 col-md-3 col-sm-4 col-6 p-2 '>
              <div className="dropdown">
                <a className='btn-community mx-md-0 mx-auto btn a-remove' href='https://twitter.com/GBCryptoBank' target='_blank' rel='noreferrer'><i className='me-3'><BsTwitter /></i>Twitter</a>
              </div>
            </div>

            <div className='col-xl-2 col-md-3 col-sm-4 col-6  p-2'>
              <div className="dropdown">
                <a className='btn-community  mx-md-0 mx-auto btn a-remove' href='void:' target='_blank' rel='noreferrer' ><i className='me-3'><BsYoutube /></i>Youtube</a>
              </div>
            </div>

            <div className='col-xl-2 col-md-3 col-sm-4 col-6 p-2'>
              <div className="dropdown">
                <a className='btn-community   mx-md-0 mx-auto btn a-remove' href='https://www.reddit.com/u/GBCryptoBank' target='_blank' rel='noreferrer' ><i className='me-3'><BsReddit /></i>Reddit</a>
              </div>
            </div>

            <div className='col-xl-2 col-md-3 col-sm-4 col-6  p-2'>
              <div className="dropdown">
                <a className='btn-community  mx-md-0 mx-auto btn a-remove' href='https://discord.gg/cp3TPJFx' target='_blank' rel='noreferrer'><i className='me-3'><BsDiscord /></i>Discord</a>
              </div>
            </div>

            <div className='col-xl-2 col-md-3 col-sm-4 col-6  p-2'>
              <div className="dropdown">
                <a className='btn-community  mx-md-0 mx-auto btn a-remove' href='https://medium.com/@gbfincoin' target='_blank' rel='noreferrer'><i className='me-3'><BsMedium /></i>Medium</a>
              </div>
            </div>

            <div className='col-xl-2 col-md-3 col-sm-4 col-6 p-2'>
              <div className="dropdown">
                <a className='btn-community  mx-md-0 mx-auto btn a-remove' href='void:' target='_blank' rel='noreferrer'><i className='me-3'><BsFacebook /></i>Facebook</a>
              </div>
            </div>

            <div className='col-xl-2 col-md-3 col-sm-4 col-6 p-2'>
              <div className="dropdown">
                <a className='btn-community  mx-md-0 mx-auto btn a-remove' href='void:' target='_blank' rel='noreferrer'><i className='me-3'><BsGithub /></i>Github</a>
              </div>
            </div>

            <div className='col-xl-2 col-md-3 col-sm-4 col-6 p-2'>
              <div className="dropdown">
                <a className='btn-community  mx-md-0 mx-auto btn a-remove' href='https://www.linkedin.com/in/gb-finance-553950258' target='_blank' rel='noreferrer'><i className='me-3'><BsLinkedin /></i>LinkedIn</a>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
}

export default Community;