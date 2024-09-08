import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import WellnessTherapy from '@/components/WellnessTherapy.jsx'
import Footer from "@/components/Footer.jsx"
import Gallery from '@/components/Gallery.jsx'
import OurHistory from "@/components/OurHistory.jsx"
import Navbar from "@/components/Navbar.jsx"
import ServicesSection from "@/components/ServicesSection.jsx"
import PromoBanner from "@/components/PromoBanner.jsx"
import HeroSection1 from "@/components/HeroSection1.jsx"
import StatsSection from "@/components/StatsSection.jsx"
export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection1 />
      <ServicesSection />
      <Gallery />
      <StatsSection />
      <PromoBanner />
      <WellnessTherapy />
      <Footer />
    </main>
  );
}
