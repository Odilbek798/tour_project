
import Header from "../components/Header/Header";
import ToursGrid from "../components/ToursGrid";
import Hero from "../components/Hero";
import Footer from '../components/Footer/Footer'

const AfricaPage = () => {
  return (
    <>
      <Header />
     <Hero />
      <h1 style={{ textAlign: "center", marginTop: "40px" }}>
        Africa Tours
      </h1>
      <ToursGrid />
      <Footer />
    </>
  );
};


export default AfricaPage;

