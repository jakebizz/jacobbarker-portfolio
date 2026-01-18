"use client";

import Link from "next/link";
import { useState } from "react";

export default function ShowreelPage() {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("barker.jacob@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b-4 border-[#D6B98C] z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-[#1F2933] hover:text-[#D6B98C] transition-colors">
            Jacob Barker
            <span className="text-xs ml-2 text-gray-500 font-normal">CBC VIDEOJOURNALIST</span>
          </Link>
          <div className="flex gap-8">
            <Link href="/projects" className="text-gray-700 hover:text-[#D6B98C] transition-colors font-medium">
              Projects
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#D6B98C] transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#D6B98C] transition-colors font-medium">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#D6B98C] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#E5E7EB] opacity-20 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-10 h-10 text-[#D6B98C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h1 className="text-5xl font-bold text-[#1F2933]">Video Showreel</h1>
            </div>
            <p className="text-xl text-gray-600">
              A curated collection of my best videojournalism work across 14+ years covering stories that matter
            </p>
          </div>

          {/* Main Video Player */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-gray-900 to-[#1F2933] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D6B98C]">
              <div className="aspect-video relative bg-black">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/jqFC_SaN9wk"
                  title="Jacob Barker Video Showreel"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white border-2 border-[#D6B98C] rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-[#D6B98C] mb-2">14+</div>
              <div className="text-sm text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-[#D6B98C] transition-colors">
              <div className="text-4xl font-bold text-[#D6B98C] mb-2">4</div>
              <div className="text-sm text-gray-600 font-medium">Provinces Covered</div>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-[#D6B98C] transition-colors">
              <div className="text-4xl font-bold text-[#D6B98C] mb-2">100+</div>
              <div className="text-sm text-gray-600 font-medium">Stories Filed</div>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-[#D6B98C] transition-colors">
              <div className="text-4xl font-bold text-[#D6B98C] mb-2">5</div>
              <div className="text-sm text-gray-600 font-medium">CBC Markets</div>
            </div>
          </div>

          {/* What's Included */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#1F2933] mb-8">What's in the Showreel</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D6B98C] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1F2933] mb-2">Breaking News Coverage</h3>
                    <p className="text-gray-600 text-sm">
                      Fast-paced daily news packages with tight deadlines, live shots with Dejero, and field reporting
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D6B98C] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1F2933] mb-2">Long-form Features</h3>
                    <p className="text-gray-600 text-sm">
                      Character-driven storytelling with cinematic visuals, emotional depth, and compelling narratives
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D6B98C] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1F2933] mb-2">Investigative Work</h3>
                    <p className="text-gray-600 text-sm">
                      In-depth reporting on accountability, policy issues, and systemic problems affecting communities
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D6B98C] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1F2933] mb-2">Human Interest Stories</h3>
                    <p className="text-gray-600 text-sm">
                      Personal stories highlighting resilience, community spirit, and the human experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Capabilities */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#1F2933] mb-8">Technical Capabilities</h2>
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-[#1F2933] mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#D6B98C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Production
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#D6B98C] mt-1">•</span>
                      <span>One-person-band VJ</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D6B98C] mt-1">•</span>
                      <span>Camera operation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D6B98C] mt-1">•</span>
                      <span>Audio recording</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D6B98C] mt-1">•</span>
                      <span>Lighting & composition</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D6B98C] mt-1">•</span>
                      <span>Interviewing</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#1F2933] mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#D6B98C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                    Post-Production
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#D6B98C] mt-1">•</span>
                      <span>AVID Media Composer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D6B98C] mt-1">•</span>
                      <span>Script writing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D6B98C] mt-1">•</span>
                      <span>Video editing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D6B98C] mt-1">•</span>
                      <span>Audio mixing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D6B98C] mt-1">•</span>
                      <span>Colour correction</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#1F2933] mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#D6B98C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Broadcasting
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#D6B98C] mt-1">•</span>
                      <span>Dejero live shots</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D6B98C] mt-1">•</span>
                      <span>FTP filing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D6B98C] mt-1">•</span>
                      <span>Multi-platform delivery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D6B98C] mt-1">•</span>
                      <span>Radio reporting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D6B98C] mt-1">•</span>
                      <span>Web content creation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-[#D6B98C] to-[#C4A676] rounded-2xl p-12 text-center text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-4">Interested in Working Together?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Whether you're looking for a skilled videojournalist, need specific examples of my work,
              or want to discuss collaboration opportunities, I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-[#D6B98C] px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-md"
              >
                Get in Touch
              </Link>
              <Link
                href="/projects"
                className="border-2 border-white text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-all"
              >
                View All Projects
              </Link>
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
