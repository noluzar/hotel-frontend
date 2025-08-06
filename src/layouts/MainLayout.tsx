import React from "react";
import Hero from "../components/Hero";
import HotelHistory from "../components/HotelHistory";
import BookStay from "../components/BookStay";
import RoomsCarousel from "../components/RoomsCarousel";
import Newsletter from "../components/Newsletter";
import About from "../components/About";
import SpaSuite from "../components/SpaSuite";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout: React.FC = () => {
  return (
    <section id="/">
      <div className="md:relative">
        <div className="md:absolute md:w-[45%]">
          <Navbar />
        </div>
        <div>
          <Hero />
        </div>
        <div
          className="absolute bottom-20 md:bottom-4 md:mx-20 md:mb-8 md:w-[80%] w-full px-6"
        >
          <BookStay />
        </div>
      </div>
      <HotelHistory />
      <About />
      <RoomsCarousel />
      <SpaSuite />
      <Newsletter />
      <Footer />
    </section>
  );
};

export default MainLayout;
