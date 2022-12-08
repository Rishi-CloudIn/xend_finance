import React, { useState, useRef, useEffect } from 'react';
import logo from '../Images/GB_Fin/GFIN_Logo.svg';
import './Navbar.css';
import navBus from '../Images/business-nav.svg';
import navXend from '../Images/Xend.svg';
import { useNavigate, NavLink } from 'react-router-dom';
import navNews from '../Images/news.svg';
import navMed from '../Images/media-kit.svg';
import { Link } from 'react-scroll';

function Navbar ()
{

  const wrapperRef = useRef();
  let navigate = useNavigate();
  const [ nav, setNav ] = useState( true );
  const [ color, setColor ] = useState( false );
  const [ innerNav, setInnerNav ] = useState( false );
  const [ innerNav1, setInnerNav1 ] = useState( false );

  const handleBusiness = () =>
  {
    navigate( '/Business' );
    setInnerNav( false );
    setNav( !nav );
  };

  const handleToken = () =>
  {
    navigate( '/GB_Token' );
    setInnerNav( false );
    setNav( !nav );
  };

  const handleNews = () =>
  {
    navigate( '/News_And_Announcements' );
    setInnerNav1( false );
    setNav( !nav );
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

  // outside click hide

  const handleHideDropdown = ( event ) =>
  {
    if ( event.key === 'Escape' )
    {
      setInnerNav1( false );
      setInnerNav( false );
    }
  };
  const handleClickOutside = ( event ) =>
  {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains( event.target )
    )
    {
      setInnerNav( false );
      setInnerNav1( false );
      // setNav( !nav );
    }
  };


  useEffect( () =>
  {
    document.addEventListener( 'keydown', handleHideDropdown, true );
    document.addEventListener( 'click', handleClickOutside, true );
    return () =>
    {
      document.removeEventListener( 'keydown', handleHideDropdown, true );
      document.removeEventListener( 'click', handleClickOutside, true );
    };
  } );

  // handleClickOutside();

  window.addEventListener( "scroll", changeColor );
  // eslint-disable-next-line no-unused-vars
  function handleClick ()
  {
    setNav( { clicked: !nav.clicked } );
  }
  // eslint-disable-next-line no-unused-vars
  function handleInner ()
  {
    setInnerNav( { clicked: !innerNav.clicked } );
  }
  // eslint-disable-next-line no-unused-vars
  function handleInner1 ()
  {
    setInnerNav1( { clicked: !innerNav1.clicked } );
  }



  return (
    <>
      <nav >
        <div className='container-fluid navbar-container px-0' ref={wrapperRef}>
          <div className={color ? 'navbar-content-div navbar-bg d-flex flex-row justify-content-between py-3 ' : 'navbar-content-div d-flex flex-row justify-content-between py-3 '}>
            <div className='navbar-logo' >
              <img src={logo} alt="img" />
            </div>

            <div className={!nav ? 'nav-ul-div my-auto' : 'nav-ul-div-hide my-auto'}>
              <ul className='nav-ul d-flex flex-md-row flex-column justify-content-around m-0 p-0 align-items-center'>
                <li className='nav-li me-4'>
                  <NavLink className='uc' onClick={() =>
                  {
                    setNav( !nav );
                  }}>Home</NavLink>
                </li>
                <li className='nav-li me-4'>
                  <NavLink className='uc' onClick={() => setInnerNav1( !innerNav1 )}>About</NavLink>
                </li>
                <div className={!innerNav1 ? 'nav-inner-ul-1' : 'nav-inner-ul-active-1'}>
                  <div className='nav-inner-li list-remove' onClick={handleNews}>
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
                  <div className='nav-inner-li list-remove' onClick={handleNews}>
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
                {/* <li className='nav-li me-4'>
                  <a href='void:' className='uc' >Products</a>
                </li> */}
                <li className='nav-li me-4'>
                  <NavLink className='uc' onClick={() => setInnerNav( !innerNav )}>Technology</NavLink >
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
                        <h6 className='nav-inner-h6 mb-0'>$GB Token</h6>
                        <p className='nav-inner-p mb-0'>Our token has many different use cases and advantages</p>
                      </div>
                    </div>
                  </div>
                </div>
                <li className='nav-li me-4'>
                  <Link
                    activeClass="active"
                    to="Contact"
                    spy={true}
                    smooth={true}
                    duration={500} className='uc cursor-pointer' onClick={() => setNav( !nav )} >Contact</Link>
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