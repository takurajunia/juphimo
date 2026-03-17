import { useState } from 'react';
import '../../styles/components.css'; // Import the new CSS file

export default function Navbar() {
  // State to handle the mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State to handle the services dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="nav-container">
      <nav className="navbar">
        <a href="#home">
          <picture>
            <source
              type="image/webp"
              srcSet="/logo-nav-120.webp 1x, /logo-nav-240.webp 2x"
            />
            <img
              src="/logo-nav.png"
              alt="Juphimo Consultancy Logo"
              id="navbar-logo"
              width={240}
              height={240}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </a>
        
        {/* Mobile Menu Icon */}
        <div 
          className={`menu-toggle ${isMobileMenuOpen ? 'is-active' : ''}`} 
          id="mobile-menu" 
          onClick={toggleMobileMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" className="nav-links">Home</a></li>

          {/* Services Dropdown Item */}
          <li 
            className="nav-item-dropdown" 
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            onClick={toggleDropdown}
          >
            <span className="nav-links">
              Services <i className="fas fa-caret-down"></i>
            </span>
            
            {/* The Dropdown Menu */}
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><a href="#white-collar" className="dropdown-link">White-collar</a></li>
                <li><a href="#blue-collar" className="dropdown-link">Blue-collar</a></li>
                <li><a href="#domestic" className="dropdown-link">Domestic</a></li>
                <li><a href="#remote" className="dropdown-link">Remote</a></li>
              </ul>
            )}
          </li>

          <li><a href="#about" className="nav-links">About Us</a></li>

          <li><a href="#contact" className="nav-links">Contact Us</a></li>
          <li><a href="#signup" className="nav-links nav-links-btn">Sign Up</a></li>
        </ul>
      </nav>
    </div>
  );
}