import React from "react";
import Navbar from "@/components/Navbar.jsx";
import Header from "@/components/Header.jsx";
import TherepistList from "@/components/TherepistList.jsx"
import Header2 from "@/components/Header2"
const index = () => {
  return (
    <div>
      <Navbar />
      <Header2 />
      {/* <Header
        title="Our Therapists"
        breadcrumbs={["Home", "Our Therapists"]}
      /> */}
      <TherepistList />
    </div>
  );
};

export default index;
