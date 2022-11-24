import React, { useState } from 'react';
import favicon from '../Images/xtend-favicon.png';
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
          <div className='navbar-content-div'>
            <div className='navbar-logo'>
              <img src={favicon} alt="img" />
            </div>

            <div className='nav-ul-div'>
              <ul className='nav-ul'>
                <li className='nav-li'>
                  <a href='void:' >Home</a>
                </li>
                <li className='nav-li'>
                  <a href='void:' >About</a>
                </li>
                <li className='nav-li'>
                  <a href='void:' >Products</a>
                </li>
                <li className='nav-li'>
                  <a href='void:' >Technology</a>
                </li>
                <li className='nav-li'>
                  <a href='void:' >Faq</a>
                </li>
              </ul>
            </div>


            <div className={nav ? 'hamburger change' : 'hamburger'} onClick={() => setNav( !nav )}>
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