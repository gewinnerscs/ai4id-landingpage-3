import { Bot, Brain, Search, MessageSquare, BrainCircuit, Database, Network, Sparkles, Cpu } from "lucide-react";
import Image from "next/image";

const solutions = [
  {
    title: "Gen-AI Chatbot",
    icon: Bot,
    image: "/AI_Chatbot.jpg",
    description: (
      <>
        Deliver <span className="font-bold text-white">personalized, real-time customer support</span> to boost engagement and satisfaction. Powered by <span className="font-bold text-white">RAG, in-context learning</span>, and seamless
        system integration.
      </>
    ),
  },
  {
    title: "Predictive Analytics",
    icon: BrainCircuit,
    image: "/PredictiveAnalytics.jpg",
    description: (
      <>
        Optimize decisions with <span className="font-bold text-white">data-driven insights</span>, reduce risks, and unlock growth opportunities. Custom <span className="font-bold text-white">ML models</span> and advanced feature
        engineering.
      </>
    ),
  },
  {
    title: "Web Crawling",
    icon: Search,
    image: "/WebCrawling.jpg",
    description: (
      <>
        Efficiently <span className="font-bold text-white">gather and analyze vast amounts</span> of web data to drive informed business strategies. <span className="font-bold text-white">Scalable, intelligent</span> crawling systems with
        advanced processing.
      </>
    ),
  },
];

export default function Solutions() {
  return (
    <section className="py-12 px-4 bg-black font-sans">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-[56px] leading-[1.1] font-extrabold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent max-w-4xl mx-auto font-geist-sans">Our Solutions for Your Business</h2>
          <p className="text-[24px] leading-[1.6] font-normal text-white max-w-2xl mx-auto font-geist-sans">Empowering businesses with cutting-edge AI solutions that drive growth and innovation</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {solutions.map((solution, index) => (
            <div key={index} className="relative group">
              <div className="rounded-2xl bg-[#111111] p-5 h-full transition-all duration-300 hover:bg-[#161616] flex flex-col">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-lg p-2.5">
                      <solution.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-[28px] leading-tight font-bold text-white font-geist-sans">{solution.title}</h3>
                  </div>
                  <p className="text-[18px] leading-relaxed text-gray-300 font-normal mb-5 font-geist-sans">{solution.description}</p>
                  <div className="mt-auto w-[90%] mx-auto">
                    <div className="relative w-full h-[220px] rounded-2xl overflow-hidden transition-all duration-300">
                      <Image
                        src={solution.image}
                        alt={solution.title}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-2xl"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index === 0}
                        quality={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
