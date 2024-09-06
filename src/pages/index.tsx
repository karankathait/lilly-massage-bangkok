import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import WellnessTherapy from '@/components/WellnessTherapy.jsx'
import Footer from "@/components/Footer.jsx"
import WhyUs from "@/components/WhyUs.jsx"
import Gallery from '@/components/Gallery.jsx'
import OurHistory from "@/components/OurHistory.jsx"
import Navbar from "@/components/Navbar.jsx"
import Header from "@/components/Header.jsx"
import StatsSection from "@/components/StatsSection.jsx"
import ServicesSection from "@/components/ServicesSection.jsx"
import PromoBanner from "@/components/PromoBanner.jsx"
export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <ServicesSection />
      <StatsSection />
      <OurHistory />
      <PromoBanner />
      <WhyUs />
      <Gallery />
      <WellnessTherapy />
      <Footer />
    </main>
  );
}
