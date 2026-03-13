import '../../styles/components.css'; // Make sure styles are imported

export default function AboutSection() {
  return (
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
  );
}