import '../styles/components.css';

export default function Contact() {
  return (
    <div className="contact-page-wrapper">
      {/* Social Links Section */}
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

      {/* Location / Map Section */}
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
  );
}