import '../styles/components.css';

interface ServiceRole {
  title: string;
  description: string;
  image: string;
}

const categoryData: Record<string, {
  desc: string;
  tagline: string;
  features: string[];
  roles?: ServiceRole[];
}> = {
  'Blue-Collar': {
    tagline: "Skilled Craftsmen for Every Project",
    desc: "Skip the lengthy hiring process and get reliable, pre-screened blue-collar talent delivered to your worksite faster, saving you time and money while ensuring the job gets done right.",
    features: ["Electricians", "Plumbers", "Welders", "Truck Drivers", "Carpenters", "Industrial Machinery Mechanics", "Power Line Installers", "Quantity Surveyors", "Mechanical engineers", "Solar technician", "Builders", "And more..."]
  },
  'Domestic': {
    tagline: "Trusted Household Professionals",
    desc: "Skip the lengthy hiring process and get reliable, pre-screened domestic work talent delivered to your home faster, saving you time and giving you peace of mind.",
    features: ["Housekeepers", "House helpers", "Caretakers", "Nanny / Child minders", "Elderly Care givers", "Private Chefs", "Kitchen Assistants", "Personal Assistants", "Gardener / Yard Workers", "Chauffeur / Drivers", "After school care services", "And more..."]
  },
  'White-Collar': {
    tagline: "Expert Professionals for Your Business Growth",
    desc: "Connect with highly qualified professionals who bring expertise, reliability, and results to your organization. Our pre-screened white-collar talent is ready to elevate your business operations.",
    features: ["Accountants", "Architects", "Attorneys", "Economists", "Doctors", "Social workers", "Teachers", "Database Administrators", "Software Developers", "Financial Managers", "Civil engineers", "And more..."],
    roles: [
      {
        title: "Accountants & Financial Managers",
        description: "Certified professionals to manage your finances, taxes, audits, and strategic financial planning with precision and compliance.",
        image: "https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        title: "Architects & Engineers",
        description: "Licensed architects and civil engineers to design, plan, and execute your construction and infrastructure projects.",
        image: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        title: "Legal Professionals",
        description: "Experienced attorneys and legal advisors to handle contracts, compliance, litigation, and corporate legal matters.",
        image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        title: "Healthcare Specialists",
        description: "Qualified doctors, nurses, and healthcare administrators to support medical facilities and patient care services.",
        image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        title: "Educators & Trainers",
        description: "Professional teachers and corporate trainers to deliver quality education and skill development programs.",
        image: "https://images.pexels.com/photos/8500328/pexels-photo-8500328.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        title: "IT & Software Professionals",
        description: "Skilled developers, database administrators, and IT specialists to power your digital transformation.",
        image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
      }
    ]
  },
  'Remote': {
    tagline: "Global Talent for Digital Success",
    desc: "Access a global pool of remote talent perfectly suited to handle your digital, administrative, and customer support needs from anywhere in the world.",
    features: ["Virtual Assistants", "Customer Service Reps", "Data Entry Clerks", "Online Tutors", "Social Media Managers", "Copywriters", "Graphic Designers", "And more..."]
  }
};

export default function ServiceCategoryPage({ category }: { category: string }) {
  const data = categoryData[category];

  if (!data) return <div className="category-page"><h2>Category Not Found</h2></div>;

  if (category === 'White-Collar' && data.roles) {
    return (
      <div className="modern-service-page">
        <div className="service-hero">
          <div className="service-hero-content">
            <h1>{category} Services</h1>
            <p className="service-tagline">{data.tagline}</p>
            <p className="service-description">{data.desc}</p>
          </div>
        </div>

        <div className="service-features-grid">
          {data.roles.map((role, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-image-wrapper">
                <img src={role.image} alt={role.title} className="feature-image" />
                <div className="feature-overlay"></div>
              </div>
              <div className="feature-content">
                <h3>{role.title}</h3>
                <p>{role.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <div className="cta-content">
            <h2>Ready to Find Your Perfect Professional Match?</h2>
            <p>Contact us today and let us connect you with pre-screened, qualified talent that fits your needs.</p>
            <div className="cta-buttons">
              <a href="#contact" className="cta-btn primary">Get Started</a>
              <a href="tel:+263782326442" className="cta-btn secondary">Call Us Now</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
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
  );
}