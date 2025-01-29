import Image from "next/image"
import { Linkedin, Twitter } from "lucide-react"

const teamMembers = [
  {
    name: "Arda Putra Ryandika",
    role: "Co-Founder & CEO",
    image: "/arda.png",
    linkedin: "https://www.linkedin.com/in/ardaputra/",
    twitter: "x.com/ardaputra",
  },
  {
    name: "Gewinner Sinaga",
    role: "Co-Founder & CTO",
    image: "/gewin.png",
    linkedin: "https://www.linkedin.com/in/gewinnersinaga/",
    twitter: "#",
  },
  {
    name: "Aries Fitriawan",
    role: "Co-Founder & COO",
    image: "/aries.png",
    linkedin: "https://www.linkedin.com/in/ariesfitriawan/",
    twitter: "#",
  },
  {
    name: "Faisal Rasbihan",
    role: "Co-Founder & CFO",
    image: "/faisal.png",
    linkedin: "https://www.linkedin.com/in/faisalrasbihan/",
    twitter: "x.com/faisalrasbihan",
  },
]

export default function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6 shadow-lg transition-transform hover:scale-105">
              <div className="mb-4">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="rounded-full mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">{member.name}</h3>
              <p className="text-gray-600 text-center mb-4">{member.role}</p>
              <div className="flex justify-center space-x-4">
                <a href={member.linkedin} className="text-blue-600 hover:text-blue-800 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href={member.twitter} className="text-blue-400 hover:text-blue-600 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

