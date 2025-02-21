"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      to: "contact@ai4indonesia.id",
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch {
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-[56px] leading-[1.1] font-extrabold mb-12 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent max-w-4xl mx-auto text-center font-geist-sans">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-[28px] leading-tight font-bold text-white mb-4">Get in Touch</h3>
            <p className="text-[18px] leading-relaxed text-white mb-8">We would love to hear from you. Please fill out the form below or reach out to us using the contact information provided.</p>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="w-7 h-7 text-blue-400 mr-3" />
                <span className="text-[18px] text-white">contact@ai4indonesia.id</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-7 h-7 text-blue-400 mr-3" />
                <span className="text-[18px] text-white">+62 813 139 66682</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-7 h-7 text-blue-400 mr-3" />
                <span className="text-[18px] text-white">Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-[18px] font-medium text-white mb-2">
                Name
              </label>
              <input type="text" id="name" name="name" className="w-full px-4 py-3 bg-[#111111] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-[18px] font-medium text-white mb-2">
                Email
              </label>
              <input type="email" id="email" name="email" className="w-full px-4 py-3 bg-[#111111] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-[18px] font-medium text-white mb-2">
                Message
              </label>
              <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 bg-[#111111] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white" required></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
