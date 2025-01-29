import { Brain, LineChart, Settings } from "lucide-react"

const benefits = [
  {
    icon: Brain,
    title: "Cutting-Edge Technology",
    description: "Leverage the power of Gen-AI and machine learning for smarter solutions.",
  },
  {
    icon: LineChart,
    title: "Actionable Insights",
    description: "Turn data into decisions that drive results.",
  },
  {
    icon: Settings,
    title: "Tailored Solutions",
    description: "Customized tools to meet your unique business needs.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gray-900 hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-6 relative">
                <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <benefit.icon className="w-8 h-8 text-blue-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-400">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

