import React, { useState, useEffect } from 'react';
import './Navbar.css'; 
import ProfileSidebar from '../../components/ProfileSideBar/ProfileSideBar';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleOutsideClick(e) {
      if (isOpen && e.target.closest(".navbar") === null) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.body.addEventListener('click', handleOutsideClick);
    } else {
      document.body.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="menu-icon" onClick={toggleMenu}>
        <button>☰</button>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
      {isOpen && <ProfileSidebar className={`profile-sidebar ${isOpen ? 'open' : ''}`} />}
    </nav>
  );
}

export default Navbar;
