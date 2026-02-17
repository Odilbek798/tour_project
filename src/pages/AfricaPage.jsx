
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import ToursGrid from "../components/ToursGrid";
import Hero from "../components/Hero";

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

