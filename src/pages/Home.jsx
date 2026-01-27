import React from 'react'
import Header from '../components/Header/Header'
const Home = () => {
  return (
    <div>
        <section className='main_first'>
          <Header/>
          <div className="text">
            <h1>Everything is open with IT TOUR</h1>
          </div>
        </section>
        <section>
          /card/
        </section>
        <section className="simple_section">
          <h1>IT TOUR — bu qulaylik, ishonch va unutilmas sayohatlar demakdir. Biz sizga dunyoning eng go‘zal maskanlariga sifatli va hamyonbop sayohatlarni taklif qilamiz.</h1>
        </section>
        <section className="half_image">
          <div className="img_side">
            <img src="./half1.jpg" alt="" />
          </div>
          <div className="text_side">
            <h1>Sayohat qilish nega muhim?</h1>
            <p>Sayohat — bu shunchaki dam olish emas, balki yangi tajriba, yangi dunyoqarash va hayotga boshqacha nigohdir. Sayohat orqali inson stressdan xalos bo‘ladi, o‘ziga bo‘lgan ishonchi ortadi va yangi madaniyatlarni o‘rganadi.

Bugungi kunda sayohat qilish har qachongidan ham oson. Professional tour kompaniyalar yordamida siz ortiqcha tashvishlarsiz, qulay va xavfsiz tarzda dam olishingiz mumkin. Eng muhimi — to‘g‘ri yo‘nalish va ishonchli hamkorni tanlash.</p>
            <button>Ko'proq organish</button>
          </div>
        </section>
        <section className="half_image reverse">
          <div className="img_side">
            <img src="./half2.jpg" alt="" />
          </div>
          <div className="text_side">
            <h1>Sayohat — bu investitsiya</h1>
            <p>Sayohatga sarflangan pul hech qachon behuda ketmaydi. Siz yangi bilim, kuch va ilhom bilan qaytasiz. Bu esa ishda, hayotda va munosabatlarda ijobiy o‘zgarishlarga olib keladi.

Bugunoq sayohatingizni rejalashtiring — ertangi xotiralar bugundan boshlanadi 🌍✈️</p>
            <button>Ko'proq organish</button>
          </div>
        </section>
        <section className='scroll'>
          <div className="mini_block">
            <h2>Dunyo sizni kutmoqda!
Biz bilan qulay, ishonchli va unutilmas sayohatlarni kashf eting. </h2>
            <button>Ko'proq organish</button>
          </div>
        </section>
        <section className="text">
          <div className="Up">
            <h1>Sayohat loyihangizni bizga ishonib topshiring!</h1>
            <button>Ko'proq o'rganish</button>
          </div>
          <div className="low">
            <p>Har yili IT TOUR jamoasi 500 dan xaridorlanri chet elga  . Ushbu klub eng yaxshi hamkorlarimizning sadoqatini va ish faoliyatini taqdirlaydi.</p>
          </div>
        </section>
    </div>
  )
}

export default Home