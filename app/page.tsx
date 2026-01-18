import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200/50 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="group">
            <div className="flex flex-col">
              <span className="text-2xl font-black text-[#1F2933] group-hover:text-[#D6B98C] transition-colors tracking-tight">JACOB BARKER</span>
              <span className="text-[10px] font-bold text-[#D6B98C] tracking-widest uppercase">CBC Videojournalist</span>
            </div>
          </Link>
          <div className="flex gap-10">
            <Link href="/showreel" className="text-sm font-bold text-gray-600 hover:text-[#D6B98C] transition-colors uppercase tracking-wide">
              Showreel
            </Link>
            <Link href="/projects" className="text-sm font-bold text-gray-600 hover:text-[#D6B98C] transition-colors uppercase tracking-wide">
              Projects
            </Link>
            <Link href="/about" className="text-sm font-bold text-gray-600 hover:text-[#D6B98C] transition-colors uppercase tracking-wide">
              About
            </Link>
            <Link href="/contact" className="text-sm font-bold text-gray-600 hover:text-[#D6B98C] transition-colors uppercase tracking-wide">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-40 pb-32 relative overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#D6B98C]/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#1F2933]/5 to-transparent rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 animate-fadeInUp">
              <span className="inline-block px-5 py-2 bg-[#D6B98C]/10 border border-[#D6B98C]/30 rounded-full text-[#D6B98C] text-sm font-bold uppercase tracking-wider">
                14+ Years Experience
              </span>
            </div>
            <h1 className="text-7xl md:text-8xl font-black text-[#1F2933] mb-8 animate-fadeInUp delay-100 leading-none tracking-tight">
              Telling Stories<br/>
              <span className="text-gradient">That Matter</span>
            </h1>
            <p className="text-2xl text-gray-600 mb-12 animate-fadeInUp delay-200 leading-relaxed max-w-3xl mx-auto font-light">
              Award-winning videojournalist covering community stories for <span className="font-semibold text-[#D6B98C]">CBC News</span> in Windsor, Ontario
            </p>
            <div className="flex gap-6 justify-center mb-6 animate-fadeInUp delay-300">
              <Link
                href="/projects"
                className="group relative bg-[#D6B98C] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#C4A676] transition-all hover:shadow-2xl hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Link>
              <Link
                href="/showreel"
                className="group px-10 py-5 rounded-2xl font-bold text-lg border-2 border-[#1F2933] text-[#1F2933] hover:bg-[#1F2933] hover:text-white transition-all hover:shadow-xl flex items-center gap-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Showreel
              </Link>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-32 mb-20 animate-fadeInUp delay-400">
            <div className="grid grid-cols-3 gap-8 bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
              <div className="text-center border-r border-gray-200 last:border-r-0">
                <div className="text-5xl font-black text-[#D6B98C] mb-2">14+</div>
                <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Years</div>
              </div>
              <div className="text-center border-r border-gray-200 last:border-r-0">
                <div className="text-5xl font-black text-[#D6B98C] mb-2">4</div>
                <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Provinces</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-[#D6B98C] mb-2">100+</div>
                <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Stories</div>
              </div>
            </div>
          </div>

          {/* Video Showreel Section */}
          <div className="mb-32 animate-fadeInUp delay-500">
            <div className="flex items-baseline justify-between mb-10">
              <div>
                <h2 className="text-5xl font-black text-[#1F2933] tracking-tight mb-3">Video Showreel</h2>
                <p className="text-gray-600 text-lg">My best work in 2 minutes</p>
              </div>
              <Link
                href="/showreel"
                className="group inline-flex items-center gap-2 text-[#D6B98C] hover:text-[#C4A676] font-bold text-sm uppercase tracking-wider transition-all"
              >
                Full Details
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#D6B98C] to-[#C4A676] rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-[#1F2933] rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-video relative bg-black">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/jqFC_SaN9wk"
                    title="Jacob Barker Video Showreel"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="bg-white p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#D6B98C] rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-[#1F2933] text-sm uppercase tracking-wider">Award-Winning Work</div>
                        <div className="text-gray-600 text-sm">AVID • Field Production • Multi-Platform</div>
                      </div>
                    </div>
                    <Link
                      href="/showreel"
                      className="px-6 py-3 bg-[#1F2933] text-white rounded-xl font-bold text-sm hover:bg-[#D6B98C] transition-all"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Work Preview */}
          <div className="animate-fadeInUp delay-600">
            <div className="mb-12">
              <h2 className="text-5xl font-black text-[#1F2933] tracking-tight mb-4">Featured Work</h2>
              <p className="text-gray-600 text-xl">Recent stories from the field</p>
            </div>

            {/* Videos Row */}
            <div className="mb-20">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-1 bg-[#D6B98C]"></div>
                <h3 className="text-2xl font-black text-[#1F2933] uppercase tracking-tight">Video Stories</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Video 1 - Manufacturing Career Program */}
              <Link
                href="https://www.cbc.ca/player/play/video/9.6926925"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/5] relative overflow-hidden bg-gray-900">
                  <Image
                    src="https://i.cbc.ca/ais/816630b3-ee0e-4f52-9e5c-1f383c30fb00,1759528251291/full/max/0/default.jpg?im=Crop%2Crect%3D%280%2C0%2C1920%2C1080%29%3BResize%3D620"
                    alt="Windsor high school students in manufacturing program"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute top-5 right-5">
                    <div className="w-12 h-12 bg-[#D6B98C] rounded-full flex items-center justify-center shadow-xl">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-[10px] font-black text-[#D6B98C] mb-2 uppercase tracking-widest">Oct 2025 • Jacob Barker</div>
                    <h3 className="font-black text-white text-2xl mb-2 leading-tight group-hover:text-[#D6B98C] transition-colors">High Schoolers Explore Manufacturing Careers</h3>
                    <p className="text-gray-300 text-sm line-clamp-2 leading-relaxed">Youth career exploration program connecting students with local manufacturing opportunities</p>
                  </div>
                </div>
              </Link>

              {/* Video 2 - Habitat for Humanity */}
              <Link
                href="https://www.cbc.ca/player/play/video/9.6974208"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/5] relative overflow-hidden bg-gray-900">
                  <Image
                    src="https://i.cbc.ca/ais/1.7565627,1756238249000/full/max/0/default.jpg?im=Crop%2Crect%3D%280%2C0%2C3115%2C1885%29%3B"
                    alt="Habitat for Humanity modular housing"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute top-5 right-5">
                    <div className="w-12 h-12 bg-[#D6B98C] rounded-full flex items-center justify-center shadow-xl">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-[10px] font-black text-[#D6B98C] mb-2 uppercase tracking-widest">Nov 2025 • Jacob Barker</div>
                    <h3 className="font-black text-white text-2xl mb-2 leading-tight group-hover:text-[#D6B98C] transition-colors">Habitat for Humanity Modular Housing</h3>
                    <p className="text-gray-300 text-sm line-clamp-2 leading-relaxed">Innovative 16-unit modular housing development in Amherstburg partnership</p>
                  </div>
                </div>
              </Link>

              {/* Video 3 - Down Syndrome */}
              <Link
                href="https://www.cbc.ca/news/canada/windsor/brother-sister-duo-combine-to-create-national-awareness-about-aging-with-down-syndrome-9.6950439"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/5] relative overflow-hidden bg-gray-900">
                  <Image
                    src="https://i.cbc.ca/ais/e435b4a0-41dd-49c1-9869-dc0ac8a1d6ec,1761164312458/full/max/0/default.jpg?im=Crop%2Crect%3D%281%2C0%2C1022%2C574%29%3BResize%3D620"
                    alt="Down syndrome awareness video"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute top-5 right-5">
                    <div className="w-12 h-12 bg-[#D6B98C] rounded-full flex items-center justify-center shadow-xl">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-[10px] font-black text-[#D6B98C] mb-2 uppercase tracking-widest">Oct 2025 • Jacob Barker</div>
                    <h3 className="font-black text-white text-2xl mb-2 leading-tight group-hover:text-[#D6B98C] transition-colors">Down Syndrome Awareness Campaign</h3>
                    <p className="text-gray-300 text-sm line-clamp-2 leading-relaxed">Windsor siblings behind national commercial about aging with Down syndrome</p>
                  </div>
                </div>
              </Link>
              </div>
            </div>

            {/* Articles Row */}
            <div className="mb-20">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-1 bg-[#D6B98C]"></div>
                <h3 className="text-2xl font-black text-[#1F2933] uppercase tracking-tight">Written Stories</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Featured Article 1 - FlowRider Repairs */}
              <Link
                href="https://www.cbc.ca/news/canada/windsor/adventure-bay-flowrider-repairs-9.7002216"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/5] relative overflow-hidden bg-gray-900">
                  <Image
                    src="https://i.cbc.ca/ais/c3b82f42-40bf-4b3c-b726-3e2025cccd60,1764803900729/full/max/0/default.jpg?im=Crop%2Crect%3D%280%2C378%2C4032%2C2268%29%3BResize%3D620"
                    alt="Adventure Bay FlowRider water park"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute top-5 right-5">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 shadow-xl">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-[10px] font-black text-[#D6B98C] mb-2 uppercase tracking-widest">Dec 2025 • Jacob Barker</div>
                    <h3 className="font-black text-white text-2xl mb-2 leading-tight group-hover:text-[#D6B98C] transition-colors">Adventure Bay FlowRider Repairs</h3>
                    <p className="text-gray-300 text-sm line-clamp-2 leading-relaxed">Investigation into municipal spending decisions and infrastructure repairs at Windsor's Adventure Bay water park</p>
                  </div>
                </div>
              </Link>

              {/* Featured Article 2 - Recycling System */}
              <Link
                href="https://www.cbc.ca/news/canada/windsor/windsor-recycling-herby-curby-9.6935479"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/5] relative overflow-hidden bg-gray-900">
                  <Image
                    src="https://i.cbc.ca/ais/10f52a8e-5e59-493c-9f26-498afea93731,1760134735166/full/max/0/default.jpg?im=Crop%2Crect%3D%280%2C0%2C1920%2C1080%29%3B"
                    alt="New recycling system Herby Curby bins"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute top-5 right-5">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 shadow-xl">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-[10px] font-black text-[#D6B98C] mb-2 uppercase tracking-widest">Oct 2025 • Jacob Barker</div>
                    <h3 className="font-black text-white text-2xl mb-2 leading-tight group-hover:text-[#D6B98C] transition-colors">New Recycling System Impact</h3>
                    <p className="text-gray-300 text-sm line-clamp-2 leading-relaxed">Coverage of provincial recycling program implementation affecting local businesses and residents</p>
                  </div>
                </div>
              </Link>

              {/* Featured Article 3 - Jail Inquiry */}
              <Link
                href="https://www.cbc.ca/news/canada/windsor/nathaniel-krug-inquiry-day-1-1.7634659"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/5] relative overflow-hidden bg-gray-900">
                  <Image
                    src="https://i.cbc.ca/ais/1.2630177,1757978327000/full/max/0/default.jpg?im=Crop%2Crect%3D%280%2C0%2C1180%2C663%29%3B"
                    alt="Windsor jail inquiry"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute top-5 right-5">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 shadow-xl">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-[10px] font-black text-[#D6B98C] mb-2 uppercase tracking-widest">Sep 2025 • Jacob Barker</div>
                    <h3 className="font-black text-white text-2xl mb-2 leading-tight group-hover:text-[#D6B98C] transition-colors">Windsor Jail Overdose Inquiry</h3>
                    <p className="text-gray-300 text-sm line-clamp-2 leading-relaxed">Coverage of public inquiry examining custodial facility safety protocols and systemic issues</p>
                  </div>
                </div>
              </Link>
              </div>
            </div>

            {/* View All Link */}
            <div className="mt-20 flex justify-center animate-fadeInUp delay-700">
              <Link
                href="/projects"
                className="group relative inline-flex items-center gap-3 bg-[#1F2933] text-white px-12 py-6 rounded-2xl font-black text-lg hover:bg-[#D6B98C] transition-all duration-500 overflow-hidden shadow-xl hover:shadow-2xl"
              >
                <span className="relative z-10 uppercase tracking-wider">View All Projects</span>
                <svg className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative bg-[#1F2933] text-white py-20 mt-32">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D6B98C] to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="inline-block mb-6">
              <h3 className="text-4xl font-black tracking-tight mb-2">JACOB BARKER</h3>
              <p className="text-[#D6B98C] text-sm font-bold uppercase tracking-widest">CBC Videojournalist</p>
            </div>
          </div>
          <div className="flex justify-center gap-8 mb-8">
            <Link href="/showreel" className="text-sm font-bold text-gray-400 hover:text-[#D6B98C] transition-colors uppercase tracking-wide">
              Showreel
            </Link>
            <Link href="/projects" className="text-sm font-bold text-gray-400 hover:text-[#D6B98C] transition-colors uppercase tracking-wide">
              Projects
            </Link>
            <Link href="/about" className="text-sm font-bold text-gray-400 hover:text-[#D6B98C] transition-colors uppercase tracking-wide">
              About
            </Link>
            <Link href="/contact" className="text-sm font-bold text-gray-400 hover:text-[#D6B98C] transition-colors uppercase tracking-wide">
              Contact
            </Link>
          </div>
          <div className="text-center">
            <p className="text-gray-400 text-sm font-medium">&copy; {new Date().getFullYear()} All rights reserved</p>
            <p className="text-gray-500 text-xs mt-2">Windsor, Ontario • Canada</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
