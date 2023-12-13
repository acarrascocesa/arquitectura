// App.js
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ContactForm from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import ImageGrid from "./components/Proyects/ImgageGrid";
import p1 from "./assets/p1.png";
import p2 from "./assets/p2.png";
import p3 from "./assets/p3.png";
import p4 from "./assets/p4.png";
import p5 from "./assets/p5.png";


import p1pdf from "./assets/p1.pdf";
import p2pdf from "./assets/p2.pdf";
import p3pdf from "./assets/p3.pdf";
import p4pdf from "./assets/p4.pdf";
import p5pdf from "./assets/p5.pdf";


function App() {
  const items = [
    { image: p2, pdf: p2pdf },
    { image: p1, pdf: p1pdf },
    { image: p3, pdf: p3pdf },
    { image: p4, pdf: p4pdf },
    { image: p5, pdf: p5pdf },
    { image: p1, pdf: p1pdf },
    { image: p1, pdf: p1pdf },
    { image: p1, pdf: p1pdf },
  ];
  return (
    <>
      <Navbar />
      <Hero />
      <ImageGrid items={items} />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
