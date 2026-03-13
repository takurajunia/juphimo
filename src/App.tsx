import { useState, useEffect } from 'react';
import ServiceCategoryPageModern from './pages/ServiceCategoryPage';

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
        .nav-container { width: 100%; background-color: var(--darkblack, #0b0c0b); position: sticky; top: 0; z-index: 999; }
        .navbar { display: grid; grid-template-columns: 0.2fr auto 1fr; align-items: center; height: 80px; width: 90%; max-width: 1720px; margin: 0 auto; }
        #navbar-logo { justify-self: start; margin-left: 20px; cursor: pointer; max-height: 60px; width: auto; display: block; }
        .nav-menu { display: flex; align-items: center; list-style: none; text-align: center; justify-self: end; gap: 2rem; margin: 0; padding: 0; }
        .nav-links { color: #fff; text-decoration: none; transition: all 0.2s ease-out; cursor: pointer; }
        .nav-links:hover { color: var(--lightlemon, #090446cc); }
        .nav-links-btn { background-color: var(--blue, #007bff); padding: 8px 20px; border-radius: 4px; transition: all 0.3s ease-out; color: #fff; text-decoration: none; }
        .nav-links-btn:hover { background-color: transparent; border: solid 1px var(--blue, #007bff); color: var(--white, #fff); }
        
        /* --- Dropdown Styles --- */
        .nav-item-dropdown { position: relative; cursor: pointer; }
        .dropdown-menu { position: absolute; top: 100%; left: 50%; transform: translateX(-50%); background-color: var(--darkblack, #0b0c0b); list-style: none; min-width: 180px; padding: 0.5rem 0; border-radius: 4px; box-shadow: 0 4px 6px rgba(0,0,0,0.3); display: flex; flex-direction: column; text-align: center; }
        .dropdown-link { color: var(--white, #fff); padding: 12px 20px; display: block; transition: background 0.2s; font-size: 0.95rem; text-decoration: none; }
        .dropdown-link:hover { background-color: var(--blue, #007bff); }
        
        /* --- Mobile Menu Toggle --- */
        .menu-toggle { display: none; }
        .menu-toggle .bar { width: 25px; height: 3px; margin: 5px auto; transition: all 0.3s ease-in-out; background: var(--white, #fff); display: block; }
        
        /* --- Mobile Responsive --- */
        @media screen and (max-width: 768px) {
            .nav-menu { flex-direction: column; background: var(--darkblack, #0b0c0b); margin: 0; width: 100%; position: absolute; top: 80px; left: -100%; opacity: 0; transition: all 0.5s ease; padding: 2rem 0; gap: 1.5rem; }
            .nav-menu.active { left: 0; opacity: 1; z-index: 99; }
            .dropdown-menu { position: relative; background-color: rgba(255, 255, 255, 0.05); box-shadow: none; width: 100%; transform: none; left: 0; margin-top: 10px; }
            .menu-toggle { display: block; cursor: pointer; position: absolute; top: 25px; right: 5%; }
            .menu-toggle.is-active .bar:nth-child(2) { opacity: 0; }
            .menu-toggle.is-active .bar:nth-child(1) { transform: translateY(8px) rotate(45deg); }
            .menu-toggle.is-active .bar:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }
        }
      `}</style>
      <div className="nav-container">
        <nav className="navbar">
          <a href="#home">
            <img src="/logo.png" alt="Juphimo Consultancy Logo" id="navbar-logo" />
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
  return (
    <>
      <style>{`
        /* Hero image container – makes the image full width */
        .hero-image-container {
            width: 100%;
            line-height: 0; /* removes extra space below image */
        }
        
        .hero-image {
            width: 100%;
            height: auto;    /* maintains aspect ratio */
            display: block;  /* removes inline gap */
        }
      `}</style>
      <div className="hero-image-container">
        <img 
          src="/images/bholato.jpeg" 
          alt="Juphimo Consultancy Staff" 
          className="hero-image" 
        />
      </div>
    </>
  );
}

// --- Services Gallery Component ---
function ServicesGallery() {
  const galleryItems = [
    { title: "Care givers", img: "/images/caregiver (1).jpg", alt: "care giving" },
    { title: "Cleaners", img: "/images/cleaners.jpg", alt: "cleaning" },
    { title: "Dog groomers", img: "/images/dog groomer.jpeg", alt: "dog grooming" },
    { title: "Waiters & waitresses", img: "/images/waitress.jpg", alt: "waiters" },
    { title: "Chefs", img: "/images/chef.jpg", alt: "chefs" },
    { title: "Child minders", img: "/images/childnanny.jpg", alt: "child minders" },
    { title: "Shop Assistant", img: "/images/shopassistant.jpg", alt: "shop assistant" }
  ];

  return (
    <>
      <style>{`
        /* --- Services Gallery Styles --- */
        .services-section { background-color: var(--blue, #007bff); width: 100%; min-height: 100vh; padding-bottom: 8rem; }
        .services-heading { color: var(--white, #fff); text-align: center; margin-bottom: 2rem; padding-top: 3rem; padding-left: 1rem; padding-right: 1rem; }
        .services { display: flex; flex-wrap: wrap; justify-content: center; align-items: center; max-width: 1200px; margin: 0 auto; transform: translateY(80px); }
        .services-cell { flex: 0 1 250px; max-width: 250px; height: 275px; margin: 10px; position: relative; text-align: center; z-index: 1; box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.8); clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); cursor: pointer; overflow: hidden; }
        .services-cell_img { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; z-index: 1; }
        .services-cell_text { position: relative; height: 100%; width: 80%; margin: 0 auto; display: flex; flex-direction: column; justify-content: center; text-transform: uppercase; color: var(--white, #fff); font-weight: 700; font-size: 1rem; text-shadow: 2px 2px 2px var(--darkblack, #0b0c0b); z-index: 2; transition: opacity 350ms; }
        .services-cell::before { content: ''; position: absolute; top: -50%; left: -50%; width: 350px; height: 70px; background: var(--white, #fff); opacity: 0.4; transform: rotate(45deg); transition: transform 1.5s; z-index: 3; }
        .services-cell:hover::before { transform: translate(100px, 400%) rotate(45deg); transition: transform 0.8s; }
        .services-cell:hover { transform: scale(1.1); z-index: 99; transition: all 0.3s ease-in-out; }
        
        /* ========== RESPONSIVE GALLERY ========== */
        @media screen and (min-width: 550px) and (max-width: 825px) {
          .services-cell { margin: 5px; }
          .services-cell:nth-child(3n) { margin-left: calc(50% - 125px); margin-right: calc(50% - 125px); }
          .services-cell:nth-child(n+3):nth-child(-n+7) { position: relative; }
          .services-cell:nth-child(3), .services-cell:nth-child(4), .services-cell:nth-child(5) { top: -70px; }
          .services-cell:nth-child(6) { top: -140px; }
          .services-cell:nth-child(7) { top: -140px; margin-right: 250px; }
        }
        @media screen and (min-width: 825px) and (max-width: 1100px) {
          .services-cell { margin: 5px; }
          .services-cell:nth-child(n+4):nth-child(-n+7) { position: relative; }
          .services-cell:nth-child(4) { top: -70px; margin-left: calc(50% - 275px); }
          .services-cell:nth-child(5) { top: -70px; margin-right: calc(50% - 275px); }
          .services-cell:nth-child(6) { top: -140px; margin-left: calc(50% - 530px); }
          .services-cell:nth-child(7) { top: -140px; margin-right: calc(50% - 275px); }
        }
        @media screen and (min-width: 1100px) {
          .services-cell:nth-child(n + 5) { position: relative; top: -70px; }
        }
        @media screen and (max-width: 550px) {
          .services { transform: translateY(40px); }
          .services-cell { flex: 0 1 200px; max-width: 200px; height: 220px; margin: 30px 15px; }
          .services-cell_text { font-size: 0.85rem; }
        }
      `}</style>
      <div className="services-section">
        <div className="services-heading">
          <h1>Are you looking for someone reliable and with experience to get all your work done? Juphimo Consultancy has all the workers you need!!! Services on offer below.</h1>
        </div>

        <div className="services">
          {galleryItems.map((item, index) => (
            <div className="services-cell" key={index}>
              <img src={item.img} alt={item.alt} className="services-cell_img" />
              <div className="services-cell_text">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
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

// --- Service Category Page Component (Legacy fallback) ---
const categoryData: Record<string, { desc: string, features: string[] }> = {
  'Blue-Collar': {
    desc: "Skip the lengthy hiring process and get reliable, pre-screened blue-collar talent delivered to your worksite faster, saving you time and money while ensuring the job gets done right.",
    features: ["Electricians", "Plumbers", "Welders", "Truck Drivers", "Carpenters", "Industrial Machinery Mechanics", "Power Line Installers", "Quantity Surveyors", "Mechanical engineers", "Solar technician", "Builders", "And more..."]
  },
  'Domestic': {
    desc: "Skip the lengthy hiring process and get reliable, pre-screened domestic work talent delivered to your home faster, saving you time and giving you peace of mind.",
    features: ["Housekeepers", "House helpers", "Caretakers", "Nanny / Child minders", "Elderly Care givers", "Private Chefs", "Kitchen Assistants", "Personal Assistants", "Gardener / Yard Workers", "Chauffeur / Drivers", "After school care services", "And more..."]
  },
  'White-Collar': {
    desc: "Skip the lengthy hiring process and get reliable, pre-screened white-collar talent delivered to your office faster, saving you time and money while ensuring the job gets done right.",
    features: ["Accountants", "Architects", "Attorneys", "Economists", "Doctors", "Social workers", "Teachers", "Database Administrators", "Software Developers", "Financial Managers", "Civil engineers", "And more..."]
  },
  'Remote': {
    desc: "Access a global pool of remote talent perfectly suited to handle your digital, administrative, and customer support needs from anywhere in the world.",
    features: ["Virtual Assistants", "Customer Service Reps", "Data Entry Clerks", "Online Tutors", "Social Media Managers", "Copywriters", "Graphic Designers", "And more..."]
  }
};

function ServiceCategoryPageLegacy({ category }: { category: string }) {
  const data = categoryData[category];

  if (!data) return <div className="category-page"><h2>Category Not Found</h2></div>;

  return (
    <>
      <style>{`
        /* --- Service Category Cards Styles --- */
        .category-page { padding: 100px 20px 60px; background-color: var(--darkblack, #0b0c0b); min-height: 80vh; display: flex; flex-direction: column; align-items: center; }
        .category-page h2 { color: var(--white, #fff); font-size: 2.5rem; margin-bottom: 3rem; text-align: center; }
        .services__container { display: flex; justify-content: center; gap: 1.5rem; flex-wrap: wrap; max-width: 1200px; width: 100%; }
        .services__card { background-color: #d2d7dd; padding: 2rem; border-radius: 12px; box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05); width: 350px; display: flex; flex-direction: column; transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .services__card:hover { background-color: #b1e2f5; transform: translateY(-5px); }
        .services__card h3 { font-size: 1.8rem; margin-bottom: 1rem; color: var(--darkblack, #0b0c0b); text-transform: capitalize; }
        #small-desc { font-size: 1rem; color: #3b3939; padding: 8px 0px 20px; border-bottom: 1px solid #a8b0b8; margin-bottom: 20px; line-height: 1.5; }
        .card-features p { font-weight: bold; color: #3b3939; margin-bottom: 10px; }
        .card-features ul { list-style: none; padding: 0; text-align: left; }
        .card-features ul li { font-size: 1rem; color: #3b3939; margin: 0.8rem 0; display: flex; align-items: center; }
        .card-features ul li::before { content: "✓"; color: var(--blue, #007bff); font-weight: bold; margin-right: 10px; }
      `}</style>
      <div className="category-page">
        <h2>{category} Services</h2>

        <div className="services__container">
          <div className="services__card">
            <div className="card-content">
              <h3>{category} Jobs</h3>
              <p id="small-desc">{data.desc}</p>

              <div className="card-features">
                <p>Available Roles:</p>
                <ul>
                  {data.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                <li><a href="#domestic"><i className="fa-solid fa-chevron-right"></i> Child minders</a></li>
                <li><a href="#domestic"><i className="fa-solid fa-chevron-right"></i> Care givers</a></li>
                <li><a href="#blue-collar"><i className="fa-solid fa-chevron-right"></i> Gardeners</a></li>
                <li><a href="#white-collar"><i className="fa-solid fa-chevron-right"></i> Shop assistant</a></li>
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
            <p>&copy; 2026 Juphimo Consultancy. All rights reserved. | Designed with <i className="fa-solid fa-heart"></i> by Rtech</p>
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

  const renderPage = () => {
    switch (currentPath) {
      case '#about':
        return <AboutSection />;
      case '#contact':
        return <ContactPage />;
      case '#white-collar':
        return <ServiceCategoryPageModern category="White-Collar" />;
      case '#blue-collar':
        return <ServiceCategoryPageLegacy category="Blue-Collar" />;
      case '#domestic':
        return <ServiceCategoryPageLegacy category="Domestic" />;
      case '#remote':
        return <ServiceCategoryPageLegacy category="Remote" />;
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