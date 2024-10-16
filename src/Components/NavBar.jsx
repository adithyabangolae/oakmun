import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import DropdownCom from './DropdownCom'; // For Committees
import DropdownCon from './DropdownCon'; // For Conference
import DropdownReg from './DropdownReg'; // For Registrations

function NavBar() {
  const [click, setClick] = useState(false);
  const [committeesDropdown, setCommitteesDropdown] = useState(false);
  const [conferenceDropdown, setConferenceDropdown] = useState(false);
  const [registrationsDropdown, setRegistrationsDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const closeDropdown = () => setClick(false);

 const toggleCommitteesDropdown = () => setCommitteesDropdown(!committeesDropdown);
  const toggleConferenceDropdown = () => setConferenceDropdown(!conferenceDropdown);
  const toggleRegistrationsDropdown = () => setRegistrationsDropdown(!registrationsDropdown);

  
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="/images/logo.jpg" alt="Logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutus" className="nav-links" onClick={closeMobileMenu}>
                ABOUT US
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/resources" className="nav-links" onClick={closeMobileMenu}>
                RESOURCES
              </Link>
            </li>

            
            <li className="nav-item"
              onClick={window.innerWidth <= 960 ? toggleCommitteesDropdown : null}
              onMouseEnter={window.innerWidth > 960 ? () => setCommitteesDropdown(true) : null}
              onMouseLeave={window.innerWidth > 960 ? () => setCommitteesDropdown(false) : null}>
              <Link className="nav-links">
                COMMITTEES
              </Link>
              {committeesDropdown && <DropdownCom closeMobileMenu={closeMobileMenu} />}
            </li>

            
            <li className="nav-item"
              onClick={window.innerWidth <= 960 ? toggleConferenceDropdown : null}
              onMouseEnter={window.innerWidth > 960 ? () => setConferenceDropdown(true) : null}
              onMouseLeave={window.innerWidth > 960 ? () => setConferenceDropdown(false) : null}>
              <Link className="nav-links">
                CONFERENCE
              </Link>
              {conferenceDropdown && <DropdownCon closeMobileMenu={closeMobileMenu} />}
            </li>

            
            <li className="nav-item"
              onClick={window.innerWidth <= 960 ? toggleRegistrationsDropdown : null}
              onMouseEnter={window.innerWidth > 960 ? () => setRegistrationsDropdown(true) : null}
              onMouseLeave={window.innerWidth > 960 ? () => setRegistrationsDropdown(false) : null}>
              <Link className="nav-links">
                REGISTRATION
              </Link>
              {registrationsDropdown && <DropdownReg closeMobileMenu={closeMobileMenu} />}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
