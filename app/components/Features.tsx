import { Zap, Shield, Rocket, Cpu } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "AI-Powered Insights",
    description:
      "Harness the power of artificial intelligence to extract valuable insights from your data, driving informed decision-making across your organization.",
  },
  {
    icon: Shield,
    title: "Enhanced Security",
    description:
      "Protect your business with our advanced AI-driven security solutions, identifying and mitigating potential threats before they become problems.",
  },
  {
    icon: Rocket,
    title: "Accelerated Growth",
    description:
      "Leverage our AI tools to identify new opportunities, optimize operations, and accelerate your business growth in today's competitive landscape.",
  },
  {
    icon: Cpu,
    title: "Intelligent Automation",
    description:
      "Streamline your processes with our smart automation solutions, freeing up your team to focus on high-value tasks and innovation.",
  },
]

export default function Features() {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <feature.icon className="w-8 h-8 text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

