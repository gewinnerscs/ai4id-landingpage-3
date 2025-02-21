import { Brain, LineChart, Settings, Network, TrendingUp, Target, Wallet, Zap, ArrowUp, ChevronRight } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: (
      <>
        Cutting-Edge
        <br />
        Technology
      </>
    ),
    description: (
      <>
        <span className="text-[20px] text-gray-300">Leverage the power of</span> <span className="text-[20px] font-semibold text-white">Gen-AI and machine learning</span>{" "}
        <span className="text-[20px] text-gray-300">for smarter solutions</span>
      </>
    ),
    metric: {
      icon: TrendingUp,
      label: "Process Efficiency",
      value: (
        <div className="flex items-center">
          <ArrowUp className="w-10 h-10 text-white mr-2" />
          <span className="text-[40px]">40%</span>
        </div>
      ),
    },
  },
  {
    icon: LineChart,
    title: (
      <>
        Actionable
        <br />
        Insights
      </>
    ),
    description: (
      <>
        <span className="text-[20px] text-gray-300">Turn data into decisions with</span> <span className="text-[20px] font-semibold text-white">AI-powered analytics</span>{" "}
        <span className="text-[20px] text-gray-300">for better results</span>
      </>
    ),
    metric: {
      icon: Target,
      label: "Decision Accuracy",
      value: (
        <div className="flex items-center">
          <ChevronRight className="w-10 h-10 text-white mr-2" />
          <span className="text-[40px]">70%</span>
        </div>
      ),
    },
  },
  {
    icon: Settings,
    title: (
      <>
        Tailored
        <br />
        Solutions
      </>
    ),
    description: (
      <>
        <span className="text-[20px] font-semibold text-white">AI-powered tools</span> <span className="text-[20px] text-gray-300">designed for your unique business needs</span>
      </>
    ),
    metric: {
      icon: Wallet,
      label: "Cost Reduction",
      value: (
        <div className="flex items-center">
          <ArrowUp className="w-10 h-10 text-white mr-2" />
          <span className="text-[40px]">30%</span>
        </div>
      ),
    },
  },
  {
    icon: Network,
    title: (
      <>
        Seamless
        <br />
        Integration
      </>
    ),
    description: (
      <>
        <span className="text-[20px] text-gray-300">Solutions that</span> <span className="text-[20px] font-semibold text-white">integrate effortlessly</span> <span className="text-[20px] text-gray-300">with your systems</span>
      </>
    ),
    metric: {
      icon: Zap,
      label: "Implementation Time",
      value: (
        <div className="flex items-center">
          <ChevronRight className="w-10 h-10 text-white mr-2" />
          <span className="text-[40px]">40%</span>
        </div>
      ),
    },
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 bg-black text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-[56px] leading-[1.1] font-extrabold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent max-w-4xl mx-auto font-geist-sans">Why Choose Us?</h2>
          <p className="text-[24px] leading-[1.6] font-normal text-white max-w-2xl mx-auto font-geist-sans">Empowering your business with innovative AI solutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="group p-5 rounded-2xl bg-[#111111] hover:bg-[#161616] transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex flex-col items-center text-center h-full">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-[24px] font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-[16px] leading-relaxed text-gray-300 mb-6">{benefit.description}</p>
                <div className="mt-auto flex flex-col items-center">
                  <benefit.metric.icon className="w-7 h-7 text-gray-400 mb-2" />
                  <p className="text-[20px] font-bold text-white mb-1">{benefit.metric.label}</p>
                  <p className="text-[32px] font-extrabold text-white">{benefit.metric.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
