import React, { useEffect } from 'react'
import Header from '../components/Header/Header'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Footer from '../components/Footer/Footer'
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      easing: 'ease-in-out', 
      once: true,  
    });
  }, []);
  return (
    <div>
        <section className='main_first'>
          <div data-aos="fade-down">
          <Header/>
          </div>
          <div className="text">
            <h1 data-aos="fade-up">Everything is open with IT TOUR</h1>
          </div>
        </section>
        <section className="simple_section">
          <h1 data-aos="fade-up">IT TOUR — bu qulaylik, ishonch va unutilmas sayohatlar demakdir. Biz sizga dunyoning eng go‘zal maskanlariga sifatli va hamyonbop sayohatlarni taklif qilamiz.</h1>
        </section>
        <section className="half_image"  data-aos="fade-up-right">
          <div className="img_side">
            <img className='img' src="./half1.jpg" alt="" />
          </div>
          <div className="text_side">
            <h1>Sayohat qilish nega muhim?</h1>
            <p>Sayohat — bu shunchaki dam olish emas, balki yangi tajriba, yangi dunyoqarash va hayotga boshqacha nigohdir. Sayohat orqali inson stressdan xalos bo‘ladi, o‘ziga bo‘lgan ishonchi ortadi va yangi madaniyatlarni o‘rganadi.

Bugungi kunda sayohat qilish har qachongidan ham oson. Professional tour kompaniyalar yordamida siz ortiqcha tashvishlarsiz, qulay va xavfsiz tarzda dam olishingiz mumkin. Eng muhimi — to‘g‘ri yo‘nalish va ishonchli hamkorni tanlash.</p>
            <button>Ko'proq organish</button>
          </div>
        </section>
        <section className="half_image reverse"  data-aos="fade-up-left">
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
        <section className="text1">
          <div className="up" data-aos="zoom-out-right">
            <h1>Sayohat loyihangizni bizga ishonib topshiring!</h1>
            <button>Ko'proq o'rganish</button>
          </div>
          <div className="low" data-aos="zoom-out-left">
            <p>Har yili IT TOUR jamoasi 500 dan xaridorlanri chet elga jonatadi. Bizning jamoamiz sizga ishonch va comfortni kafolatlaydi. Bizga ishoning va biz sizning ishonchngizni oqlaymiz.</p>
          </div>
        </section>
        <section className="connect1">
          <div className="connect"  data-aos="fade-up">
          <h1>
          Qo'shimcha ma'lumot o'rganmoqchi bo'lsangiz biz bilan bog'laning.
          </h1>
          <p>
          Maxsus takliflarimiz, yangi mahsulotlarimiz va eksklyuziv aksiyalarimiz haqida xabardor bo'lib turing va o'tkazib yubormang!.
          </p>
          <button className='or'>
            O'rganish
          </button>
          </div>
        </section>
        <div data-aos="zoom-in">
        <Footer/> 
        </div>
    </div>
  )
}

export default Home