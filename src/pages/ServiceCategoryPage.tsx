import '../styles/components.css'; // Ensure your CSS is linked

// Define the data for our different categories
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

export default function ServiceCategoryPage({ category }: { category: string }) {
  const data = categoryData[category];

  if (!data) return <div className="category-page"><h2>Category Not Found</h2></div>;

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