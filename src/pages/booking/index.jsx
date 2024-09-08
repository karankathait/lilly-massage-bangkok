import React from "react";
import Booking from "@/components/Booking.jsx";
import Navbar from "@/components/Navbar.jsx";
import Header from "@/components/Header.jsx";


const index = () => {
  return (
    <>
      <Navbar />
      <Header
        title="Our Therapists"
        breadcrumbs={["Home", "Our Therapists"]}
      />
      <Booking />
    </>
  );
};

export default index;
