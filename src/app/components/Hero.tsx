import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex items-center justify-center h-[85vh] text-center">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">Revolutionizing Businesses with Cutting-Edge Gen AI Solutions</h1>
          <p className="font-mono text-2xl md:text-3xl mb-8 bg-opacity-50 p-2 rounded inline-block">
            <span className="text-purple-500">&gt;</span> Innovate. Transform. Empower to drive business impact
            <span className="animate-blink ml-1 text-purple-500">█</span>
          </p>
          <Link
            href="#portfolio"
            className="text-xl md:text-2xl font-bold py-4 px-8 rounded-full inline-block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white transition-all duration-300 hover:scale-105"
          >
            Explore Our Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
