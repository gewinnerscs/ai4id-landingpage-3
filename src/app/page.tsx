import Header from "./components/Header";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import WhyChooseUs from "./components/WhyChooseUs";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <div className="relative overflow-hidden bg-black text-white min-h-screen">
        <AnimatedBackground />
        <div className="absolute inset-0 z-10">
          <Hero />
        </div>
      </div>
      <section id="solutions">
        <Solutions />
      </section>
      <WhyChooseUs />
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}
