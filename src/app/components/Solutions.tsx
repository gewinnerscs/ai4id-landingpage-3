import { Cpu, MessageSquare, BugIcon as Spider } from "lucide-react";

const solutions = [
  {
    title: "Gen-AI Chatbot",
    icon: MessageSquare,
    description: "Deliver personalized, real-time customer support to boost engagement and satisfaction. Powered by RAG, in-context learning, and seamless system integration.",
  },
  {
    title: "Predictive Analytics",
    icon: Cpu,
    description: "Optimize decisions with data-driven insights, reduce risks, and unlock growth opportunities. Custom ML models and advanced feature engineering.",
  },
  {
    title: "Web Crawling",
    icon: Spider,
    description: "Efficiently gather and analyze vast amounts of web data to drive informed business strategies. Scalable, intelligent crawling systems with advanced processing.",
  },
];

export default function Solutions() {
  return (
    <section className="py-24 px-4 bg-black">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Solutions</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Empowering businesses with cutting-edge AI solutions that drive growth and innovation</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="relative group">
              <div className="rounded-3xl bg-[#111111] p-8 h-full transition-all duration-300 hover:bg-[#161616]">
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">{solution.title}</h3>
                <p className="text-gray-400 text-lg font-mono mb-12">{solution.description}</p>
                <div className="relative h-48">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-32 h-32 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-lg transform rotate-45 opacity-80">
                      <div className="absolute inset-0 flex items-center justify-center -rotate-45">
                        <solution.icon className="w-12 h-12 text-white" />
                      </div>
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
