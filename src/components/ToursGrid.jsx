import TourCard from "./TourCard";
import "./ToursGrid.css";
import "./Hero.css"



const ToursGrid = () => {
  const tours = [
    {
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e",
      title: "Safari in Kenya",
      country: "Kenya",
      days: 10,
      price: 4890,
    },
    {
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
      title: "Botswana Luxury Safari",
      country: "Botswana",
      days: 8,
      price: 7320,
    },
    {
      image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2",
      title: "South Africa Adventure",
      country: "South Africa",
      days: 9,
      price: 3650,
    },
    {
      image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2",
      title: "South Africa Adventure",
      country: "South Africa",
      days: 9,
      price: 3650,
    },
    {
      image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2",
      title: "South Africa Adventure",
      country: "South Africa",
      days: 9,
      price: 3650,
    },
    {
      image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2",
      title: "South Africa Adventure",
      country: "South Africa",
      days: 9,
      price: 3650,
    },
   
  ];

  return (
    <div className="tours-grid">
      {tours.map((tour, i) => (
        <TourCard key={i} {...tour} />
      ))}
    </div>
  );
};

export default ToursGrid;
