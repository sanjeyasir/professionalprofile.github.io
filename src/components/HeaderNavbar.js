import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/HeaderNavbar.css';
import icon from '../assets/console.png';

const HeaderNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavLinkClick = (path) => {
    navigate(path);
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/sanjey-jonathan-asirvatham-9649b6148/', '_blank');
 };

  return (
    <div className="navbar">
      <div className="nav-links">
        <a
          className={location.pathname === '/professionalprofile.github.io' ? 'active' : ''}
          onClick={() => handleNavLinkClick('/')}
        >
          Home
        </a>
        <a
          className={location.pathname === '/professionalprofile.github.io/projects' ? 'active' : ''}
          onClick={() => handleNavLinkClick('/projects')}
        >
          Projects
        </a>
        {/* <a
          className={location.pathname === '/professionalprofile.github.io/experience' ? 'active' : ''}
          onClick={() => handleNavLinkClick('/experience')}
        >
          Experience
        </a> */}
      </div>
      <div className="navbar-icon">
        <a
          onClick={handleLinkedInClick}
        >
          <img src={icon} alt="Console Icon" />
        </a>
       
      </div>
    </div>
  );
};

export default HeaderNavbar;

