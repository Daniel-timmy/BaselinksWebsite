import React from "react";
import HeroSection from "../components/homepage/HeroSection";
import Awards from "../components/homepage/Awards";
import Header from "../components/Header";
import Partners from "../components/homepage/Partners";
import Achievements from "../components/homepage/Achievements";
import Testimonials from "../components/homepage/Testimonials";
import Projects from "../components/homepage/Projects";
import Services from "../components/homepage/Services";
import CallToAction from "../components/homepage/CallToAction";
import Newsletter from "../components/homepage/Newsletter";
import Footer from "../components/Footer";
import Blog from "../components/homepage/Blog";

const Homepage = () => {
  return (
    <div>
      <div className="fixed w-full z-50 top-0">
        <Header />
      </div>{" "}
      <HeroSection />
      <Awards />
      <Partners />
      <Achievements />
      <Testimonials />
      <Projects />
      <Services />
      <CallToAction />
      <Newsletter />
      {/* <Blog /> */}
      <Footer />
    </div>
  );
};

export default Homepage;
