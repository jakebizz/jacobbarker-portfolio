"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  type: "video" | "audio" | "article" | "interactive";
  date: string;
  author: string;
  tags: string[];
  url: string;
  imageUrl?: string;
}

type SortOption = "date-newest" | "date-oldest" | "title-az" | "title-za";

const projects: Project[] = [
  {
    id: 1,
    title: "Fixing a popular Adventure Bay ride will cost about $560K. Here's why the city is forging ahead",
    description: "Investigation into municipal spending decisions and infrastructure repairs at Windsor's Adventure Bay water park FlowRider attraction",
    type: "article",
    date: "December 4, 2025",
    author: "Jacob Barker",
    tags: ["Infrastructure", "Municipal", "Budget"],
    url: "https://www.cbc.ca/news/canada/windsor/adventure-bay-flowrider-repairs-9.7002216",
    imageUrl: "https://i.cbc.ca/ais/c3b82f42-40bf-4b3c-b726-3e2025cccd60,1764803900729/full/max/0/default.jpg?im=Crop%2Crect%3D%280%2C378%2C4032%2C2268%29%3BResize%3D620"
  },
  {
    id: 3,
    title: "Take a sneak peek at Habitat for Humanity's new modular housing project",
    description: "Video story on innovative 16-unit modular housing development in Amherstburg partnership",
    type: "video",
    date: "November 10, 2025",
    author: "Jacob Barker",
    tags: ["Housing", "Community", "Innovation"],
    url: "https://www.cbc.ca/player/play/video/9.6974208",
    imageUrl: "https://i.cbc.ca/ais/1.7565627,1756238249000/full/max/0/default.jpg?im=Crop%2Crect%3D%280%2C0%2C3115%2C1885%29%3B"
  },
  {
    id: 4,
    title: "An airport is for sale in Essex, Ont., but the family is looking for the right buyer",
    description: "Feature story on a unique residential property with aviation amenities seeking a buyer who will preserve its character",
    type: "article",
    date: "November 3, 2025",
    author: "Jacob Barker",
    tags: ["Human Interest", "Real Estate", "Community"],
    url: "https://www.cbc.ca/news/canada/windsor/airport-for-sale-in-essex-9.6962711",
    imageUrl: "https://i.cbc.ca/ais/637ea56c-079c-441c-aea3-b8e28157a5f0,1761953585820/full/max/0/default.jpg?im=Crop%2Crect%3D%281%2C0%2C1022%2C574%29%3B"
  },
  {
    id: 5,
    title: "National commercial for Down syndrome group filmed right here in Windsor",
    description: "Video feature on filmmaker Drew Hyttenrauch's collaborative project creating national awareness about disability and aging",
    type: "video",
    date: "October 22, 2025",
    author: "Jacob Barker",
    tags: ["Human Interest", "Health", "Social Impact"],
    url: "https://www.cbc.ca/news/canada/windsor/author/jacob-barker-1.3516281",
    imageUrl: "https://i.cbc.ca/ais/e435b4a0-41dd-49c1-9869-dc0ac8a1d6ec,1761164312458/full/max/0/default.jpg?im=Crop%2Crect%3D%281%2C0%2C1022%2C574%29%3BResize%3D620"
  },
  {
    id: 6,
    title: "Cancer surviving teen in treatment as family fights deportation",
    description: "Video report on immigration challenges intersecting with critical healthcare needs for a Windsor family facing removal order",
    type: "video",
    date: "October 16, 2025",
    author: "Jacob Barker",
    tags: ["Immigration", "Health", "Policy"],
    url: "https://www.cbc.ca/news/canada/windsor/author/jacob-barker-1.3516281",
    imageUrl: "https://i.cbc.ca/ais/c6955625-c8bc-4109-aee0-809a5861a9ac,1760554014706/full/max/0/default.jpg?im=Crop%2Crect%3D%280%2C116%2C4032%2C2268%29%3B"
  },
  {
    id: 7,
    title: "New recycling system means residents can't use Herby Curbys, other bins",
    description: "Coverage of provincial recycling program implementation affecting local businesses and residents",
    type: "article",
    date: "October 13, 2025",
    author: "Jacob Barker",
    tags: ["Environment", "Policy", "Local Business"],
    url: "https://www.cbc.ca/news/canada/windsor/windsor-recycling-herby-curby-9.6935479",
    imageUrl: "https://i.cbc.ca/ais/10f52a8e-5e59-493c-9f26-498afea93731,1760134735166/full/max/0/default.jpg?im=Crop%2Crect%3D%280%2C0%2C1920%2C1080%29%3B"
  },
  {
    id: 8,
    title: "Windsor scores average marks on Vital Signs report",
    description: "Video story analyzing community health indicators and quality of life metrics for Windsor-Essex region",
    type: "video",
    date: "October 8, 2025",
    author: "Jacob Barker",
    tags: ["Community", "Health", "Data"],
    url: "https://www.cbc.ca/news/canada/windsor/windsor-essex-community-foundation-vital-signs-report-9.6932182",
    imageUrl: "https://i.cbc.ca/ais/59df1e68-f97c-409e-88b3-6d0bfe86cda9,1759957599186/full/max/0/default.jpg?im=Crop%2Crect%3D%280%2C0%2C1920%2C1080%29%3B"
  },
  {
    id: 9,
    title: "Windsor high schoolers get a taste of a career in manufacturing",
    description: "Video package on youth career exploration program connecting students with local manufacturing opportunities",
    type: "video",
    date: "October 3, 2025",
    author: "Jacob Barker",
    tags: ["Education", "Manufacturing", "Youth"],
    url: "https://www.cbc.ca/player/play/video/9.6926925",
    imageUrl: "https://i.cbc.ca/ais/816630b3-ee0e-4f52-9e5c-1f383c30fb00,1759528251291/full/max/0/default.jpg?im=Crop%2Crect%3D%280%2C0%2C1920%2C1080%29%3BResize%3D620"
  },
  {
    id: 10,
    title: "Family hopes for meaningful recommendations as inquiry into overdose death at Windsor jail begins",
    description: "Coverage of public inquiry examining custodial facility safety protocols and systemic issues",
    type: "article",
    date: "September 15, 2025",
    author: "Jacob Barker",
    tags: ["Investigative", "Justice", "Public Safety"],
    url: "https://www.cbc.ca/news/canada/windsor/nathaniel-krug-inquiry-day-1-1.7634659",
    imageUrl: "https://i.cbc.ca/ais/1.2630177,1757978327000/full/max/0/default.jpg?im=Crop%2Crect%3D%280%2C0%2C1180%2C663%29%3B"
  },
  {
    id: 11,
    title: "Windsor woman has warning after a brazen daytime robbery",
    description: "Video report on public safety concerns following daytime robbery incident in Windsor",
    type: "video",
    date: "September 12, 2025",
    author: "Jacob Barker",
    tags: ["Crime", "Public Safety", "Community"],
    url: "https://www.cbc.ca/player/play/video/9.6901196",
    imageUrl: "https://i.cbc.ca/ais/1.7636643,1758143699000/full/max/0/default.jpg?im=Crop%2Crect%3D%280%2C166%2C2048%2C1152%29%3B"
  },
  {
    id: 12,
    title: "Youth mobile clinics expanding to more high schools in Windsor-Essex",
    description: "Video coverage of social workers in schools program expanding to two additional high schools",
    type: "video",
    date: "August 27, 2025",
    author: "Jacob Barker",
    tags: ["Education", "Health", "Youth"],
    url: "https://www.cbc.ca/player/play/video/9.6882171",
    imageUrl: "https://i.cbc.ca/ais/77b0ad3e-c392-45b7-ad01-cfb88e9577f3,1764961836467/full/max/0/default.jpg?im=Crop%2Crect%3D%280%2C659%2C3024%2C1701%29%3B"
  },
  {
    id: 13,
    title: "Union says lawsuit over federal pesticide safety rules aims to protect agricultural workers",
    description: "Legal action regarding occupational hazard information protocols for farm workers",
    type: "article",
    date: "June 9, 2025",
    author: "Jacob Barker",
    tags: ["Labour", "Health", "Agriculture"],
    url: "https://www.cbc.ca/news/canada/windsor/ufcu-pesticides-health-canada-lawsuit-1.7555846",
    imageUrl: "https://i.cbc.ca/ais/1.7555858,1749445466000/full/max/0/default.jpg?im=Crop%2Crect%3D%280%2C0%2C4032%2C2268%29%3B"
  },
  {
    id: 14,
    title: "No tax on tips? Experts warn against bringing U.S. proposal to Canada",
    description: "Economic analysis of cross-border tax policy considerations and hospitality industry impacts",
    type: "article",
    date: "June 5, 2025",
    author: "Jacob Barker",
    tags: ["Economics", "Policy", "Labour"],
    url: "https://www.cbc.ca/news/canada/windsor/no-tax-on-tips-canada-1.7552275",
    imageUrl: "https://i.cbc.ca/ais/1.7552676,1749076895000/full/max/0/default.jpg?im=Crop%2Crect%3D%280%2C0%2C1919%2C1079%29%3B"
  },
  {
    id: 15,
    title: "In a moment, this Windsor delivery driver's van was gone — and it was caught on camera",
    description: "Video investigation into vehicle theft caught on surveillance, highlighting crime concerns",
    type: "video",
    date: "April 17, 2025",
    author: "Jacob Barker",
    tags: ["Crime", "Community", "Investigation"],
    url: "https://www.cbc.ca/news/canada/windsor/deliver-van-windsor-stolen-1.7512697",
    imageUrl: "https://i.cbc.ca/ais/1.7512699,1744892220000/full/max/0/default.jpg?im=Crop%2Crect%3D%280%2C0%2C1919%2C1079%29%3B"
  },
  {
    id: 16,
    title: "Residents in Windsor, Ont., are bracing for possible tariffs",
    description: "Video report on local economic concerns and cross-border trade implications",
    type: "video",
    date: "March 7, 2025",
    author: "Jacob Barker",
    tags: ["Economy", "Trade", "Policy"],
    url: "https://www.cbc.ca/player/play/video/9.6676733",
    imageUrl: "https://i.cbc.ca/ais/1.7450701,1741049545000/full/max/0/default.jpg?im=Crop%2Crect%3D%280%2C99%2C5000%2C2812%29%3B"
  }
];

export default function ProjectsPage() {
  const [sortBy, setSortBy] = useState<SortOption>("date-newest");

  // Sort projects based on selected option
  const sortedProjects = [...projects].sort((a, b) => {
    switch (sortBy) {
      case "date-newest":
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case "date-oldest":
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case "title-az":
        return a.title.localeCompare(b.title);
      case "title-za":
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });

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
              <Link href="/projects" className="text-xs font-black text-[#D6B98C] uppercase tracking-widest">
                Projects
              </Link>
              <Link href="/about" className="text-xs font-black text-gray-600 hover:text-[#D6B98C] transition-colors uppercase tracking-widest">
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
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="mb-20 animate-fadeInUp">
            <h1 className="text-7xl md:text-8xl font-black text-[#1F2933] mb-6 leading-none tracking-tight uppercase">
              Projects
            </h1>
            <p className="text-2xl text-gray-700 font-bold max-w-2xl uppercase tracking-wide">
              A collection of journalism work covering Windsor-Essex communities
            </p>
          </div>

          {/* Sort Controls */}
          <div className="flex items-center justify-between mb-12 animate-fadeInUp delay-100">
            <div className="flex items-center gap-4">
              <span className="text-xs text-gray-600 font-black uppercase tracking-widest">Sort</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="px-6 py-3 bg-[#1F2933] text-white rounded-xl text-sm font-black uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-[#D6B98C] transition-all cursor-pointer"
              >
                <option value="date-newest">Newest First</option>
                <option value="date-oldest">Oldest First</option>
                <option value="title-az">A-Z</option>
                <option value="title-za">Z-A</option>
              </select>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {sortedProjects.map((project, index) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative block overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 animate-scaleIn delay-${Math.min(index * 100 + 200, 700)}`}
              >
                <div className="aspect-[4/5] relative overflow-hidden bg-gray-900">
                  {project.imageUrl ? (
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-800"></div>
                  )}

                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Type badge */}
                  <div className="absolute top-5 right-5">
                    {project.type === 'video' ? (
                      <div className="w-12 h-12 bg-[#D6B98C] rounded-full flex items-center justify-center shadow-xl">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    ) : (
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 shadow-xl">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Text content overlaid on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-[10px] font-black text-[#D6B98C] mb-2 uppercase tracking-widest">
                      {project.date}
                    </div>
                    <h3 className="font-black text-white text-2xl mb-3 leading-tight group-hover:text-[#D6B98C] transition-colors">
                      {project.title}
                    </h3>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-white/10 backdrop-blur-sm text-white rounded-lg text-[10px] font-black uppercase tracking-wider border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Add More Projects CTA */}
          <div className="mt-24 text-center">
            <p className="text-gray-700 mb-8 text-lg font-bold uppercase tracking-wide">
              Want to see more?
            </p>
            <a
              href="https://www.cbc.ca/news/canada/windsor/author/jacob-barker-1.3516281"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-[#1F2933] text-white px-12 py-6 rounded-2xl font-black text-lg hover:bg-[#D6B98C] transition-all duration-500 overflow-hidden shadow-xl hover:shadow-2xl uppercase tracking-wider"
            >
              <span className="relative z-10">View All CBC Stories</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </a>
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
