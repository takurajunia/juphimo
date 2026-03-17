import { useState, useEffect } from 'react';
import ServiceCategoryPageModern from './pages/ServiceCategoryPage';
import HomeHero from './components/sections/Hero';
import HomeServicesGallery from './components/sections/ServicesGallery';

// --- Navbar Component ---
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <>
      <style>{`
        /* --- Navbar Styles --- */
        .nav-container {
          width: 100%;
          position: sticky;
          top: 0;
          z-index: 999;
          background: rgba(11, 12, 11, 0.94);
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(10px);
        }

        .navbar {
          display: flex;
          align-items: center;
          min-height: 84px;
          width: min(94%, 1320px);
          margin: 0 auto;
          gap: 1.8rem;
          position: relative;
        }

        .navbar > a {
          display: inline-flex;
          align-items: center;
          flex-shrink: 0;
        }

        #navbar-logo {
          cursor: pointer;
          height: 58px;
          width: auto;
          display: block;
        }

        .nav-menu {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          list-style: none;
          margin: 0 0 0 auto;
          padding: 0;
          gap: clamp(0.75rem, 1.6vw, 1.35rem);
          white-space: nowrap;
        }

        .nav-menu > li {
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .nav-links {
          color: #fff;
          text-decoration: none;
          transition: color 0.2s ease-out;
          cursor: pointer;
          font-size: 0.94rem;
          font-weight: 600;
          padding: 0.35rem 0.15rem;
          position: relative;
        }

        .nav-links::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -6px;
          height: 2px;
          background: var(--blue, #007bff);
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.25s ease;
        }

        .nav-links:hover {
          color: #d8ebff;
        }

        .nav-links:hover::after {
          transform: scaleX(1);
        }
        
        /* --- Dropdown Styles --- */
        .nav-item-dropdown {
          position: relative;
          cursor: pointer;
          user-select: none;
        }

        .nav-item-dropdown::after {
          content: '';
          position: absolute;
          top: 100%;
          left: -14px;
          right: -14px;
          height: 14px;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          margin-top: 0.35rem;
          left: 50%;
          transform: translateX(-50%);
          background-color: #101313;
          list-style: none;
          min-width: 210px;
          padding: 0.45rem;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 14px 34px rgba(0, 0, 0, 0.38);
          display: flex;
          flex-direction: column;
          text-align: left;
          z-index: 20;
        }

        .dropdown-link {
          color: var(--white, #fff);
          padding: 0.7rem 0.8rem;
          display: block;
          transition: background 0.2s;
          font-size: 0.92rem;
          text-decoration: none;
          border-radius: 8px;
        }

        .dropdown-link:hover {
          background-color: rgba(0, 123, 255, 0.2);
        }
        
        /* --- Mobile Menu Toggle --- */
        .menu-toggle {
          display: none;
        }

        .menu-toggle .bar {
          width: 25px;
          height: 3px;
          margin: 5px auto;
          transition: all 0.3s ease-in-out;
          background: var(--white, #fff);
          display: block;
          border-radius: 4px;
        }
        
        /* --- Mobile Responsive --- */
        @media screen and (max-width: 900px) {
            .navbar {
              min-height: 78px;
              width: min(94%, 1320px);
            }

            .menu-toggle {
              display: block;
              cursor: pointer;
              margin-left: auto;
            }

            .nav-menu {
              flex-direction: column;
              align-items: stretch;
              margin-left: 0;
              gap: 0.3rem;
              position: absolute;
              top: 100%;
              left: 0;
              right: 0;
              max-width: none;
              background: #0b0c0b;
              border-bottom: 1px solid rgba(255, 255, 255, 0.15);
              padding: 1rem 5% 1.4rem;
              opacity: 0;
              transform: translateY(-8px);
              pointer-events: none;
              transition: all 0.35s ease;
              z-index: 99;
            }

            .nav-menu.active {
              opacity: 1;
              transform: translateY(0);
              pointer-events: auto;
            }

            .nav-menu > li {
              justify-content: flex-start;
            }

            .nav-links {
              display: block;
              width: 100%;
              padding: 0.82rem 0.2rem;
            }

            .nav-links::after {
              left: 0;
              right: auto;
              width: 60px;
            }

            .dropdown-menu {
              position: static;
              transform: none;
              left: auto;
              min-width: 0;
              width: 100%;
              margin-top: 0.35rem;
              box-shadow: none;
              background-color: rgba(255, 255, 255, 0.04);
            }

            .nav-item-dropdown::after {
              display: none;
            }

            .menu-toggle.is-active .bar:nth-child(2) { opacity: 0; }
            .menu-toggle.is-active .bar:nth-child(1) { transform: translateY(8px) rotate(45deg); }
            .menu-toggle.is-active .bar:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }
        }
      `}</style>
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
          
          <div 
            className={`menu-toggle ${isMobileMenuOpen ? 'is-active' : ''}`} 
            onClick={toggleMobileMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" className="nav-links" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#about" className="nav-links" onClick={() => setIsMobileMenuOpen(false)}>About Us</a></li>
            
            <li 
              className="nav-item-dropdown" 
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
              onClick={toggleDropdown}
            >
              <span className="nav-links">
                Services <i className="fas fa-caret-down"></i>
              </span>
              
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li><a href="#white-collar" className="dropdown-link" onClick={() => setIsMobileMenuOpen(false)}>White-collar</a></li>
                  <li><a href="#blue-collar" className="dropdown-link" onClick={() => setIsMobileMenuOpen(false)}>Blue-collar</a></li>
                  <li><a href="#domestic" className="dropdown-link" onClick={() => setIsMobileMenuOpen(false)}>Domestic</a></li>
                  <li><a href="#remote" className="dropdown-link" onClick={() => setIsMobileMenuOpen(false)}>Remote</a></li>
                </ul>
              )}
            </li>

            <li><a href="#contact" className="nav-links" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
}

// --- Hero Component ---
function Hero() {
  return <HomeHero />;
}

// --- Services Gallery Component ---
function ServicesGallery() {
  return <HomeServicesGallery />;
}

// --- About Section Component ---
function AboutSection() {
  return (
    <>
      <style>{`
        /* --- About Section Styles --- */
        .about-section { background-color: var(--darkblack, #0b0c0b); color: var(--white, #fff); padding: 5rem 1.5rem; width: 100%; min-height: 80vh; }
        .about-container { max-width: 1200px; margin: 0 auto; text-align: center; }
        .about-title { font-size: 2.5rem; margin-bottom: 1.5rem; position: relative; display: inline-block; }
        .about-title::after { content: ''; position: absolute; bottom: -10px; left: 50%; transform: translateX(-50%); width: 80px; height: 4px; background-color: var(--blue, #007bff); border-radius: 2px; }
        .about-description { font-size: 1.2rem; line-height: 1.6; max-width: 800px; margin: 0 auto 2rem auto; opacity: 0.95; }
        .about-mission { font-size: 1.1rem; font-style: italic; max-width: 700px; margin: 2rem auto 0; padding-top: 1.5rem; border-top: 1px solid rgba(255, 255, 255, 0.2); }
      `}</style>
      <section className="about-section">
        <div className="about-container">
          <h2 className="about-title">About Us</h2>
          <div className="about-content">
            <p className="about-description">
              <strong>Juphimo Consultancy</strong> connects employers with the most experienced and reliable workers in the market. 
              Whether you need temporary or permanent staff, we help you find the right fit. We also provide professional training 
              to workers, ensuring they meet the highest standards.
            </p>

            <p className="about-mission">
              We are dedicated to excellence, reliability, and customer satisfaction. 
              Let us help you build a stronger workforce.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

// --- Contact Page Component ---
function ContactPage() {
  return (
    <>
      <style>{`
        /* --- Contact Page Styles (Socials & Location) --- */
        .contact-page-wrapper { background-color: var(--darkblack, #0b0c0b); min-height: 80vh; }
        .contact-section { padding: 60px 20px; text-align: center; }
        .contact-section h2 { font-size: 2.5rem; color: #fff; margin-bottom: 20px; }
        .contact-section p { font-size: 1.2rem; color: #fff; margin-bottom: 30px; }
        .social-icons { display: flex; justify-content: center; gap: 25px; }
        .social-icons a { display: inline-flex; align-items: center; justify-content: center; width: 70px; height: 70px; background-color: #4267B2; color: white; border-radius: 50%; font-size: 36px; transition: all 0.3s ease; text-decoration: none; }
        .social-icons a:hover { transform: scale(1.1); background-color: #365899; }
        .social-icons a[aria-label="Instagram"] { background-color: #E4405F; }
        .social-icons a[aria-label="Instagram"]:hover { background-color: #C13584; }
        .social-icons a[aria-label="WhatsApp chat"] { background-color: #25D366; }
        .social-icons a[aria-label="WhatsApp chat"]:hover { background-color: #128C7E; }
        
        .location-section { padding: 80px 20px; background-color: var(--blue, #007bff); color: white; }
        .location-container { max-width: 1200px; margin: 0 auto; }
        .location-header { text-align: center; margin-bottom: 40px; }
        .location-header h2 { font-size: 2.5rem; margin-bottom: 20px; position: relative; display: inline-block; color: white; }
        .location-header h2:after { content: ''; position: absolute; bottom: -10px; left: 50%; transform: translateX(-50%); width: 80px; height: 4px; background: var(--darkblack, #0b0c0b); border-radius: 2px; }
        .location-address, .location-hours { font-size: 1.2rem; margin-bottom: 10px; color: #f8f9fa; }
        .location-address i, .location-hours i { color: var(--darkblack, #0b0c0b); margin-right: 10px; }
        .map-container { width: 100%; margin: 30px 0; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3); border: 4px solid rgba(255, 255, 255, 0.1); }
        .map-container iframe { display: block; width: 100%; }
        .location-footer { display: flex; justify-content: center; gap: 30px; margin-top: 30px; flex-wrap: wrap; }
        .directions-btn, .call-btn { display: inline-flex; align-items: center; justify-content: center; gap: 12px; padding: 16px 36px; border-radius: 50px; font-size: 1.1rem; font-weight: 600; text-decoration: none; transition: all 0.3s ease; cursor: pointer; }
        .directions-btn { background-color: var(--darkblack, #0b0c0b); color: white; border: none; }
        .directions-btn:hover { background-color: #f02b1d; transform: translateY(-3px); }
        .call-btn { background-color: transparent; color: white; border: 2px solid var(--darkblack, #0b0c0b); }
        .call-btn:hover { background-color: #f02b1d; border-color: #f02b1d; transform: translateY(-3px); }
      `}</style>
      <div className="contact-page-wrapper">
        <div className="contact-section">
          <div className="location-container">
            <h2>Contact Us</h2>
            <p>Follow us on Facebook and Instagram for updates and offers, or chat with us directly on WhatsApp!</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/share/1Fxa8Wrini/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/housemaids_hub_zimbabwe" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://wa.me/263782326442" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp chat">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="location-section">
          <div className="location-container">
            <div className="location-header">
              <h2>Visit Our Offices</h2>
              <p className="location-address"><i className="fa-solid fa-location-dot"></i> 6A Piers Road, Borrowdale, Harare, Zimbabwe</p>
              <p className="location-hours"><i className="fa-solid fa-clock"></i> Monday – Friday: 8:00 AM – 5:00 PM | Saturday: 8:00 AM – 1:00 PM</p>
            </div>
            
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps?q=6A+Piers+Road,+Borrowdale,+Harare,+Zimbabwe&output=embed"
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="J Consultancy location"
              ></iframe>
            </div>
            
            <div className="location-footer">
              <a href="https://www.google.com/maps/dir/?api=1&destination=6A+Piers+Road,+Borrowdale,+Harare,+Zimbabwe" target="_blank" rel="noopener noreferrer" className="directions-btn">
                <i className="fa-solid fa-map-pin"></i> Get Directions
              </a>
              <a href="tel:+263782326442" className="call-btn">
                <i className="fa-solid fa-phone"></i> Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// --- Footer Component ---
function Footer() {
  return (
    <>
      <style>{`
        /* --- Footer Styles --- */
        .footer { background: #0c0c0c; color: #f0f0f0; padding: 60px 0 0; }
        .footer-container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .footer-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px; margin-bottom: 40px; }
        .footer-col { display: flex; flex-direction: column; }
        .footer-title { color: white; font-size: 1.3rem; margin-bottom: 25px; position: relative; padding-bottom: 10px; }
        .footer-title::after { content: ''; position: absolute; left: 0; bottom: 0; width: 50px; height: 3px; background: var(--blue, #007bff); border-radius: 2px; }
        .footer-about { line-height: 1.7; margin-bottom: 20px; color: #ccc; font-size: 0.95rem; }
        .footer-contact-item { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; color: #ddd; font-size: 0.95rem; }
        .footer-contact-item i { width: 16px; color: var(--blue, #007bff); font-size: 1rem; }
        .footer-links { list-style: none; padding: 0; margin: 0; }
        .footer-links li { margin-bottom: 12px; }
        .footer-links a { color: #ddd; transition: color 0.3s, transform 0.2s; display: inline-flex; align-items: center; gap: 8px; font-size: 0.95rem; text-decoration: none;}
        .footer-links a i { font-size: 0.75rem; color: var(--blue, #007bff); }
        .footer-links a:hover { color: var(--blue, #007bff); transform: translateX(5px); }
        .footer-hours p { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; color: #ddd; font-size: 0.95rem; }
        .footer-hours i { width: 16px; color: var(--blue, #007bff); }
        .social-links { display: flex; gap: 15px; margin-top: 15px; }
        .social-links a { display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; background-color: rgba(255, 255, 255, 0.1); border-radius: 50%; color: white; font-size: 1.2rem; transition: all 0.3s; text-decoration: none;}
        .social-links a:hover { background-color: var(--blue, #007bff); transform: translateY(-3px); }
        .footer-bottom { border-top: 1px solid rgba(255, 255, 255, 0.1); padding: 25px 0; text-align: center; color: #b3abab; font-size: 0.9rem; }
        .footer-bottom i { color: var(--blue, #007bff); }
      `}</style>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-row">
            <div className="footer-col">
              <h3 className="footer-title">Juphimo Consultancy</h3>
              <p className="footer-about">Your best place to find reliable workers all in one platform!!!</p>
              <div className="footer-contact-item"><i className="fa-solid fa-location-dot"></i><span>6A Piers Road, Borrowdale, Harare</span></div>
              <div className="footer-contact-item"><i className="fa-solid fa-phone"></i><span>+263 782 326 442</span></div>
              <div className="footer-contact-item"><i className="fa-solid fa-envelope"></i><span>info@juphimo.co.zw</span></div>
            </div>
            
            <div className="footer-col">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li><a href="#home"><i className="fa-solid fa-chevron-right"></i> Home</a></li>
                <li><a href="#about"><i className="fa-solid fa-chevron-right"></i> About Us</a></li>
                <li><a href="#contact"><i className="fa-solid fa-chevron-right"></i> Contact Us</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3 className="footer-title">Our Services</h3>
              <ul className="footer-links">
                <li><a href="#domestic"><i className="fa-solid fa-chevron-right"></i> Domestic Services</a></li>
                <li><a href="#remote"><i className="fa-solid fa-chevron-right"></i> Remote Services</a></li>
                <li><a href="#white-collar"><i className="fa-solid fa-chevron-right"></i> Corporate Services</a></li>
                <li><a href="#blue-collar"><i className="fa-solid fa-chevron-right"></i> Trade Services</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3 className="footer-title">Opening Hours</h3>
              <div className="footer-hours">
                <p><i className="fa-regular fa-calendar"></i> Mon – Fri: 8:00 AM – 5:00 PM</p>
                <p><i className="fa-regular fa-calendar"></i> Sat: 8:00 AM – 1:00 PM</p>
                <p><i className="fa-regular fa-calendar"></i> Sun: Closed</p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Juphimo Consultancy. All rights reserved. | The Decade.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

// --- Home Page Component ---
function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGallery />
    </>
  );
}

const pageRouteHashes = new Set([
  '#home',
  '#about',
  '#contact',
  '#white-collar',
  '#blue-collar',
  '#domestic',
  '#remote'
]);

function scrollToTopOfPage() {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
}

// --- Main App Component ---
export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.hash || '#home');
    };

    window.addEventListener('hashchange', handleLocationChange);
    return () => window.removeEventListener('hashchange', handleLocationChange);
  }, []);

  useEffect(() => {
    scrollToTopOfPage();
  }, [currentPath]);

  useEffect(() => {
    const handlePageLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const pageLink = target?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!pageLink) return;

      const href = pageLink.getAttribute('href');
      if (!href || !pageRouteHashes.has(href)) return;

      const currentHash = window.location.hash || '#home';
      if (href === currentHash) {
        scrollToTopOfPage();
      }
    };

    document.addEventListener('click', handlePageLinkClick);
    return () => document.removeEventListener('click', handlePageLinkClick);
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '#about':
        return <AboutSection />;
      case '#contact':
        return <ContactPage />;
      case '#white-collar':
        return <ServiceCategoryPageModern category="White-Collar" />;
      case '#blue-collar':
        return <ServiceCategoryPageModern category="Blue-Collar" />;
      case '#domestic':
        return <ServiceCategoryPageModern category="Domestic" />;
      case '#remote':
        return <ServiceCategoryPageModern category="Remote" />;
      case '#home':
      default:
        return <HomePage />;
    }
  };

  return (
    <>
      <Navbar />
      {renderPage()}
      <Footer />
      
      {/* --- Floating WhatsApp Button --- */}
      <style>{`
        .whatsapp-float { position: fixed; bottom: 30px; right: 30px; background-color: #25d366; color: white; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 32px; box-shadow: 0 6px 16px rgba(0,0,0,0.2); transition: all 0.3s ease; z-index: 9999; text-decoration: none;}
        .whatsapp-float:hover { background-color: #20b859; transform: scale(1.1); color: white; }
      `}</style>
      <a 
        href="https://wa.me/263782326442" 
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="WhatsApp chat"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </>
  );
}