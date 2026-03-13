export default function Hero() {
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