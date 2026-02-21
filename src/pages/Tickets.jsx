import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import TextCard from '../components/TextCard'
import Accordion from '../components/accordion/Accordion'
import Footer from '../components/Footer/Footer'

function Tickets() {

  

  return (
    <div className='tickets'>
      {/* <div className="first_section">
            <Header/>
            <h1>tdydrtufyfg</h1>
        </div> */}
      <section className='second'>
        <div data-aos="fade-down">
          <Header />
        </div>
        <div className="text">
          <h1 data-aos="fade-up">IT TOUR BILAN SAYOHAT QIL</h1>
        </div>
      </section>
      <section className="text_cards">

        

        {/* 
        <TextCard title="Mobil ilovamizni yuklab oling" text="App Store yoki Google Play Store’da mavjud.
Tours Chanteclerc ilovasi sayohat daftaringizni smartfon yoki planshetga yuklab olish imkonini beradi, shunda siz internetga ulanmasdan ham, xorijga qilgan sayohatingiz davomida istalgan vaqtda undan foydalana olasiz.

Bu elektron hujjatlar Yevropa yo‘nalishlari, uzoq mamlakatlar, shuningdek Shimoliy Amerikadagi ayrim marshrutlar va ba’zi kruiz paketlari uchun mavjud!"/>
        <TextCard title="Sayohat hujjatlaringiz" text="Sayohat hujjatlaringizni osonlik bilan oling — qog‘oz shaklida yoki mobil ilovamiz orqali.
Chipta, sayohatning batafsil marshruti va barcha muhim ma’lumotlar bir joyda jamlangan bo‘lib, sizga tashvishsiz sayohat qilish imkonini beradi."/>
        <TextCard title="Juftlash (xona bo‘lishish) dasturi" text="Yolg‘iz sayohat qilyapsizmi? Juft toping!
Agar bir kishilik xona narxi sizning byudjetingizga mos kelmasa, Tours Chanteclerc sizga qulay muqobilni taklif etadi: xonani boshqa sayohatchi bilan bo‘lishing, pulni tejang va yangi tanishlar orttiring."/>
        <TextCard title="Yevropa, dengiz va daryo kruizlari uchun “erkin yo‘llanma”" text="Sayohat qilishni xohlaysizmi va manzil siz uchun unchalik muhim emasmi?
Tanlangan davr ichida istalgan sanada jo‘nashga tayyormisiz?

Daryo kruizi, dengiz kruizi va Yevropa bo‘yicha “erkin yo‘llanma”larimizdan foydalaning — bu moslashuvchan sayohatchilar uchun eng yaxshi yechim.
"/>
        <TextCard title="Sayohat hikoyalari" text="Bizga sayohat haqidagi hikoyalaringizni yuboring va unutilmas lahzalar, hayratlanarli kashfiyotlar hamda qiziqarli voqealaringiz bilan bo‘lishing.

Sizning tajribangiz boshqa sayohatchilarni ilhomlantiradi va ularga ajoyib sarguzashtlar sari yo‘l ko‘rsatadi!"/>
        <TextCard title="Shuttle (transfer) xizmati" text="Yevropaga biz bilan yo‘l olyapsizmi? Ajoyib yangilik!

Endi biz Kvebekdagi bir nechta shaharlar va Monreal-Trudo aeroporti o‘rtasida qatnovchi yangi borib-kelish transfer xizmatini taklif qilamiz. Bu xizmat 2026-yilda Yevropaga yo‘l oladigan guruhli safarlar uchun mavjud.

Xizmat ko‘rsatiladigan shaharlar:
Kvebek, Trois-Rivières, Drummondville, Saint-Hyacinthe va Longueuil"/> */}

      </section>
      <section className="half_image" data-aos="fade-up-right">
        <div className="img_side">
          <img className='img' src="./tourists.webp" alt="" />
        </div>
        <div className="text_side">
          <h1>
            Fikringiz muhim!</h1>
          <p>Sayohatingizdan so'ng, iltimos, bir necha daqiqa vaqt ajratib, tajribangiz bilan o'rtoqlashing. Sizning fikr-mulohazalaringiz xizmatlarimizni yaxshilash va yanada unutilmas tajribalarni taqdim etishda juda muhimdir.</p>
          <button>Ko'proq organish</button>
        </div>
      </section>

      <section className="drop_text">
        <Accordion />
      </section>
      <section className="connect1">
        <div className="connect" data-aos="fade-up">
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ratione totam commodi quidem. Dignissimos, libero corporis odio eius minus ad..
          </p>
          <button>
            O'rganish
          </button>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Tickets