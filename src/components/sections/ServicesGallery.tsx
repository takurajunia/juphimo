import '../../styles/components.css'; // Assuming your styles are here

export default function ServicesGallery() {
  const galleryItems = [
    { title: "Care givers", img: "/images/caregiver (1).jpg", alt: "care giving" },
    { title: "Cleaners", img: "/images/cleaners.jpg", alt: "cleaning" },
    { title: "Dog groomers", img: "/images/dog groomer.jpeg", alt: "dog grooming" }, // Updated path to match uploaded files
    { title: "Waiters & waitresses", img: "/images/waitress.jpg", alt: "waiters" },
    { title: "Chefs", img: "/images/chef.jpg", alt: "chefs" },
    { title: "Child minders", img: "/images/childnanny.jpg", alt: "child minders" },
    { title: "Shop Assistant", img: "/images/shopassistant.jpg", alt: "shop assistant" }
  ];

  return (
    <div className="services-section">
      <div className="services-heading">
        <h1>Are you looking for someone reliable and with experience to get all your work done? Juphimo Consultancy has all the workers you need!!! Services on offer below.</h1>
      </div>

      <div className="services">
        {galleryItems.map((item, index) => (
          <div className="services-cell" key={index}>
            <img src={item.img} alt={item.alt} className="services-cell_img" />
            <div className="services-cell_text">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}