import { useState, useRef } from "react";
// import "./accordion.css";

const data = [
  {
    title: "Klientlar tomonidan o'rtacha baholnish",
    content: "9/10  Klientlar tomidan"
  },
  {
    title: "Klientlar tomidan bu tur boyicha kommentlar soni",
    content: "11 ta"
  },
  {
    title: "Taklif etiladigan chegirmalar",
    content: "10%"
  },
  {
    title: "Sayohat uchun tavsiya etiladigan fasl",
    content: "Bahor va kuz"
  },
  {
    title: "Davlatning saytimizdagi kodi",
    content: "+ 1"
  },
];

export default function Accordion2() {
  const [openIndex, setOpenIndex] = useState(null);
  const refs = useRef([]);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container">
      {data.map((item, index) => (
        <div className="card1" key={index}>
          <div className="card-header" onClick={() => toggle(index)}>
            <h3>{item.title}</h3>
            <button className={`btn ${openIndex === index ? "open" : ""}`}>
              ↓
            </button>
          </div>

          <div
            className="slide-wrapper"
            style={{
              height:
                openIndex === index
                  ? refs.current[index]?.scrollHeight + "px"
                  : "0px"
            }}
          >
            <div
              className="slide-content"
              ref={(el) => (refs.current[index] = el)}
            >
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
