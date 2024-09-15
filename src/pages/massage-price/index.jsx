import React from "react";
import Navbar from "@/components/Navbar.jsx";
import Header2 from "@/components/Header2";
import PricingCard from "@/components/PricingCard"
import Footer from "@/components/Footer"
import MassageSection from "../../components/MassageSection";
const index = () => {
  return (
    <div>
      <Navbar />
      {/* <Header2 /> */}
      <Header2 title="Massage & Price" backgroundImageUrl="/header-img-2.jpg" />
      <MassageSection />
      <PricingCard />
      <Footer />
    </div>
  );
};

export default index;
