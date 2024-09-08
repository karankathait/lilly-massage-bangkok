import React from "react";
import Navbar from "@/components/Navbar.jsx";
import Header from "@/components/Header.jsx";
import TherepistList from "@/components/TherepistList.jsx"
const index = () => {
  return (
    <div>
      <Navbar />
      <Header
        title="Our Therapists"
        breadcrumbs={["Home", "Our Therapists"]}
      />
      <TherepistList />
    </div>
  );
};

export default index;
