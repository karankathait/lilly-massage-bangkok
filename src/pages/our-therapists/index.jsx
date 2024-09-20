import React from "react";
import Navbar from "@/components/Navbar.jsx";
import Header from "@/components/Header.jsx";
import TherepistList from "@/components/TherepistList.jsx";
import Header2 from "@/components/Header2";
import Footer from "@/components/Footer.jsx";
const index = () => {
  return (
    <div>
      <Navbar />
      {/* <Header2 /> */}
      <Header2 title="Our Therapists" backgroundImageUrl="/header-img-2.jpg" />
      {/* <Header
        title="Our Therapists"
        breadcrumbs={["Home", "Our Therapists"]}
      /> */}
      <TherepistList />
      <Footer />
    </div>
  );
};

export default index;
