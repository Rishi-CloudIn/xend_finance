import React, { useState } from 'react';
import logo from '../Images/logo.svg';
import './Navbar.css';
function Navbar ()
{

  const [ nav, setNav ] = useState( false );
  const [ color, setColor ] = useState( false );

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
                  <a href='void:' className='uc'>Home</a>
                </li>
                <li className='nav-li me-4'>
                  <a href='void:' className='uc'>About</a>
                </li>
                <li className='nav-li me-4'>
                  <a href='void:' className='uc' >Products</a>
                </li>
                <li className='nav-li me-4'>
                  <a href='void:' className='uc'>Technology</a>
                </li>
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
      </nav>
    </>
  );
}

export default Navbar;