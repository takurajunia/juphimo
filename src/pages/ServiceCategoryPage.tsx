import '../styles/components.css';

interface ServiceRole {
  title: string;
  description: string;
  image: string;
  badge: string;
}

interface ServiceMetric {
  value: string;
  label: string;
}

interface ServicePromise {
  title: string;
  description: string;
}

interface ServiceStep {
  title: string;
  description: string;
}

interface ServiceCategoryData {
  theme: 'white-collar' | 'blue-collar' | 'domestic' | 'remote';
  heroLabel: string;
  heroImage: string;
  spotlightTitle: string;
  spotlightText: string;
  tagline: string;
  desc: string;
  features: string[];
  roles: ServiceRole[];
  metrics: ServiceMetric[];
  promises: ServicePromise[];
  audienceTitle: string;
  audienceSummary: string;
  audiencePoints: string[];
  processTitle: string;
  processSummary: string;
  processNote: string;
  steps: ServiceStep[];
  ctaTitle: string;
  ctaDescription: string;
  primaryActionLabel: string;
  secondaryActionLabel: string;
}

const categoryData: Record<string, ServiceCategoryData> = {
  'White-Collar': {
    theme: 'white-collar',
    heroLabel: 'Executive talent pipeline',
    heroImage: '/images/proJC.jpeg',
    spotlightTitle: 'Fast shortlist delivery',
    spotlightText: 'Finance, legal, healthcare, education, and technology professionals curated around your brief.',
    tagline: 'Expert professionals for your business growth',
    desc: 'Connect with highly qualified professionals who bring expertise, reliability, and results to your organization. Our pre-screened white-collar talent is ready to strengthen operations without slowing your momentum.',
    features: [
      'Accountants',
      'Architects',
      'Attorneys',
      'Economists',
      'Doctors',
      'Social workers',
      'Teachers',
      'Database administrators',
      'Software developers',
      'Financial managers',
      'Civil engineers'
    ],
    metrics: [
      { value: '48 hrs', label: 'to receive a curated shortlist' },
      { value: '30-day', label: 'replacement support on placements' },
      { value: 'Verified', label: 'credentials and references checked' },
      { value: 'Flexible', label: 'contract, project, or permanent hiring' }
    ],
    promises: [
      {
        title: 'Role-specific screening',
        description: 'We evaluate technical depth, professional conduct, and relevance to the function you need filled.'
      },
      {
        title: 'Commercially aware placements',
        description: 'Candidates are matched for performance, communication, and the pace of your operating environment.'
      },
      {
        title: 'Reduced hiring drag',
        description: 'Your team spends less time filtering CVs and more time meeting candidates who already fit the brief.'
      }
    ],
    audienceTitle: 'Built for companies that cannot afford slow hiring cycles',
    audienceSummary: 'When key business roles stay open for too long, quality drops and teams get stretched. Juphimo shortens the path to dependable professional talent.',
    audiencePoints: [
      'Strengthen finance, legal, healthcare, education, and digital teams faster.',
      'Protect service quality with screened professionals who can contribute quickly.',
      'Scale for growth, backfill urgent gaps, or support project delivery with less recruitment friction.'
    ],
    processTitle: 'A practical hiring flow for high-value professional roles',
    processSummary: 'We keep the process structured and transparent so you always know what happens next and how candidates are being qualified.',
    processNote: 'Share the role, experience level, and timeline. We will start curating profiles that fit the commercial reality of the position.',
    steps: [
      {
        title: 'Consultation and role brief',
        description: 'We capture responsibilities, success criteria, reporting lines, and any compliance requirements.'
      },
      {
        title: 'Curated shortlist',
        description: 'You receive a focused selection of professionals whose skills, background, and availability align with your needs.'
      },
      {
        title: 'Interviews and evaluation',
        description: 'We coordinate meetings, gather feedback, and help refine the shortlist if you want to compare options.'
      },
      {
        title: 'Offer and placement',
        description: 'Once you choose a candidate, we support the handover, documentation, and onboarding transition.'
      }
    ],
    roles: [
      {
        badge: 'Finance',
        title: 'Accountants and financial managers',
        description: 'Certified professionals to manage reporting, controls, audits, tax matters, and forward-looking financial planning.',
        image: 'https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        badge: 'Built environment',
        title: 'Architects and engineers',
        description: 'Licensed specialists to design, plan, coordinate, and supervise infrastructure and property development work.',
        image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        badge: 'Legal',
        title: 'Legal professionals',
        description: 'Experienced attorneys and legal advisors for contracts, governance, risk, and day-to-day business compliance.',
        image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        badge: 'Healthcare',
        title: 'Healthcare specialists',
        description: 'Qualified medical and support professionals for facilities that need strong patient care and dependable administration.',
        image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        badge: 'Education',
        title: 'Educators and trainers',
        description: 'Teachers, facilitators, and training professionals equipped to deliver structured learning and skills development.',
        image: '/images/teacher.jpg'
      },
      {
        badge: 'Technology',
        title: 'IT and software professionals',
        description: 'Developers, administrators, and technical specialists who can support systems, products, and digital transformation.',
        image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ],
    ctaTitle: 'Ready to find your next professional hire?',
    ctaDescription: 'Tell us what role you need filled and we will start curating qualified candidates that match your expectations.',
    primaryActionLabel: 'Request professionals',
    secondaryActionLabel: 'Chat on WhatsApp'
  },
  'Blue-Collar': {
    theme: 'blue-collar',
    heroLabel: 'Industrial and trade staffing',
    heroImage: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200',
    spotlightTitle: 'Trade-tested crews',
    spotlightText: 'Reliable site talent for builds, installations, maintenance, logistics, and urgent project support.',
    tagline: 'Site-ready specialists for fast-moving projects',
    desc: 'Skip the scramble for dependable tradespeople. We supply pre-screened blue-collar professionals who bring practical skill, safety awareness, and work ethic to construction sites, workshops, plants, and field operations.',
    features: [
      'Electricians',
      'Plumbers',
      'Welders',
      'Truck drivers',
      'Carpenters',
      'Industrial machinery mechanics',
      'Power line installers',
      'Quantity surveyors',
      'Mechanical engineers',
      'Solar technicians',
      'Builders'
    ],
    metrics: [
      { value: '72 hrs', label: 'for urgent shortlist support' },
      { value: 'Trade-tested', label: 'practical skills screened upfront' },
      { value: '30-day', label: 'replacement cover for placements' },
      { value: 'Site-ready', label: 'talent matched to real project conditions' }
    ],
    promises: [
      {
        title: 'Practical trade vetting',
        description: 'We focus on hands-on ability, reliability, and the kind of work each candidate has already delivered.'
      },
      {
        title: 'Safety-aware placements',
        description: 'Candidates are screened with the realities of active sites, equipment handling, and day-to-day accountability in mind.'
      },
      {
        title: 'Rapid replacement support',
        description: 'If a placement does not hold, we move quickly to keep your project staffed and your timeline protected.'
      }
    ],
    audienceTitle: 'Made for worksites where reliability matters as much as skill',
    audienceSummary: 'When deadlines are tight and rework is expensive, you need people who show up ready, follow instruction, and deliver consistently.',
    audiencePoints: [
      'Support construction, maintenance, utilities, logistics, and field operations with less downtime.',
      'Fill urgent gaps without lowering standards on workmanship or dependability.',
      'Keep supervisors focused on output instead of constantly rehiring and retraining crews.'
    ],
    processTitle: 'A faster staffing process for demanding project environments',
    processSummary: 'We shape the search around your site conditions, deadlines, and trade requirements so the shortlist is usable from the start.',
    processNote: 'Tell us the role, tools, project environment, and expected start date. We will move quickly on candidates who can actually do the work.',
    steps: [
      {
        title: 'Project brief and trade requirements',
        description: 'We define the scope, experience level, shift expectations, and any safety or certification requirements.'
      },
      {
        title: 'Shortlist of site-fit candidates',
        description: 'You receive workers whose trade background and availability fit the reality of the job, not just the title on paper.'
      },
      {
        title: 'Final checks and selection',
        description: 'We help coordinate interviews or trade discussions so you can confirm fit before deployment.'
      },
      {
        title: 'Deployment and follow-through',
        description: 'Once selected, we support the placement and stay available if the project needs replacement or scaling help.'
      }
    ],
    roles: [
      {
        badge: 'Electrical',
        title: 'Electricians and power line installers',
        description: 'Licensed electrical professionals for installations, repairs, system upgrades, and dependable field maintenance support.',
        image: 'https://images.pexels.com/photos/5691618/pexels-photo-5691618.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        badge: 'Plumbing',
        title: 'Plumbers and pipe fitters',
        description: 'Experienced specialists for water systems, drainage, reticulation, fitting work, and maintenance across residential or commercial sites.',
        image: 'https://images.pexels.com/photos/8486921/pexels-photo-8486921.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        badge: 'Fabrication',
        title: 'Welders and metal workers',
        description: 'Certified welders and fabrication teams for manufacturing, structural work, plant repairs, and precision metalwork.',
        image: 'https://images.pexels.com/photos/1474993/pexels-photo-1474993.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        badge: 'Construction',
        title: 'Carpenters and builders',
        description: 'Skilled construction talent for framing, finishing, formwork, site preparation, and hands-on building support.',
        image: 'https://images.pexels.com/photos/5691543/pexels-photo-5691543.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        badge: 'Mechanical',
        title: 'Mechanical and industrial technicians',
        description: 'Maintenance-minded technicians for plant equipment, industrial systems, breakdown response, and preventive servicing.',
        image: 'https://images.pexels.com/photos/3807571/pexels-photo-3807571.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        badge: 'Energy',
        title: 'Solar technicians and quantity surveyors',
        description: 'Specialist support for renewable installations, cost estimation, project controls, and efficient construction delivery.',
        image: 'https://images.pexels.com/photos/9875417/pexels-photo-9875417.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ],
    ctaTitle: 'Need skilled people on site without the usual hiring delays?',
    ctaDescription: 'Send us your project brief and we will start shortlisting dependable blue-collar talent matched to the way your team works.',
    primaryActionLabel: 'Request site talent',
    secondaryActionLabel: 'Chat on WhatsApp'
  },
  Domestic: {
    theme: 'domestic',
    heroLabel: 'Household placement and care',
    heroImage: '/images/nanny.jpeg',
    spotlightTitle: 'Trust-first matching',
    spotlightText: 'Household professionals screened for reliability, warmth, professionalism, and fit with your family routine.',
    tagline: 'Trusted household professionals matched to the rhythm of your home',
    desc: 'We help families and private households hire carefully screened domestic professionals who bring calm, consistency, and genuine care into everyday life. The goal is not just placement, but the right long-term fit.',
    features: [
      'Housekeepers',
      'House helpers',
      'Caretakers',
      'Nannies',
      'Elderly caregivers',
      'Private chefs',
      'Kitchen assistants',
      'Personal assistants',
      'Gardeners',
      'Drivers',
      'After-school care'
    ],
    metrics: [
      { value: 'Screened', label: 'references and background checks completed' },
      { value: 'Flexible', label: 'live-in, live-out, part-time, or full-time' },
      { value: '30-day', label: 'replacement support if needed' },
      { value: 'Supported', label: 'post-placement guidance still available' }
    ],
    promises: [
      {
        title: 'Personalized matching',
        description: 'We shortlist around your household structure, care needs, schedule, and preferred working style.'
      },
      {
        title: 'Confidence before commitment',
        description: 'Candidates are screened before introduction so you meet people worth considering, not a pile of unknowns.'
      },
      {
        title: 'Support after placement',
        description: 'We stay available for replacement support, clarification, and help navigating the early stages of a placement.'
      }
    ],
    audienceTitle: 'Designed for families who need trust before anything else',
    audienceSummary: 'Hiring into your home is personal. We take care to match households with professionals who can support routines, safety, and peace of mind.',
    audiencePoints: [
      'Meet candidates based on your exact home, care, and schedule requirements.',
      'Reduce the uncertainty that comes with informal hiring and weak screening.',
      'Build more stable home support with better-fit placements from the start.'
    ],
    processTitle: 'A careful placement journey for homes and families',
    processSummary: 'We keep the process simple, but we do not cut corners on trust, fit, and clarity before a placement is made.',
    processNote: 'Tell us about your household, the role, and the kind of support you need most. We will narrow the search around what matters in daily life.',
    steps: [
      {
        title: 'Household consultation',
        description: 'We learn about your routine, preferred schedule, care expectations, and any non-negotiables for the role.'
      },
      {
        title: 'Matched shortlist',
        description: 'You receive candidates whose experience and temperament suit the environment of your home.'
      },
      {
        title: 'Meet and evaluate',
        description: 'You can speak with shortlisted candidates and decide who feels right for your household.'
      },
      {
        title: 'Placement and follow-up',
        description: 'We support the start of the placement and remain available if you need help adjusting or replacing the match.'
      }
    ],
    roles: [
      {
        badge: 'Childcare',
        title: 'Nannies and child minders',
        description: 'Reliable childcare support for feeding, routines, supervision, developmental play, and after-school help.',
        image: '/images/childnanny.jpg'
      },
      {
        badge: 'Family support',
        title: 'Household assistants',
        description: 'Versatile home support professionals who help families keep daily tasks organized, clean, and manageable.',
        image: '/images/childminder.jpeg'
      },
      {
        badge: 'Housekeeping',
        title: 'Housekeepers and cleaners',
        description: 'Experienced cleaning and housekeeping staff to maintain hygiene, presentation, and structure in your home.',
        image: '/images/cleaners.jpg'
      },
      {
        badge: 'Kitchen',
        title: 'Private chefs and kitchen assistants',
        description: 'Kitchen support for meal preparation, food handling, family routines, and better day-to-day household flow.',
        image: '/images/chef.jpg'
      },
      {
        badge: 'Grounds',
        title: 'Gardeners and groundskeepers',
        description: 'Outdoor maintenance professionals to care for gardens, yards, and surrounding spaces with consistency.',
        image: '/images/garden.jpg'
      },
      {
        badge: 'Companionship',
        title: 'Personal support and companionship',
        description: 'Supportive professionals for companionship, light assistance, and dependable help around the home environment.',
        image: '/images/nanny.jpeg'
      }
    ],
    ctaTitle: 'Looking for household help you can genuinely trust?',
    ctaDescription: 'Speak with us about your home, your routine, and the kind of support you need. We will help you find a placement that feels right.',
    primaryActionLabel: 'Find household help',
    secondaryActionLabel: 'Chat on WhatsApp'
  },
  Remote: {
    theme: 'remote',
    heroLabel: 'Distributed support teams',
    heroImage: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1200',
    spotlightTitle: 'Remote-ready talent',
    spotlightText: 'Communication-focused professionals aligned to your tools, schedule, and performance expectations.',
    tagline: 'Flexible remote professionals for support, operations, and digital growth',
    desc: 'Build a dependable remote team without spending weeks sorting through unsuitable applications. We connect you with communication-ready professionals who can plug into your workflows quickly and effectively.',
    features: [
      'Virtual assistants',
      'Customer service reps',
      'Data entry clerks',
      'Online tutors',
      'Social media managers',
      'Copywriters',
      'Graphic designers'
    ],
    metrics: [
      { value: '48 hrs', label: 'to start reviewing strong profiles' },
      { value: 'Tool-ready', label: 'talent aligned to modern workflows' },
      { value: 'Scalable', label: 'grow support capacity without office overhead' },
      { value: 'Flexible', label: 'part-time, full-time, or project support' }
    ],
    promises: [
      {
        title: 'Communication screened',
        description: 'We look for professionals who can work independently, report clearly, and keep tasks moving remotely.'
      },
      {
        title: 'Workflow compatibility',
        description: 'Candidates are matched around the tools, pace, and structure of your existing remote operations.'
      },
      {
        title: 'Easy scaling options',
        description: 'Bring in focused support for admin, customer care, marketing, or creative work as your needs change.'
      }
    ],
    audienceTitle: 'Built for businesses that need capable support beyond the office',
    audienceSummary: 'Remote hiring should expand your capability, not create more management friction. We focus on people who can communicate, execute, and adapt in distributed teams.',
    audiencePoints: [
      'Add specialist support without the cost and delay of traditional local hiring.',
      'Expand admin, customer care, or creative capacity with flexible staffing models.',
      'Hire remote talent that works well across shared tools, deadlines, and performance expectations.'
    ],
    processTitle: 'A remote hiring flow built around fit, clarity, and speed',
    processSummary: 'The right remote placement depends on communication, autonomy, and tool familiarity. That is what we prioritize in the shortlist.',
    processNote: 'Share the tasks, working hours, preferred tools, and level of autonomy required. We will shape the shortlist around actual workflow fit.',
    steps: [
      {
        title: 'Role scoping',
        description: 'We define outputs, communication expectations, preferred time overlap, and tools used by your team.'
      },
      {
        title: 'Remote-fit shortlist',
        description: 'You receive candidates screened for role relevance, communication strength, and remote work readiness.'
      },
      {
        title: 'Skills review and selection',
        description: 'Meet shortlisted candidates, review samples or task-fit, and identify the best match for your workflow.'
      },
      {
        title: 'Onboarding support',
        description: 'We support the handoff so your new remote hire can start with clarity and structure from day one.'
      }
    ],
    roles: [
      {
        badge: 'Admin',
        title: 'Virtual assistants',
        description: 'Dependable administrative support for calendars, inboxes, coordination, follow-ups, and daily business tasks.',
        image: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        badge: 'Customer care',
        title: 'Customer support representatives',
        description: 'Remote-facing professionals who can respond clearly, resolve issues, and keep client interactions consistent.',
        image: 'https://images.pexels.com/photos/7709088/pexels-photo-7709088.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        badge: 'Operations',
        title: 'Data entry and admin support',
        description: 'Detail-focused support staff for records, reporting, system updates, and process-heavy operational work.',
        image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        badge: 'Marketing',
        title: 'Social media coordinators',
        description: 'Content-focused professionals to help plan, schedule, monitor, and support your digital presence.',
        image: 'https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        badge: 'Content',
        title: 'Copywriters and content support',
        description: 'Writers who can support messaging, campaigns, social content, product copy, and general communication work.',
        image: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        badge: 'Creative',
        title: 'Design and creative support',
        description: 'Graphic design support for branded assets, marketing materials, presentations, and campaign execution.',
        image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ],
    ctaTitle: 'Ready to add reliable remote support to your business?',
    ctaDescription: 'Tell us the role, tools, and outcomes you care about most. We will help you identify remote professionals who can slot into the work quickly.',
    primaryActionLabel: 'Build your remote team',
    secondaryActionLabel: 'Chat on WhatsApp'
  }
};

export default function ServiceCategoryPage({ category }: { category: string }) {
  const data = categoryData[category];

  if (!data) {
    return <div className="category-page"><h2>Category Not Found</h2></div>;
  }

  return (
    <div className="modern-service-page" data-service-theme={data.theme}>
      <section className="service-hero">
        <div className="service-hero-shell">
          <div className="service-hero-content">
            <p className="service-eyebrow">{data.heroLabel}</p>
            <h1>{category} Services</h1>
            <p className="service-tagline">{data.tagline}</p>
            <p className="service-description">{data.desc}</p>

            <div className="service-hero-actions">
              <a href="#contact" className="cta-btn primary">{data.primaryActionLabel}</a>
              <a
                href="https://wa.me/263782326442"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn secondary"
              >
                {data.secondaryActionLabel}
              </a>
            </div>
          </div>

          <div className="service-hero-visual">
            <div className="service-hero-image-frame">
              <img src={data.heroImage} alt={`${category} services`} className="service-hero-image" />
              <div className="service-hero-image-overlay"></div>

              <div className="service-hero-spotlight">
                <span>{data.spotlightTitle}</span>
                <p>{data.spotlightText}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="service-metrics-grid">
          {data.metrics.map((metric) => (
            <article className="service-metric-card" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="service-section">
        <div className="service-section-shell">
          <div className="service-section-heading">
            <p className="section-kicker">Why Juphimo</p>
            <h2>{data.audienceTitle}</h2>
            <p>{data.audienceSummary}</p>
          </div>

          <div className="service-overview-grid">
            <article className="service-panel">
              <h3>Popular roles</h3>
              <div className="service-feature-chip-list">
                {data.features.map((feature) => (
                  <span className="service-feature-chip" key={feature}>{feature}</span>
                ))}
              </div>
            </article>

            <article className="service-panel">
              <h3>What clients gain</h3>
              <ul className="service-check-list">
                {data.audiencePoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="service-promise-grid">
            {data.promises.map((promise) => (
              <article className="service-promise-card" key={promise.title}>
                <h3>{promise.title}</h3>
                <p>{promise.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-section service-roles-section">
        <div className="service-section-shell">
          <div className="service-section-heading">
            <p className="section-kicker">Specialist coverage</p>
            <h2>Explore the roles we can source for you</h2>
            <p>Each category below reflects the kind of talent Juphimo can shortlist, screen, and place around your specific requirements.</p>
          </div>

          <div className="service-features-grid">
            {data.roles.map((role) => (
              <article className="feature-card" key={role.title}>
                <div className="feature-image-wrapper">
                  <img src={role.image} alt={role.title} className="feature-image" />
                  <div className="feature-overlay"></div>
                  <span className="feature-badge">{role.badge}</span>
                </div>

                <div className="feature-content">
                  <h3>{role.title}</h3>
                  <p>{role.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-section service-process-section">
        <div className="service-section-shell service-process-shell">
          <div className="service-process-intro">
            <p className="section-kicker">How it works</p>
            <h2>{data.processTitle}</h2>
            <p>{data.processSummary}</p>

            <div className="service-process-note">
              <strong>Start with a clear brief</strong>
              <span>{data.processNote}</span>
            </div>
          </div>

          <div className="service-steps-grid">
            {data.steps.map((step, index) => (
              <article className="service-step-card" key={step.title}>
                <span className="service-step-number">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <p className="section-kicker cta-kicker">Ready when you are</p>
          <h2>{data.ctaTitle}</h2>
          <p>{data.ctaDescription}</p>

          <div className="cta-buttons">
            <a href="#contact" className="cta-btn primary">{data.primaryActionLabel}</a>
            <a
              href="https://wa.me/263782326442"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn secondary"
            >
              {data.secondaryActionLabel}
            </a>
          </div>

          <div className="cta-contact-list">
            <a href="tel:+263782326442" className="cta-contact-item">Call +263 782 326 442</a>
            <a href="https://wa.me/263782326442" target="_blank" rel="noopener noreferrer" className="cta-contact-item">WhatsApp us</a>
            <a href="mailto:info@juphimo.co.zw" className="cta-contact-item">info@juphimo.co.zw</a>
          </div>
        </div>
      </section>
    </div>
  );
}