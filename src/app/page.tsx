import Header from "../../app/components/Header"
import Hero from "../../app/components/Hero"
import Solutions from "../../app/components/Solutions"
import WhyChooseUs from "../../app/components/WhyChooseUs"
import Portfolio from "../../app/components/Portfolio"
import Team from "../../app/components/Team"
import Contact from "../../app/components/Contact"
import Footer from "../../app/components/Footer"
import AnimatedBackground from "../../app/components/AnimatedBackground"

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
  )
}

