import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const products = [
  {
    name: "GEOPLAN.AI",
    subtitle: "GEOgraphic Planning and Localized Analytics for Nusantara",
    businessBenefit:
      "Enhance decision-making with data-driven insights, enabling actionable steps for decision-makers and investors.",
    achievements: [
      "Integrate and enrich data from multiple sources.",
      "Implement advanced machine learning for granular-level predictions.",
      "Integrate Gen-AI-powered chatbots for seamless data communication.",
    ],
    image: "/GeoPlanGIF.gif",
  },
  {
    name: "TRACE.AI",
    subtitle: "Transparent Review and Cost Evaluation Powered by Gen AI",
    businessBenefit:
      "Detect price anomalies using integrated data, reducing price disputes and improving decision-making.",
    achievements: [
      "Automate manual processes with Gen-AI.",
      "Implement models to identify price anomalies.",
      "Deploy Gen-AI chatbots for data-driven decision support.",
    ],
    image: "/TraceAI.gif",
  },
  {
    name: "#FightOnlineGambling",
    subtitle: "Proactive Social Movement Powered by Gen-AI",
    businessBenefit:
      "Assist governments in identifying, analyzing, and reporting online gambling-related content on websites.",
    achievements: [
      "Develop web scraping tools to identify website content.",
      "Use Gen-AI to analyze and predict gambling-related content.",
      "Generate detailed reports for actionable insights.",
    ],
    image: "/LawanJudol.png",
  },
  {
    name: "Voice the Customer",
    subtitle: "Complaint Analysis with Gen AI",
    businessBenefit:
      "Analyze thousands of customer complaints, providing actionable insights to improve efficiency, accuracy, and customer retention.",
    achievements: [
      "Integrate multi-modal data (text, audio, video).",
      "Implement long-context analysis for actionable insights.",
    ],
    image: "/voc_gewin.jpg",
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-black to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Portfolio</h2>
        {products.map((product, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center mb-20 bg-black bg-opacity-50 rounded-2xl overflow-hidden shadow-lg`}
          >
            <div className="w-full md:w-1/2 p-8">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2 p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-blue-300 mb-2">{product.name}</h3>
                  <p className="text-gray-200 font-medium">{product.subtitle}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-blue-200 mb-2">Business Benefit</h4>
                  <p className="text-gray-200">{product.businessBenefit}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-blue-200 mb-3">How We Achieve It</h4>
                  <ul className="space-y-3">
                    {product.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-200">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

