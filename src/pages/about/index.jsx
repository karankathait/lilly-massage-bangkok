import React from "react";
import Header from "@/components/Header.jsx";
import AboutUs1 from "@/components/AboutUs1.jsx";
import Navbar from "@/components/Navbar.jsx";
import OurHistory from "@/components/OurHistory.jsx"
import WhyUs from "@/components/WhyUs.jsx"
import Footer from "@/components/Footer.jsx"


const index = () => {
  return (
    <>
      <Navbar />
      <Header
        title="About Us"
        breadcrumbs={["Home", "About Us"]}
      />
      <AboutUs1 />
      <WhyUs />
      <OurHistory />
      <Footer />
    </>
  );
};

export default index;
