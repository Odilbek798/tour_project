import "./TourCard.css";

const TourCard = ({ image, title, country, days, price }) => {
  return (
    <div className="tour-card">
      <div className="tour-img">
        <img src={image} alt={title} />
        <span className="tour-country">{country}</span>
      </div>

      <div className="tour-content">
        <h3>{title}</h3>

        <div className="tour-details">
          <span>🗓 {days} days</span>
        </div>

        <div className="tour-price">
          From <strong>${price}</strong>
        </div>

        <button className="tour-btn">View Tour</button>
      </div>
    </div>
  );
};

export default TourCard;
