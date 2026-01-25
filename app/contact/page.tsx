"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Create mailto link with form data
    const emailSubject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`);
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:barker.jacob@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    // Open email client
    window.location.href = mailtoLink;

    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b-4 border-[#2563EB] z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-[#0F172A]">
            Jacob Barker
          </Link>
          <div className="flex gap-8">
            <Link href="/journey" className="text-gray-700 hover:text-[#2563EB] transition-colors font-medium">
              Journey
            </Link>
            <Link href="/showreel" className="text-gray-700 hover:text-[#2563EB] transition-colors font-medium">
              Showreel
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-[#2563EB] transition-colors font-medium">
              Projects
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#2563EB] transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-[#0F172A] font-medium">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-[#0F172A] mb-4">Get in Touch</h1>
            <p className="text-xl text-gray-600">
              Have a story tip or want to collaborate? I'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#0F172A] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#0F172A] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#0F172A] mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="story-tip">Story Tip</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="interview">Interview Request</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#0F172A] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-[#2563EB] text-white px-6 py-3 rounded-lg hover:bg-[#C4A676] transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending..." : status === "sent" ? "Message Sent!" : "Send Message"}
                </button>

                {status === "sent" && (
                  <p className="text-green-600 text-center font-medium">
                    Thanks for reaching out! I'll get back to you soon.
                  </p>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-gray-50 rounded-lg p-8 mb-6">
                <h2 className="text-xl font-bold text-[#0F172A] mb-4">Other Ways to Connect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-[#0F172A] mb-1">CBC Windsor</h3>
                    <p className="text-gray-600 text-sm">
                      For news tips or story ideas related to CBC coverage
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#0F172A] mb-1">Social Media</h3>
                    <p className="text-gray-600 text-sm">
                      Connect with me on professional networks
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-8">
                <h3 className="text-lg font-bold text-[#0F172A] mb-3">Story Tips</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Have a story idea about Windsor-Essex? I'm always looking for important
                  community stories that deserve attention. Your tips can remain anonymous
                  if you prefer.
                </p>
                <p className="text-gray-700 text-sm">
                  <span className="font-medium">Focus areas:</span> Community impact, human interest,
                  social issues, infrastructure, and local policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Jacob Barker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
