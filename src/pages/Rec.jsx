import React, { useEffect, useState } from "react";
import Cards from "../components/Cards/Cards";
import TextCard from "../components/TextCard";
import axios from 'axios';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Rec() {
  const [coutry, setCountry] = useState([])

  const getTours = async () => {
    const res = await axios.get("https://backend-iobr.onrender.com/api/countries")
    setCountry(res.data)
  }

  useEffect(() => {
    getTours()
  }, [])
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      easing: 'ease-in-out', 
      once: true,  
    });
  }, []);
  return(
    <div className="rec">
      <div className="upp" data-aos="fade-down">
      <Header/>
      </div>
      <div className="big_title">
        <h1 data-aos="fade-up">Recomendations</h1>
      </div>
      <div className="cards" data-aos="fade-up">
          {coutry.map((c) => (
      <TextCard
        key={c._id}
        text={c.description}
        title={c.name}
        route={`/tickets/${c._id}`}
        tags="Ko'rish"
      />
    ))}
      </div>
      <Footer/>
    </div>
  );
  
}

export default Rec;
