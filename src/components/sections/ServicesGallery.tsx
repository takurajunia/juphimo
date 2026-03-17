import '../../styles/components.css'; // Assuming your styles are here

import { useMemo, useState } from 'react';

type ServiceCategory = 'Corporate' | 'Trade' | 'Remote' | 'Domestic';

interface GalleryItem {
  title: string;
  category: ServiceCategory;
  img: string;
  alt: string;
}

const filterOptions: Array<ServiceCategory | 'All'> = ['All', 'Corporate', 'Trade', 'Remote', 'Domestic'];

const categorySummaries: Array<{ category: ServiceCategory; description: string; href: string }> = [
  {
    category: 'Corporate',
    description: 'Office, retail, and hospitality talent to keep operations moving.',
    href: '#white-collar'
  },
  {
    category: 'Trade',
    description: 'Site-ready professionals for construction, maintenance, and technical work.',
    href: '#blue-collar'
  },
  {
    category: 'Remote',
    description: 'Digital support staff for modern distributed teams and online operations.',
    href: '#remote'
  },
  {
    category: 'Domestic',
    description: 'Trusted household professionals for families and private homes.',
    href: '#domestic'
  }
];

const galleryItems: GalleryItem[] = [
  {
    title: 'Accountants and finance officers',
    category: 'Corporate',
    img: 'https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=700',
    alt: 'Accounting professionals reviewing reports'
  },
  {
    title: 'Shop assistants',
    category: 'Corporate',
    img: '/images/shopassistant.jpg',
    alt: 'Shop assistants helping customers'
  },
  {
    title: 'Waiters and waitresses',
    category: 'Corporate',
    img: '/images/waitress.jpg',
    alt: 'Waitress in service role'
  },
  {
    title: 'Office administrators',
    category: 'Corporate',
    img: '/images/proJC.jpeg',
    alt: 'Corporate office teamwork'
  },
  {
    title: 'Electricians',
    category: 'Trade',
    img: 'https://images.pexels.com/photos/5691618/pexels-photo-5691618.jpeg?auto=compress&cs=tinysrgb&w=700',
    alt: 'Electrician working with equipment'
  },
  {
    title: 'Plumbers and pipe fitters',
    category: 'Trade',
    img: 'https://images.pexels.com/photos/8486921/pexels-photo-8486921.jpeg?auto=compress&cs=tinysrgb&w=700',
    alt: 'Plumber fitting pipes'
  },
  {
    title: 'Welders and metal workers',
    category: 'Trade',
    img: 'https://images.pexels.com/photos/1474993/pexels-photo-1474993.jpeg?auto=compress&cs=tinysrgb&w=700',
    alt: 'Welder working on metal fabrication'
  },
  {
    title: 'Grounds and garden workers',
    category: 'Trade',
    img: '/images/garden.jpg',
    alt: 'Landscaped garden maintained by grounds staff'
  },
  {
    title: 'Virtual assistants',
    category: 'Remote',
    img: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=700',
    alt: 'Virtual assistant working online'
  },
  {
    title: 'Data entry clerks',
    category: 'Remote',
    img: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=700',
    alt: 'Data entry professional at computer'
  },
  {
    title: 'Social media coordinators',
    category: 'Remote',
    img: 'https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=700',
    alt: 'Social media coordinator managing content'
  },
  {
    title: 'Graphic designers',
    category: 'Remote',
    img: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=700',
    alt: 'Graphic designer workspace'
  },
  {
    title: 'Caregivers',
    category: 'Domestic',
    img: '/images/caregiver (1).jpg',
    alt: 'Caregiver supporting an elderly client'
  },
  {
    title: 'Child minders',
    category: 'Domestic',
    img: '/images/childnanny.jpg',
    alt: 'Child minder caring for a baby'
  },
  {
    title: 'Housekeepers and cleaners',
    category: 'Domestic',
    img: '/images/cleaners.jpg',
    alt: 'Cleaning team in uniform'
  },
  {
    title: 'Pet care assistants',
    category: 'Domestic',
    img: '/images/dog.jpg',
    alt: 'Pet care assistant with a dog'
  }
];

function isLocalRasterImage(src: string) {
  return /^\/images\/.+\.(jpe?g|png)$/i.test(src);
}

function toWebpPath(src: string) {
  return src.replace(/\.(jpe?g|png)$/i, '.webp');
}

export default function ServicesGallery() {
  const [activeFilter, setActiveFilter] = useState<ServiceCategory | 'All'>('All');

  const filteredCategorySummaries = useMemo(
    () => (activeFilter === 'All'
      ? categorySummaries
      : categorySummaries.filter((summary) => summary.category === activeFilter)),
    [activeFilter]
  );

  const filteredItems = useMemo(
    () => (activeFilter === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter)),
    [activeFilter]
  );

  return (
    <div className="services-section">
      <div className="services-heading">
        <p className="services-kicker">Talent Categories</p>
        <h2>Build your team with talent across every service category.</h2>
        <p className="services-subheading">
          We source professionals for corporate operations, trade projects, remote support,
          and household services so your hiring options are never limited.
        </p>
      </div>

      <div className="services-filter-row" role="tablist" aria-label="Filter roles by category">
        {filterOptions.map((option) => (
          <button
            type="button"
            key={option}
            className={`services-filter-btn ${activeFilter === option ? 'active' : ''}`}
            onClick={() => setActiveFilter(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="services-overview-grid">
        {filteredCategorySummaries.map((summary) => (
          <article key={summary.category} className="services-overview-card">
            <p className="services-overview-label">{summary.category}</p>
            <a href={summary.href} className="services-overview-link">View More</a>
            <p>{summary.description}</p>
          </article>
        ))}
      </div>

      <div className="services">
        {filteredItems.map((item) => (
          <article className="services-cell" key={`${item.category}-${item.title}`}>
            {isLocalRasterImage(item.img) ? (
              <picture>
                <source srcSet={toWebpPath(item.img)} type="image/webp" />
                <img
                  src={item.img}
                  alt={item.alt}
                  className="services-cell_img"
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                />
              </picture>
            ) : (
              <img
                src={item.img}
                alt={item.alt}
                className="services-cell_img"
                loading="lazy"
                fetchPriority="low"
                decoding="async"
              />
            )}
            <div className="services-cell_overlay" />
            <span className="services-cell_category">{item.category}</span>
            <div className="services-cell_text">{item.title}</div>
          </article>
        ))}
      </div>
    </div>
  );
}