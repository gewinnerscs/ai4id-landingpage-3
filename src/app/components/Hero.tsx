import Link from "next/link"

export default function Hero() {
  return (
    <section className="flex items-center justify-center min-h-screen text-center px-4">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Revolutionizing Businesses with Cutting-Edge Gen AI Solutions
        </h1>
        <p className="font-mono text-xl md:text-2xl mb-8 bg-opacity-50 p-2 rounded inline-block">
          <span className="text-green-400">&gt;</span> Innovate. Transform. Empower to drive business impact
          <span className="animate-blink ml-1 text-green-400">█</span>
        </p>
        <Link
          href="#portfolio"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors inline-block"
        >
          Explore Our Portfolio
        </Link>
      </div>
    </section>
  )
}

