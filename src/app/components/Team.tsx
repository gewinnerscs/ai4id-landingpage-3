import Image from "next/image";
import { Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Arda Putra Ryandika",
    role: "Gen-AI Engineer",
    image: "/arda.png",
    linkedin: "https://www.linkedin.com/in/ardaputra/",
    twitter: "x.com/ardaputra",
  },
  {
    name: "Gewinner Sinaga",
    role: "Product & Strategy",
    image: "/gewin.png",
    linkedin: "https://www.linkedin.com/in/gewinnersinaga/",
    twitter: "x.com/gewinnerscs",
  },
  {
    name: "Aries Fitriawan",
    role: "ML Engineer",
    image: "/aries.png",
    linkedin: "https://www.linkedin.com/in/ariesfitriawan/",
    twitter: "x.com/_ariesf",
  },
  {
    name: "Faisal Rasbihan",
    role: "Full-Stack Developer",
    image: "/faisal.png",
    linkedin: "https://www.linkedin.com/in/faisalrasbihan/",
    twitter: "x.com/faisalrasbihan",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-[56px] leading-[1.1] font-extrabold mb-12 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent max-w-4xl mx-auto text-center font-geist-sans">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-[#111111] rounded-lg p-8 shadow-lg transition-transform hover:scale-105 min-h-[400px] flex flex-col items-center justify-between">
              <div className="mt-6">
                <div className="mb-6 w-32 h-32 mx-auto relative overflow-hidden rounded-full">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" sizes="128px" quality={100} />
                </div>
                <h3 className="text-2xl font-semibold text-center text-white mb-3">{member.name}</h3>
                <p className="text-gray-400 text-center text-lg">{member.role}</p>
              </div>
              <div className="mb-6">
                <div className="flex justify-center space-x-6">
                  <a href={member.linkedin} className="text-blue-400 hover:text-blue-300 transition-colors">
                    <Linkedin className="w-7 h-7" />
                  </a>
                  <a href={member.twitter} className="text-blue-400 hover:text-blue-300 transition-colors">
                    <Twitter className="w-7 h-7" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
