import { Cpu, MessageSquare, BugIcon as Spider } from "lucide-react"

const solutions = [
  {
    title: "Gen-AI Chatbot",
    icon: MessageSquare,
    impact: "Deliver personalized, real-time customer support to boost engagement and satisfaction.",
    howItWorks: "Powered by RAG, in-context learning, and seamless system integration for accurate, dynamic responses.",
  },
  {
    title: "Predictive Analytics",
    icon: Cpu,
    impact: "Optimize decisions with data-driven insights, reduce risks, and unlock growth opportunities.",
    howItWorks: "Custom ML models, advanced feature engineering, and real-time analytics for precise forecasting.",
  },
  {
    title: "Web Crawling",
    icon: Spider,
    impact: "Efficiently gather and analyze vast amounts of web data to drive informed business strategies.",
    howItWorks: "Scalable, intelligent crawling systems with advanced data extraction and processing capabilities.",
  },
]

export default function Solutions() {
  return (
    <section className="py-20 px-4 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">Our Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <solution.icon className="w-8 h-8 mr-3 text-blue-500" />
                <h3 className="text-xl font-semibold text-gray-800">{solution.title}</h3>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-medium mb-2 text-blue-600">Business Impact:</h4>
                <p className="text-gray-600">{solution.impact}</p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2 text-blue-600">How It Works:</h4>
                <p className="text-gray-600">{solution.howItWorks}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

