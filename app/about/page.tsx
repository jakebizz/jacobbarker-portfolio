import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex flex-col leading-none">
              <span className="text-sm font-black text-[#1F2933] tracking-wider uppercase">Jacob</span>
              <span className="text-sm font-black text-[#1F2933] tracking-wider uppercase">Barker</span>
            </Link>
            <div className="flex gap-10">
              <Link href="/showreel" className="text-xs font-black text-gray-600 hover:text-[#D6B98C] transition-colors uppercase tracking-widest">
                Showreel
              </Link>
              <Link href="/projects" className="text-xs font-black text-gray-600 hover:text-[#D6B98C] transition-colors uppercase tracking-widest">
                Projects
              </Link>
              <Link href="/about" className="text-xs font-black text-[#D6B98C] uppercase tracking-widest">
                About
              </Link>
              <Link href="/blog" className="text-xs font-black text-gray-600 hover:text-[#D6B98C] transition-colors uppercase tracking-widest">
                Blog
              </Link>
              <Link href="/contact" className="text-xs font-black text-gray-600 hover:text-[#D6B98C] transition-colors uppercase tracking-widest">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-40 pb-32 relative overflow-hidden bg-[#E5E7EB]">
        <div className="max-w-6xl mx-auto px-8 relative z-10">
          {/* Hero */}
          <div className="mb-24 animate-fadeInUp">
            <h1 className="text-7xl md:text-8xl font-black text-[#1F2933] mb-8 leading-none tracking-tight uppercase">
              About
            </h1>
            <p className="text-3xl text-gray-700 font-bold leading-tight max-w-4xl">
              Videojournalist with 14+ years of experience at CBC, currently based in Windsor, Ontario, telling stories that matter to communities across Canada.
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-none animate-fadeInUp delay-100">
            <div className="bg-white rounded-3xl p-12 mb-16 shadow-xl">
              <h2 className="text-4xl font-black text-[#1F2933] mb-6 uppercase tracking-tight">My Journey</h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Since graduating from the British Columbia Institute of Technology's broadcast journalism
                program in 2010, I've been working as a video journalist. My career has taken me across
                Canada—from Vancouver to Hay River in the Northwest Territories, Happy Valley-Goose Bay
                in Labrador, and now Windsor, Ontario.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                As a Video Journalist/Producer with CBC Windsor since 2020, I research, pitch, produce,
                shoot, edit and cut stories for the evening news. I work both in studio and in the field,
                using FTP and Dejero capabilities to file stories quickly and efficiently. Beyond video,
                I write and record radio stories and contribute written content and one-cut videos for CBC's
                website. I also serve as a CBC AI trainer, helping to shape how artificial intelligence tools
                are integrated into journalism workflows.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                My goal has always been to become an effective long-form storyteller and videographer—creating
                journalism that makes complex issues accessible and engaging for our audience.
              </p>
            </div>

            <h2 className="text-5xl font-black text-[#1F2933] mb-4 uppercase tracking-tight animate-fadeInUp delay-200">
              Career Journey
            </h2>
            <p className="text-gray-700 mb-16 text-xl font-bold uppercase tracking-wide animate-fadeInUp delay-200">14+ years telling stories across Canada</p>

            {/* Timeline */}
            <div className="relative mb-16">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D6B98C] via-[#D6B98C] to-transparent"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                {/* 2020 - Present: Windsor */}
                <div className="relative pl-20">
                  <div className="absolute left-5 top-2 w-6 h-6 bg-[#D6B98C] rounded-full border-4 border-white shadow-lg"></div>
                  <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-[#D6B98C] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-[#D6B98C] text-white text-xs font-bold px-3 py-1 rounded-full">CURRENT</span>
                      <span className="text-sm font-medium text-gray-500">2020 - Present · 5 years</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#1F2933] mb-1">Video Journalist/Producer</h3>
                    <p className="text-[#D6B98C] font-semibold mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      CBC Windsor, Ontario
                    </p>
                    <ul className="text-sm text-gray-700 space-y-2 mb-3">
                      <li className="flex items-start gap-2">
                        <span className="text-[#D6B98C] mt-1">•</span>
                        <span>Research, pitch, produce, shoot, and edit stories for evening news and digital platforms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#D6B98C] mt-1">•</span>
                        <span>Serve as backup producer and evening website producer</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#D6B98C] mt-1">•</span>
                        <span>CBC AI Trainer, shaping journalism workflow integration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#D6B98C] mt-1">•</span>
                        <span>Multi-platform filing: FTP, Dejero live shots, radio, and web content</span>
                      </li>
                    </ul>
                    <div className="pt-3 border-t border-gray-200">
                      <p className="text-xs text-gray-500 font-medium mb-2">Notable Coverage:</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">Auto Industry</span>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">Immigration</span>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">Housing</span>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">Municipal Affairs</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2015 - 2020: Labrador */}
                <div className="relative pl-20">
                  <div className="absolute left-5 top-2 w-6 h-6 bg-[#D6B98C] rounded-full border-4 border-white shadow-lg opacity-80"></div>
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-sm font-medium text-gray-500 mb-2">2015 - 2020 · 5 years</div>
                    <h3 className="text-xl font-bold text-[#1F2933] mb-1">Video Journalist</h3>
                    <p className="text-[#D6B98C] font-semibold mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      CBC Happy Valley-Goose Bay, Labrador
                    </p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-[#D6B98C] mt-1">•</span>
                        <span>Solo videojournalist covering Canada's remote eastern coast</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#D6B98C] mt-1">•</span>
                        <span>Covered Indigenous communities, resource development, and northern issues</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#D6B98C] mt-1">•</span>
                        <span>Developed expertise in remote field production and satellite filing</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* 2012 - 2015: NWT */}
                <div className="relative pl-20">
                  <div className="absolute left-5 top-2 w-6 h-6 bg-[#D6B98C] rounded-full border-4 border-white shadow-lg opacity-60"></div>
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-sm font-medium text-gray-500 mb-2">2012 - 2015 · 3 years</div>
                    <h3 className="text-xl font-bold text-[#1F2933] mb-1">Video Journalist</h3>
                    <p className="text-[#D6B98C] font-semibold mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      CBC Hay River, Northwest Territories
                    </p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-[#D6B98C] mt-1">•</span>
                        <span>First posting covering Canada's North and Arctic issues</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#D6B98C] mt-1">•</span>
                        <span>Reported on territorial politics, mining, and northern communities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#D6B98C] mt-1">•</span>
                        <span>Built foundation in one-person-band videojournalism</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* 2011 - 2012: Vancouver Camera Op */}
                <div className="relative pl-20">
                  <div className="absolute left-5 top-2 w-6 h-6 bg-gray-400 rounded-full border-4 border-white shadow-lg opacity-50"></div>
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <div className="text-sm font-medium text-gray-500 mb-2">2011 - 2012 · 1 year</div>
                    <h3 className="text-lg font-bold text-[#1F2933] mb-1">ENG Camera Operator & Editor</h3>
                    <p className="text-gray-600 font-semibold mb-2 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      CBC Vancouver
                    </p>
                    <p className="text-sm text-gray-700">Technical role in major market newsroom, honing camera and editing skills</p>
                  </div>
                </div>

                {/* 2010 - 2012: BBN3/Vancouver Observer */}
                <div className="relative pl-20">
                  <div className="absolute left-5 top-2 w-6 h-6 bg-gray-400 rounded-full border-4 border-white shadow-lg opacity-40"></div>
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <div className="text-sm font-medium text-gray-500 mb-2">2010 - 2012 · 2 years</div>
                    <h3 className="text-lg font-bold text-[#1F2933] mb-1">Video Journalist & Section Editor</h3>
                    <p className="text-gray-600 font-semibold mb-2 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      BBN3 & Vancouver Observer
                    </p>
                    <p className="text-sm text-gray-700">Early career digital journalism experience post-graduation from BCIT</p>
                  </div>
                </div>

                {/* 2008 - 2010: Education */}
                <div className="relative pl-20">
                  <div className="absolute left-5 top-2 w-6 h-6 bg-gray-300 rounded-full border-4 border-white shadow-lg opacity-30"></div>
                  <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span className="text-sm font-medium text-gray-500">2008 - 2010</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#1F2933] mb-1">Broadcast Journalism Student</h3>
                    <p className="text-blue-700 font-semibold mb-2">British Columbia Institute of Technology (BCIT)</p>
                    <p className="text-sm text-gray-700">Foundation training in multi-platform journalism, video production, and storytelling</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-4xl font-black text-[#1F2933] mb-10 uppercase tracking-tight">Coverage Areas</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-20">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-black text-[#1F2933] mb-3 uppercase tracking-wide">Community Impact</h3>
                <p className="text-gray-600 leading-relaxed">
                  Local infrastructure, municipal projects, and decisions that affect Windsor-Essex residents
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-black text-[#1F2933] mb-3 uppercase tracking-wide">Human Interest</h3>
                <p className="text-gray-600 leading-relaxed">
                  Personal stories that highlight the experiences and challenges of our community members
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-black text-[#1F2933] mb-3 uppercase tracking-wide">Social Issues</h3>
                <p className="text-gray-600 leading-relaxed">
                  Policy, immigration, healthcare, and other issues affecting local families and individuals
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-black text-[#1F2933] mb-3 uppercase tracking-wide">Investigative</h3>
                <p className="text-gray-600 leading-relaxed">
                  In-depth reporting on regulatory matters, environmental concerns, and public accountability
                </p>
              </div>
            </div>

            <h2 className="text-4xl font-black text-[#1F2933] mb-10 uppercase tracking-tight">Skills & Tools</h2>
            <div className="space-y-10 mb-20">
              <div>
                <h3 className="text-2xl font-black text-[#1F2933] mb-6 uppercase tracking-wide">Technical Skills</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "AVID Editing",
                    "Camera Operation",
                    "Dejero Live Shots",
                    "FTP Filing",
                    "Field Production",
                    "Audio Recording"
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="bg-[#1F2933] px-6 py-4 rounded-xl text-center text-white font-black text-sm uppercase tracking-wider hover:bg-[#D6B98C] transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#1F2933] mb-6 uppercase tracking-wide">Journalism Skills</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "News Reporting",
                    "Storytelling",
                    "Research & Pitching",
                    "Writing & Editing",
                    "Interviewing",
                    "Long-form Video"
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="bg-[#1F2933] px-6 py-4 rounded-xl text-center text-white font-black text-sm uppercase tracking-wider hover:bg-[#D6B98C] transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#1F2933] mb-6 uppercase tracking-wide">Additional Capabilities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "CBC AI Trainer",
                    "Backup Producer",
                    "Web Production",
                    "One-Cut Videos",
                    "Multi-platform Filing",
                    "On-Camera Reporting",
                    "Mentoring VJs"
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="bg-[#1F2933] px-6 py-4 rounded-xl text-center text-white font-black text-sm uppercase tracking-wider hover:bg-[#D6B98C] transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-[#D6B98C] to-[#C4A676] rounded-3xl p-10 shadow-2xl text-white">
                <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">CBC Windsor</h2>
                <p className="leading-relaxed mb-8 text-lg">
                  Currently working as a videojournalist with CBC's Windsor bureau, covering stories
                  that impact our local communities across southwestern Ontario. I also act as a backup
                  producer and evening producer for the website.
                </p>
                <a
                  href="https://www.cbc.ca/news/canada/windsor/author/jacob-barker-1.3516281"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-[#1F2933] px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors font-black uppercase tracking-wider text-sm shadow-lg"
                >
                  View My CBC Profile
                </a>
              </div>

              <div className="bg-white rounded-3xl p-10 shadow-2xl border-2 border-[#1F2933]">
                <h2 className="text-3xl font-black text-[#1F2933] mb-6 uppercase tracking-tight">Education & Training</h2>
                <div className="mb-6">
                  <h3 className="text-xl font-black text-[#1F2933] uppercase tracking-wide">British Columbia Institute of Technology</h3>
                  <p className="text-gray-600 mb-2 font-bold">Diploma of Technology, Broadcast Journalism</p>
                  <p className="text-sm text-gray-500 mb-4 font-bold">2008 - 2010</p>
                  <p className="text-gray-700 leading-relaxed">
                    Graduated from BCIT's inspiring broadcast journalism program, where I produced
                    BCIT Magazine (a half-hour TV show), and contributed to 107.9 Evolution Radio
                    and The Link Student Newspaper.
                  </p>
                </div>
                <div className="border-t-2 border-gray-200 pt-6">
                  <h3 className="text-xl font-black text-[#1F2933] uppercase tracking-wide">Professional Training</h3>
                  <div className="mt-3">
                    <p className="text-gray-700 font-bold">AVID Media Composer Certification</p>
                    <p className="text-gray-500 text-sm mt-1">Industry-standard editing system for broadcast journalism</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="relative bg-[#1F2933] text-white py-20 mt-32">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D6B98C] to-transparent"></div>
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start">
              <div className="text-2xl font-black mb-2 uppercase tracking-wider">Jacob Barker</div>
              <p className="text-gray-400 text-sm">Videojournalist · CBC Windsor</p>
            </div>
            <div className="flex gap-8">
              <a href="https://www.cbc.ca/news/canada/windsor/author/jacob-barker-1.3516281" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#D6B98C] transition-colors text-xs font-black uppercase tracking-widest">
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
