import Footer from "@/app/_components/_layout/Footer";
import Header from "@/app/_components/_layout/Header";
import Hero from "@/app/_components/_sections/Hero";
import HowItWorks from "@/app/_components/_sections/HowItWorks";
import HowItWorksCards from "@/app/_components/_sections/HowItWorksCards";
import AboutMyService from "@/app/_components/_sections/MyService";
import Presentation from "@/app/_components/_sections/Presentation";

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
