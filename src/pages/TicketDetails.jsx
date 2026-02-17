import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const TicketDetails = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);

  const getTourById = async () => {
    try {
      const res = await axios.get(
        `https://backend-iobr.onrender.com/api/countries/${id}`
      );
      setTour(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTourById();
  }, [id]);

  if (!tour) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "40px" }}>
      <h1>{tour.name}</h1>

      <img
        src={tour.image}
        alt={tour.name}
        style={{ width: "400px", borderRadius: "10px" }}
      />

      <p><strong>Description:</strong> {tour.description}</p>
      <p><strong>Price:</strong> {tour.price} {tour.currency}</p>
      <p><strong>Duration:</strong> {tour.durationDays} days</p>
      <p><strong>Rating:</strong> {tour.rating}</p>
      <p><strong>Reviews Count:</strong> {tour.reviewsCount}</p>
      <p><strong>Discount:</strong> {tour.discount}%</p>
      <p><strong>Best Season:</strong> {tour.bestSeason}</p>
      <p><strong>Country Code:</strong> {tour.countryCode}</p>
      <p><strong>Featured:</strong> {tour.isFeatured ? "Yes" : "No"}</p>
      <p><strong>Active:</strong> {tour.isActive ? "Yes" : "No"}</p>

      <p><strong>Created At:</strong> {new Date(tour.createdAt).toLocaleString()}</p>
      <p><strong>Updated At:</strong> {new Date(tour.updatedAt).toLocaleString()}</p>

      <h3>Tags:</h3>
      <ul>
        {tour.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>

      <h3>Tour Types:</h3>
      <ul>
        {tour.tourTypes.map((type, index) => (
          <li key={index}>{type}</li>
        ))}
      </ul>

      <h3>Available Countries:</h3>
      <ul>
        {tour.availableCountries.map((country, index) => (
          <li key={index}>{country}</li>
        ))}
      </ul>

      <h3>Gallery:</h3>
      <div style={{ display: "flex", gap: "10px" }}>
        {tour.gallery.map((img, index) => (
          <img key={index} src={img} alt="" width="100" />
        ))}
      </div>

      <h3>Reviews:</h3>
      <ul>
        {tour.reviews.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>

      <h3>Bookings:</h3>
      <ul>
        {tour.bookings.map((booking, index) => (
          <li key={index}>{booking}</li>
        ))}
      </ul>

      <h3>Meta Keywords:</h3>
      <ul>
        {tour.metaKeywords.map((keyword, index) => (
          <li key={index}>{keyword}</li>
        ))}
      </ul>
    </div>
  );
};

export default TicketDetails;
