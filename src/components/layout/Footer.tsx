import '../../styles/components.css';

export default function Footer() {
  return (
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
          <p>&copy; 2026 Juphimo Consultancy. All rights reserved. | The Decade.</p>
        </div>
      </div>
    </footer>
  );
}