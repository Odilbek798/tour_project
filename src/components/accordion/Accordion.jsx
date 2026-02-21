import { useState, useRef } from "react";
import "./Accordion.css";

const data = [
  {
    title: "Sayohatimni qanday bron qilsam bo‘ladi?",
    content: "Siz bizda onlayn bron qilsangiz boladi .Shuningdek, biz bilan telefon yoki Telegram orqali bog‘lanib ham bron qilish imkoniyati mavjud. Menejerimiz 24 soat ichida siz bilan bog‘lanadi va barcha tafsilotlarni tasdiqlaydi."
  },
  {
    title: "Nega aynan siz bizni tanlashingiz kerak?",
    content: "Biz ishonchli hamkor mehmonxonalar va aviakompaniyalar bilan ishlaymiz, qulay narxlar va 24/7 qo‘llab-quvvatlash xizmatini taqdim etamiz. Har bir mijoz uchun individual yondashuv va kafolatlangan xizmat sifatini ta’minlaymiz."
  },
  {
    title: "Sayohat tarkibiga nimalar kiradi??",
    content: "Paketga aviachipta, mehmonxona, transfer xizmati va sug‘urta kiradi. Ba’zi turlarda ekskursiyalar va gid xizmati ham mavjud. To‘liq ma’lumot tur tanlangandan so‘ng ko‘rsatiladi."
  },
  {
    title: "Bronni bekor qilish yoki o‘zgartirish mumkinmi?",
    content: "Ha, bekor qilish yoki o‘zgartirish mumkin. Shartlar tanlangan paketga bog‘liq. Batafsil ma’lumot uchun menejerimiz bilan bog‘lanishingiz mumkin."
  },
  {
    title: "Qanday to‘lov usullarini qabul qilasiz?",
    content: "Biz naqd pul, bank o‘tkazmasi, karta orqali to‘lov va onlayn to‘lov tizimlarini qabul qilamiz. Bo‘lib to‘lash imkoniyati ham mavjud"
  },
  {
    title: "Maxsus taklif yoki chegirmalar bormi??",
    content: "Ha, biz doimiy ravishda mavsumiy chegirmalar va aksiyalar taklif qilamiz. Eng so‘nggi takliflardan xabardor bo‘lish uchun bizni ijtimoiy tarmoqlarda kuzating."
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
