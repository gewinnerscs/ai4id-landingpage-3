"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const products = [
  {
    name: "GEOPLAN.AI",
    subtitle: "GEOgraphic Planning and Localized Analytics for Nusantara",
    businessBenefit: "Enhance decision-making with data-driven insights, enabling actionable steps for decision-makers and investors.",
    achievements: ["Integrate and enrich data from multiple sources.", "Implement advanced machine learning for granular-level predictions.", "Integrate Gen-AI-powered chatbots for seamless data communication."],
    image: "/GeoPlanGIF.gif",
  },
  {
    name: "TRACE.AI",
    subtitle: "Transparent Review and Cost Evaluation Powered by Gen AI",
    businessBenefit: "Detect price anomalies using integrated data, reducing price disputes and improving decision-making.",
    achievements: ["Automate manual processes with Gen-AI.", "Implement models to identify price anomalies.", "Deploy Gen-AI chatbots for data-driven decision support."],
    image: "/TraceAI.gif",
  },
  {
    name: "#FightOnlineGambling",
    subtitle: "Proactive Social Movement Powered by Gen-AI",
    businessBenefit: "Assist governments in identifying, analyzing, and reporting online gambling-related content on websites.",
    achievements: ["Develop web scraping tools to identify website content.", "Use Gen-AI to analyze and predict gambling-related content.", "Generate detailed reports for actionable insights."],
    image: "/LawanJudol.png",
  },
  {
    name: "Voice the Customer",
    subtitle: "Complaint Analysis with Gen AI",
    businessBenefit: "Analyze thousands of customer complaints, providing actionable insights to improve efficiency, accuracy, and customer retention.",
    achievements: ["Integrate multi-modal data (text, audio, video).", "Implement long-context analysis for actionable insights."],
    image: "/voc_gewin.jpg",
  },
];

export default function Portfolio() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-[56px] leading-[1.1] font-extrabold mb-12 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent max-w-4xl mx-auto text-center font-geist-sans">Our Portfolio</h2>
        {products.map((product, index) => (
          <div
            key={index}
            className={`
              flex flex-col 
              ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} 
              items-center mb-20 
              bg-[#111111] 
              rounded-2xl 
              overflow-hidden 
              shadow-lg
              relative
              group
              transition-all
              duration-300
              hover:scale-[1.02]
              before:absolute
              before:inset-0
              before:p-[2px]
              before:bg-gradient-to-r
              before:from-purple-500
              before:via-pink-500
              before:to-blue-500
              before:rounded-2xl
              before:content-['']
              before:opacity-0
              before:transition-opacity
              hover:before:opacity-100
            `}
          >
            <div className="absolute inset-[1px] bg-[#111111] rounded-2xl z-0" />
            <div className="w-full md:w-1/2 p-4 relative z-10">
              <div className="relative w-full h-[500px] flex items-center justify-center">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="rounded-lg shadow-md object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={100}
                  style={{ objectFit: "contain", maxWidth: "100%", maxHeight: "100%" }}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-8 relative z-10">
              <div className="space-y-6">
                <div>
                  <h3 className="text-[28px] leading-tight font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-[18px] leading-relaxed text-white font-medium">{product.subtitle}</p>
                </div>

                <div>
                  <h4 className="text-[28px] leading-tight font-bold text-white mb-2">Business Benefit</h4>
                  <p className="text-[18px] leading-relaxed text-white">{product.businessBenefit}</p>
                </div>

                <div>
                  <h4 className="text-[28px] leading-tight font-bold text-white mb-3">How We Achieve It</h4>
                  <ul className="space-y-3">
                    {product.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-white mt-2 mr-2 flex-shrink-0" />
                        <span className="text-[18px] leading-relaxed text-white">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={scrollToContact}
                  className="px-6 py-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white rounded-full transition-all duration-300 hover:scale-105"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
