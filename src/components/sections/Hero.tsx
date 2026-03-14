import '../../styles/components.css';

export default function Hero() {
  return (
    <section className="hero-image-container">
      <img
        src="/images/bholato.jpeg"
        alt="Juphimo Consultancy staffing team"
        className="hero-image"
      />

      <div className="hero-overlay">
        <p className="hero-kicker">Staffing Across Zimbabwe</p>
        <h1>One partner for domestic, corporate, trade, and remote talent.</h1>
        <p className="hero-summary">
          From family support and hospitality to blue-collar projects and office teams,
          we connect you to pre-screened professionals ready to deliver.
        </p>

        <div className="hero-pill-row">
          <span>Corporate Teams</span>
          <span>Trade Specialists</span>
          <span>Remote Support</span>
          <span>Domestic Professionals</span>
        </div>
      </div>

    </section>
  );
}