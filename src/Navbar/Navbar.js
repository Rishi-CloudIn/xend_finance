import React, { useState } from 'react';
import logo from '../Images/logo.svg';
import './Navbar.css';
import navBus from '../Images/business-nav.svg';
import navXend from '../Images/Xend.svg';
import { useNavigate, NavLink } from 'react-router-dom';
import navNews from '../Images/news.svg';
import navMed from '../Images/media-kit.svg';


function Navbar ()
{
  let navigate = useNavigate();
  const [ nav, setNav ] = useState( false );
  const [ color, setColor ] = useState( false );
  const [ innerNav, setInnerNav ] = useState( false );
  const [ innerNav1, setInnerNav1 ] = useState( false );
  const handleBusiness = () =>
  {
    navigate( '/TechBusiness' );
    setInnerNav( false );
  };

  const handleToken = () =>
  {
    navigate( '/TechBusiness' );
    setInnerNav( false );
  };


  const changeColor = () =>
  {
    if ( window.scrollY >= 100 )
    {
      setColor( true );
    } else
    {
      setColor( false );
    }
  };

  window.addEventListener( "scroll", changeColor );
  function handleClick ()
  {
    setNav( { clicked: !nav.clicked } );
  }

  function handleInner ()
  {
    setInnerNav( { clicked: !innerNav.clicked } );
  }

  function handleInner1 ()
  {
    setInnerNav1( { clicked: !innerNav1.clicked } );
  }
  return (
    <>
      <nav>
        <div className='container-fluid navbar-container'>
          <div className={color ? 'navbar-content-div navbar-bg d-flex flex-row justify-content-between py-3 px-sm-5' : 'navbar-content-div d-flex flex-row justify-content-between py-3 px-sm-5'}>
            <div className='navbar-logo'>
              <img src={logo} alt="img" />
            </div>

            <div className={!nav ? 'nav-ul-div' : 'nav-ul-div-hide my-auto'}>
              <ul className='nav-ul d-flex flex-md-row flex-column justify-content-around m-0 p-0 align-items-center'>
                <li className='nav-li me-4'>
                  <NavLink className='uc' to='/' onClick={() => setNav( !nav )}>Home</NavLink>
                </li>
                <li className='nav-li me-4'>
                  <NavLink className='uc' onClick={() => setInnerNav1( !innerNav1 )}>About</NavLink>
                </li>
                <div className={!innerNav1 ? 'nav-inner-ul-1' : 'nav-inner-ul-active-1'}>
                  <div className='nav-inner-li list-remove'>
                    <div className='d-flex align-items-start'>
                      <div className='nav-inner-img me-3'>
                        <img src={navNews} alt="" />
                      </div>
                      <div className=''>
                        <h6 className='nav-inner-h6 mb-0'>News & Announcements</h6>
                        <p className='nav-inner-p mb-0'>Read all of our press coverage and company news</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className='nav-inner-li list-remove'>
                    <div className='d-flex align-items-start'>
                      <div className='nav-inner-img me-3'>
                        <img src={navMed} alt="" />
                      </div>
                      <div className=''>
                        <h6 className='nav-inner-h6 mb-0'>Litepaper</h6>
                        <p className='nav-inner-p mb-0'>Read about our technology and vision</p>
                      </div>
                    </div>
                  </div>
                </div>
                <li className='nav-li me-4'>
                  <a href='void:' className='uc' >Products</a>
                </li>
                <li className='nav-li me-4'>
                  <a href='void:' className='uc' onClick={() => setInnerNav( !innerNav )}>Technology</a>
                </li>
                <div className={!innerNav ? 'nav-inner-ul' : 'nav-inner-ul-active'} >
                  <div className='nav-inner-li list-remove' onClick={handleBusiness} >
                    <div className='d-flex align-items-start'>
                      <div className='nav-inner-img me-3'>
                        <img src={navBus} alt="" />
                      </div>
                      <div className=''>
                        <h6 className='nav-inner-h6 mb-0'>Business</h6>
                        <p className='nav-inner-p mb-0'>Access DeFi protocols through your own website and gain 15% APY for your customers</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className='nav-inner-li list-remove mt-2' onClick={handleToken}>
                    <div className='d-flex align-items-start'>
                      <div className='nav-inner-img me-3'>
                        <img src={navXend} alt="" />
                      </div>
                      <div className=''>
                        <h6 className='nav-inner-h6 mb-0'>$XEND Token</h6>
                        <p className='nav-inner-p mb-0'>Our token has many different use cases and advantages</p>
                      </div>
                    </div>
                  </div>
                </div>
                <li className='nav-li me-4'>
                  <a href='void:' className='uc' >Faq</a>
                </li>
              </ul>
            </div>


            <div className={nav ? 'hamburger d-md-none' : 'hamburger d-md-none change'} onClick={() => setNav( !nav )}>
              <div className='bar1'></div>
              <div className='bar2'></div>
              <div className='bar3'></div>
            </div>
          </div>
        </div>
      </nav >
    </>
  );
}

export default Navbar;