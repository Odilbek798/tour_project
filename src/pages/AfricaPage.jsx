import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import ToursGrid from "../components/ToursGrid";

const AfricaPage = () => {
  return (
    <>
      <Header />
      <h1 style={{ textAlign: "center", marginTop: "40px" }}>
        Africa Tours
      </h1>
      <ToursGrid />
      <Footer />
    </>
  );
};

export default AfricaPage;
