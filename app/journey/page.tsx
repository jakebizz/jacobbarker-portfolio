import Link from "next/link";
import InteractiveMap from "@/components/InteractiveMap";

export default function JourneyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex flex-col leading-none">
              <span className="text-sm font-black text-[#0F172A] tracking-wider uppercase">Jacob</span>
              <span className="text-sm font-black text-[#0F172A] tracking-wider uppercase">Barker</span>
            </Link>
            <div className="flex gap-10">
              <Link href="/journey" className="text-xs font-black text-[#2563EB] uppercase tracking-widest">
                Journey
              </Link>
              <Link href="/showreel" className="text-xs font-black text-gray-600 hover:text-[#2563EB] transition-colors uppercase tracking-widest">
                Showreel
              </Link>
              <Link href="/projects" className="text-xs font-black text-gray-600 hover:text-[#2563EB] transition-colors uppercase tracking-widest">
                Projects
              </Link>
              <Link href="/about" className="text-xs font-black text-gray-600 hover:text-[#2563EB] transition-colors uppercase tracking-widest">
                About
              </Link>
              <Link href="/contact" className="text-xs font-black text-gray-600 hover:text-[#2563EB] transition-colors uppercase tracking-widest">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-32 bg-gradient-to-b from-[#F8FAFC] to-white">
        <div className="max-w-5xl mx-auto px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fadeInUp">
            <h1 className="text-6xl md:text-7xl font-black text-[#0F172A] mb-6 leading-none tracking-tight uppercase">
              My Journey
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              14+ years telling stories across Canada—from the Pacific coast to the Arctic,
              from Labrador's remote communities to southwestern Ontario.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-4 gap-4 mb-12 animate-fadeInUp delay-100">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-slate-100">
              <div className="text-3xl font-black text-[#2563EB] mb-1">14+</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Years</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-slate-100">
              <div className="text-3xl font-black text-[#2563EB] mb-1">4</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Provinces</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-slate-100">
              <div className="text-3xl font-black text-[#2563EB] mb-1">5</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">CBC Markets</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-slate-100">
              <div className="text-3xl font-black text-[#2563EB] mb-1">∞</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Stories</div>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="animate-fadeInUp delay-200">
            <InteractiveMap />
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center animate-fadeInUp delay-300">
            <p className="text-gray-500 mb-6">
              Ready to see the stories? Explore my recent work.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/projects"
                className="inline-block bg-[#0F172A] text-white px-8 py-4 rounded-xl hover:bg-[#2563EB] transition-colors font-black uppercase tracking-wider text-sm"
              >
                View Projects
              </Link>
              <Link
                href="/showreel"
                className="inline-block bg-white text-[#0F172A] px-8 py-4 rounded-xl border-2 border-[#0F172A] hover:bg-[#0F172A] hover:text-white transition-colors font-black uppercase tracking-wider text-sm"
              >
                Watch Showreel
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative bg-[#0F172A] text-white py-20">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2563EB] to-transparent"></div>
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start">
              <div className="text-2xl font-black mb-2 uppercase tracking-wider">Jacob Barker</div>
              <p className="text-gray-400 text-sm">Videojournalist · CBC Windsor</p>
            </div>
            <div className="flex gap-8">
              <a href="https://www.cbc.ca/news/canada/windsor/author/jacob-barker-1.3516281" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#2563EB] transition-colors text-xs font-black uppercase tracking-widest">
                CBC Profile
              </a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Jacob Barker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
