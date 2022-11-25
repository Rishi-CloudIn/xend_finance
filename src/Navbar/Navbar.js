import React, { useState } from 'react';
import favicon from '../Images/xtend-favicon.png';
import logo from '../Images/logo.svg';
import './Navbar.css';
function Navbar ()
{

  const [ nav, setNav ] = useState( false );

  function handleClick ()
  {
    setNav( { clicked: !nav.clicked } );
  }
  return (
    <>
      <nav>
        <div className='container-fluid navbar-container'>
          <div className='navbar-content-div d-flex flex-row justify-content-between py-4 px-sm-5'>
            <div className='navbar-logo'>
              <img src={logo} alt="img" />
            </div>

            <div className={!nav ? 'nav-ul-div' : 'nav-ul-div-hide'}>
              <ul className='nav-ul d-flex flex-md-row flex-column justify-content-around m-0 p-0'>
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