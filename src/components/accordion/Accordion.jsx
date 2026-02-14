import { useState, useRef } from "react";
import "./accordion.css";

const data = [
  {
    title: "Comment puis-je réserver mon voyage ?",
    content: "Safarimni qanday band qilsam bo‘ladi?"
  },
  {
    title: "Pourquoi devrais-je réserver avec vous ?",
    content: "Nima uchun aynan siz bilan band qilishim kerak?"
  },
  {
    title: "Comment puis-je réserver mon voyage ?",
    content: "Safarimni qanday band qilsam bo‘ladi?"
  },
  {
    title: "Pourquoi devrais-je réserver avec vous ?",
    content: "Nima uchun aynan siz bilan band qilishim kerak?"
  },
  {
    title: "Comment puis-je réserver mon voyage ?",
    content: "Safarimni qanday band qilsam bo‘ladi?"
  },
  {
    title: "Pourquoi devrais-je réserver avec vous ?",
    content: "Nima uchun aynan siz bilan band qilishim kerak?"
  },
];

export default function Accordion() {
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
