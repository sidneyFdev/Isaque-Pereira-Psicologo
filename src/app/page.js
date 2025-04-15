import Footer from "@/app/_components/layout/Footer";
import Header from "@/app/_components/layout/Header";
import Hero from "@/app/_components/sections/Hero";
import HowItWorks from "@/app/_components/sections/HowItWorks";
import HowItWorksCards from "@/app/_components/sections/HowItWorksCards";
import AboutMyService from "@/app/_components/sections/MyService";
import Presentation from "@/app/_components/sections/Presentation";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Presentation />
      <HowItWorks />
      <HowItWorksCards />
      <AboutMyService />
      <Footer />
    </div>
  );
}
