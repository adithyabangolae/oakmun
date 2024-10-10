import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

import DropdownCom from './DropdownCom';
import DropdownCon from './DropdownCon';
import DropdownReg from './DropdownReg';





function NavBar() {
  const [click,setClick] = useState(false);
 
  const [conferenceDropdown, setConferenceDropdown] = useState(false); 
  const [committeesDropdown, setCommitteesDropdown] = useState(false);
  const [registerationsDropdown, setRegisterationsDropdown] = useState(false);
  

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true)
    }
  }

  const onConferenceMouseEnter = () => {
    if (window.innerWidth < 960) {
      setConferenceDropdown(false);
    } else {
      setConferenceDropdown(true);
    }
  };

  const onConferenceMouseLeave = () => {
    if (window.innerWidth < 960) {
      setConferenceDropdown(false);
    } else {
      setConferenceDropdown(false);
    }
  };

 
  const onCommitteesMouseEnter = () => {
    if (window.innerWidth < 960) {
      setCommitteesDropdown(false);
    } else {
      setCommitteesDropdown(true);
    }
  };

  const onCommitteesMouseLeave = () => {
    if (window.innerWidth < 960) {
      setCommitteesDropdown(false);
    } else {
      setCommitteesDropdown(false);
    }
  };


  const onRegisterationsMouseEnter = () => {
    if (window.innerWidth < 960) {
      setRegisterationsDropdown(false);
    } else {
      setRegisterationsDropdown(true);
    }
  };

  const onRegisterationsMouseLeave = () => {
    if (window.innerWidth < 960) {
      setRegisterationsDropdown(false);
    } else {
      setRegisterationsDropdown(false);
    }
  };




  window.addEventListener('resize',showButton)
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src="/assets/byk-CDQUNvFp.jpg" alt="Logo1"
           />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? 'fas fa-times': 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active': 'nav-menu'}> 
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                HOME
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/aboutus' className='nav-links' onClick={closeMobileMenu}>
                ABOUT US
                </Link>
              </li>
              <li className='nav-item' >
                <Link to='/resources' className='nav-links' onClick={closeMobileMenu}>
                 RESOURCES
                </Link>
             
              </li>
              <li className='nav-item'
              onMouseEnter={onCommitteesMouseEnter}
              onMouseLeave={onCommitteesMouseLeave}
>
                <Link  className='nav-links' onClick={closeMobileMenu}>
                COMMITTEES
                </Link>
                {committeesDropdown &&
                  <DropdownCom/>
                }
              </li>
              <li className='nav-item'
              onMouseEnter={onConferenceMouseEnter}
              onMouseLeave={onConferenceMouseLeave}
              >
                <Link  className='nav-links' onClick={closeMobileMenu}>
                CONFERENCE
                </Link>
                {conferenceDropdown &&
                  <DropdownCon/>
                }
                </li>
                <li className='nav-item'
                 onMouseEnter={onRegisterationsMouseEnter}
                 onMouseLeave={onRegisterationsMouseLeave}
                >
                <Link  className='nav-links' onClick={closeMobileMenu}>
                REGISTRATION
                </Link>
                {registerationsDropdown &&
                  <DropdownReg/>
                }
              </li>
              
            </ul>

        </div>
      
    </nav>
    </>
  )
}

export default NavBar
