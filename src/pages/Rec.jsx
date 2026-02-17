import React, { useEffect, useState } from "react";
import Cards from "../components/Cards/Cards";
import TextCard from "../components/TextCard";
import axios from 'axios';
import Header from "../components/Header/Header";

function Rec() {
  const [coutry, setCountry] = useState([])

  const getTours = async () => {
    const res = await axios.get("https://backend-iobr.onrender.com/api/countries")
    setCountry(res.data)
  }

  useEffect(() => {
    getTours()
  }, [])
  return(
    <div className="rec">
      <Header/>
      <div className="cards">
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
    </div>
  );
  
}

export default Rec;
