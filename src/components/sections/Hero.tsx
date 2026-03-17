import '../../styles/components.css';

export default function Hero() {
  return (
    <section className="hero-image-container">
      <picture>
        <source
          type="image/webp"
          srcSet="/images/bholato-768.webp 768w, /images/bholato-1280.webp 1280w, /images/bholato.webp 1472w"
          sizes="100vw"
        />
        <img
          src="/images/bholato.jpeg"
          alt="Juphimo Consultancy staffing team"
          className="hero-image"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width={1472}
          height={954}
        />
      </picture>

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