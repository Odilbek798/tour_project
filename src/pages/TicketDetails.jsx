import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Accordion from "../components/accordion2/Accordion2";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const TicketDetails = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);

  const getTourById = async () => {
    try {
      const res = await axios.get(
        `https://backend-iobr.onrender.com/api/countries/${id}`
      );
      setTour(res.data);
      console.log(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTourById();
  }, [id]);

  if (!tour)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-2xl text-gray-500 animate-pulse">Loading...</div>
      </div>
    );

  return (
    <div>
  <div className="main_section" style={{
    backgroundImage: `url(${tour.mainImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}>
    <div className="head">
      <Header/>
    </div>
        <div className="titlee">
        <h1>{tour.title}</h1>
        <p>{tour.continent} continent</p>
      </div> 

  <div className="cardd lll">
    <img src={tour.mainImage} alt="" />
    <div className="text_s">
    <div>
      <p>{tour.durationDays} days</p>
      <p>20 times food</p>
      <p>Hotel</p>
    </div>
    <span className="line"></span>
    <div>
      <p>{tour.price} <span>{tour.currency}</span></p>
    </div>

    </div>
  </div>
    {/* <div className="cardd">
      <h1>{tour.title}</h1>
      <p>{tour.continent} • {tour.slug}</p>
    </div> */}
  </div>

  {/* Badges */}
  <div>
    {tour.isFeatured && (
      <button>⭐️ Featured</button>
    )}
    {tour.isActive && (
      <button className="paddingss" > Active</button>
    )}
    {tour.tourTypes?.map((type, i) => (
      <button className="paddings" key={i}>
        {type}
      </button>
    ))}
  </div>

  {/* Info Cards */}
  
  <div>
    <Accordion/>
  </div>

  {/* Description */}
  <div className="half">
    <div className="imagge">
      <img src="/africa.jpg" alt="" />
    </div>
    <div className="desc">
      <h2>Description</h2>
      <p>{tour.description}</p>
    </div>
  </div>
  
  <section className="half_image reverse"  >
          <div className="img_side">
            <img src="/half2.jpg" alt="" />
          </div>
          <div className="text_side">
            <h1>Sayohatingiz maroqli bo'lsin</h1>
            <p>Sayohatga sarflangan pul hech qachon behuda ketmaydi. Siz yangi bilim, kuch va ilhom bilan qaytasiz. Bu esa ishda, hayotda va munosabatlarda ijobiy o‘zgarishlarga olib keladi.

Bugunoq sayohatingizni rejalashtiring — ertangi xotiralar bugundan boshlanadi 🌍✈️</p>
            <button>Ko'proq organish</button>
          </div>
        </section>


  {/* <div>
    <p>Created: {new Date(tour.createdAt).toLocaleString()}</p>
    <p>Updated: {new Date(tour.updatedAt).toLocaleString()}</p>
  </div> */}
  <Footer/>
</div>

  );
};

export default TicketDetails;
