import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0F172A] z-50 shadow-lg border-b-2 border-[#2563EB]">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="group flex items-center gap-4">
              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-black text-white tracking-tighter">JACOB BARKER</span>
                  <span className="text-xs font-black text-[#2563EB] px-3 py-1 bg-[#2563EB]/10 rounded-full uppercase tracking-widest border border-[#2563EB]/30">CBC News</span>
                </div>
                <span className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mt-1">Videojournalist • Windsor, ON</span>
              </div>
            </Link>
            <div className="flex gap-8">
              <Link href="/journey" className="text-xs font-black text-gray-300 hover:text-[#2563EB] transition-colors uppercase tracking-widest">
                Journey
              </Link>
              <Link href="/showreel" className="text-xs font-black text-gray-300 hover:text-[#2563EB] transition-colors uppercase tracking-widest">
                Showreel
              </Link>
              <Link href="/projects" className="text-xs font-black text-gray-300 hover:text-[#2563EB] transition-colors uppercase tracking-widest">
                Projects
              </Link>
              <Link href="/about" className="text-xs font-black text-gray-300 hover:text-[#2563EB] transition-colors uppercase tracking-widest">
                About
              </Link>
              <Link href="/contact" className="text-xs font-black text-gray-300 hover:text-[#2563EB] transition-colors uppercase tracking-widest">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-40 pb-32 relative overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#2563EB]/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#0F172A]/5 to-transparent rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8 animate-fadeInUp">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
                <span className="text-sm font-black text-red-600 uppercase tracking-widest">Live Portfolio</span>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-gray-300 to-transparent"></div>
              <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">CBC News • Windsor Bureau</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-[#0F172A] mb-6 animate-fadeInUp delay-100 leading-[1.1] tracking-tight">
              Broadcast Journalism<br/>
              <span className="text-[#2563EB]">That Moves Communities</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed animate-fadeInUp delay-200 font-medium">
              14+ years producing Emmy-caliber video journalism for CBC News. Specialized in field production, multi-platform storytelling, and breaking news coverage across Canada.
            </p>
            <div className="flex flex-wrap gap-4 mb-10 animate-fadeInUp delay-300">
              <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow-md border border-gray-200">
                <svg className="w-5 h-5 text-[#2563EB]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span className="text-sm font-black text-gray-700 uppercase tracking-wide">Video Journalism</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow-md border border-gray-200">
                <svg className="w-5 h-5 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-black text-gray-700 uppercase tracking-wide">Field Production</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow-md border border-gray-200">
                <svg className="w-5 h-5 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
                <span className="text-sm font-black text-gray-700 uppercase tracking-wide">Breaking News</span>
              </div>
            </div>
            <div className="flex gap-6 mb-6 animate-fadeInUp delay-400">
              <Link
                href="/projects"
                className="group relative bg-[#0F172A] text-white px-10 py-5 rounded-xl font-black text-base hover:bg-[#2563EB] transition-all hover:shadow-2xl uppercase tracking-widest"
              >
                <span className="relative z-10">View Portfolio</span>
              </Link>
              <Link
                href="/showreel"
                className="group px-10 py-5 rounded-xl font-black text-base border-2 border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A] hover:text-white transition-all hover:shadow-xl flex items-center gap-3 uppercase tracking-widest"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Showreel
              </Link>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-32 mb-20 animate-fadeInUp delay-400">
            <div className="grid grid-cols-3 gap-8 bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
              <div className="text-center border-r border-gray-200 last:border-r-0">
                <div className="text-5xl font-black text-[#2563EB] mb-2">14+</div>
                <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Years</div>
              </div>
              <div className="text-center border-r border-gray-200 last:border-r-0">
                <div className="text-5xl font-black text-[#2563EB] mb-2">4</div>
                <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Provinces</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-[#2563EB] mb-2">100+</div>
                <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Stories</div>
              </div>
            </div>
          </div>

          {/* Video Showreel Section */}
          <div className="mb-32 animate-fadeInUp delay-500">
            <div className="flex items-baseline justify-between mb-10">
              <div>
                <h2 className="text-5xl font-black text-[#0F172A] tracking-tight mb-3">Video Showreel</h2>
                <p className="text-gray-600 text-lg">My best work in 2 minutes</p>
              </div>
              <Link
                href="/showreel"
                className="group inline-flex items-center gap-2 text-[#2563EB] hover:text-[#1E40AF] font-bold text-sm uppercase tracking-wider transition-all"
              >
                Full Details
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#2563EB] to-[#1E40AF] rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-[#0F172A] rounded-3xl overflow-hidden shadow-2xl">
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
                      <div className="w-12 h-12 bg-[#2563EB] rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-[#0F172A] text-sm uppercase tracking-wider">Award-Winning Work</div>
                        <div className="text-gray-600 text-sm">AVID • Field Production • Multi-Platform</div>
                      </div>
                    </div>
                    <Link
                      href="/showreel"
                      className="px-6 py-3 bg-[#0F172A] text-white rounded-xl font-bold text-sm hover:bg-[#2563EB] transition-all"
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
              <h2 className="text-5xl font-black text-[#0F172A] tracking-tight mb-4">Featured Work</h2>
              <p className="text-gray-600 text-xl">Recent stories from the field</p>
            </div>

            {/* Videos Row */}
            <div className="mb-20">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-1 bg-[#2563EB]"></div>
                <h3 className="text-2xl font-black text-[#0F172A] uppercase tracking-tight">Video Stories</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Video 1 - Down Syndrome */}
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
                    <div className="w-12 h-12 bg-[#2563EB] rounded-full flex items-center justify-center shadow-xl">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-[10px] font-black text-white/90 mb-2 uppercase tracking-widest" style={{textShadow: '0 2px 8px rgba(0,0,0,0.8)'}}>Oct 2025 • Jacob Barker</div>
                    <h3 className="font-black text-white text-2xl mb-2 leading-tight group-hover:text-[#2563EB] transition-colors">Down Syndrome Awareness Campaign</h3>
                    <p className="text-gray-300 text-sm line-clamp-2 leading-relaxed">Windsor siblings behind national commercial about aging with Down syndrome</p>
                  </div>
                </div>
              </Link>

              {/* Video 2 - Manufacturing Career Program */}
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
                    <div className="w-12 h-12 bg-[#2563EB] rounded-full flex items-center justify-center shadow-xl">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-[10px] font-black text-white/90 mb-2 uppercase tracking-widest" style={{textShadow: '0 2px 8px rgba(0,0,0,0.8)'}}>Oct 2025 • Jacob Barker</div>
                    <h3 className="font-black text-white text-2xl mb-2 leading-tight group-hover:text-[#2563EB] transition-colors">High Schoolers Explore Manufacturing Careers</h3>
                    <p className="text-gray-300 text-sm line-clamp-2 leading-relaxed">Youth career exploration program connecting students with local manufacturing opportunities</p>
                  </div>
                </div>
              </Link>

              {/* Video 3 - Habitat for Humanity */}
              <Link
                href="https://www.cbc.ca/player/play/video/9.6974208"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/5] relative overflow-hidden bg-gray-900">
                  <Image
                    src="https://i.cbc.ca/ais/4d6556be-ae54-4977-9ad9-4a96459bebe4,1762816220181/full/max/0/default.jpg?im=Crop%2Crect%3D%280%2C0%2C1920%2C1080%29%3B"
                    alt="Habitat for Humanity modular housing"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute top-5 right-5">
                    <div className="w-12 h-12 bg-[#2563EB] rounded-full flex items-center justify-center shadow-xl">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-[10px] font-black text-white/90 mb-2 uppercase tracking-widest" style={{textShadow: '0 2px 8px rgba(0,0,0,0.8)'}}>Nov 2025 • Jacob Barker</div>
                    <h3 className="font-black text-white text-2xl mb-2 leading-tight group-hover:text-[#2563EB] transition-colors">Habitat for Humanity Modular Housing</h3>
                    <p className="text-gray-300 text-sm line-clamp-2 leading-relaxed">Innovative 16-unit modular housing development in Amherstburg partnership</p>
                  </div>
                </div>
              </Link>
              </div>
            </div>

            {/* Articles Row */}
            <div className="mb-20">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-1 bg-[#2563EB]"></div>
                <h3 className="text-2xl font-black text-[#0F172A] uppercase tracking-tight">Written Stories</h3>
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
                    <div className="text-[10px] font-black text-white/90 mb-2 uppercase tracking-widest" style={{textShadow: '0 2px 8px rgba(0,0,0,0.8)'}}>Dec 2025 • Jacob Barker</div>
                    <h3 className="font-black text-white text-2xl mb-2 leading-tight group-hover:text-[#2563EB] transition-colors">Adventure Bay FlowRider Repairs</h3>
                    <p className="text-gray-300 text-sm line-clamp-2 leading-relaxed">Investigation into municipal spending decisions and infrastructure repairs at Windsor's Adventure Bay water park</p>
                  </div>
                </div>
              </Link>

              {/* Featured Article 2 - Airport Sale */}
              <Link
                href="https://www.cbc.ca/news/canada/windsor/airport-for-sale-in-essex-9.6962711"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/5] relative overflow-hidden bg-gray-900">
                  <Image
                    src="https://i.cbc.ca/ais/637ea56c-079c-441c-aea3-b8e28157a5f0,1761953585820/full/max/0/default.jpg?im=Crop%2Crect%3D%281%2C0%2C1022%2C574%29%3B"
                    alt="Airport for sale in Essex Ontario"
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
                    <div className="text-[10px] font-black text-white/90 mb-2 uppercase tracking-widest" style={{textShadow: '0 2px 8px rgba(0,0,0,0.8)'}}>Nov 2025 • Jacob Barker</div>
                    <h3 className="font-black text-white text-2xl mb-2 leading-tight group-hover:text-[#2563EB] transition-colors">Essex Airport Seeks Perfect Buyer</h3>
                    <p className="text-gray-300 text-sm line-clamp-2 leading-relaxed">Unique residential property with aviation amenities looking for buyer to preserve its character</p>
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
                    <div className="text-[10px] font-black text-white/90 mb-2 uppercase tracking-widest" style={{textShadow: '0 2px 8px rgba(0,0,0,0.8)'}}>Sep 2025 • Jacob Barker</div>
                    <h3 className="font-black text-white text-2xl mb-2 leading-tight group-hover:text-[#2563EB] transition-colors">Windsor Jail Overdose Inquiry</h3>
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
                className="group relative inline-flex items-center gap-3 bg-[#0F172A] text-white px-12 py-6 rounded-2xl font-black text-lg hover:bg-[#2563EB] transition-all duration-500 overflow-hidden shadow-xl hover:shadow-2xl"
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
      <footer className="relative bg-[#0F172A] text-white py-20 mt-32">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2563EB] to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="inline-block mb-6">
              <h3 className="text-4xl font-black tracking-tight mb-2">JACOB BARKER</h3>
              <p className="text-[#2563EB] text-sm font-bold uppercase tracking-widest">CBC Videojournalist</p>
            </div>
          </div>
          <div className="flex justify-center gap-8 mb-8">
            <Link href="/journey" className="text-sm font-bold text-gray-400 hover:text-[#2563EB] transition-colors uppercase tracking-wide">
              Journey
            </Link>
            <Link href="/showreel" className="text-sm font-bold text-gray-400 hover:text-[#2563EB] transition-colors uppercase tracking-wide">
              Showreel
            </Link>
            <Link href="/projects" className="text-sm font-bold text-gray-400 hover:text-[#2563EB] transition-colors uppercase tracking-wide">
              Projects
            </Link>
            <Link href="/about" className="text-sm font-bold text-gray-400 hover:text-[#2563EB] transition-colors uppercase tracking-wide">
              About
            </Link>
            <Link href="/contact" className="text-sm font-bold text-gray-400 hover:text-[#2563EB] transition-colors uppercase tracking-wide">
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
