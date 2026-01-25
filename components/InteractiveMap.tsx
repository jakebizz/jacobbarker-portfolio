"use client";

import { useState } from "react";

// Career location data
const locations = [
  {
    id: "vancouver",
    name: "Vancouver",
    province: "British Columbia",
    years: "2010 - 2012",
    role: "ENG Camera Operator & Editor / Video Journalist",
    company: "CBC Vancouver / BBN3 / Vancouver Observer",
    description: "Started my career in Canada's third-largest market, honing camera and editing skills at CBC while building early digital journalism experience.",
    coordinates: { x: 85, y: 620 },
    order: 1,
    stories: [
      { title: "Technical foundation in major market newsroom", type: "Career" },
      { title: "Multi-platform digital journalism experience", type: "Career" },
      { title: "BCIT Broadcast Journalism graduate", type: "Education" },
    ],
  },
  {
    id: "hayriver",
    name: "Hay River",
    province: "Northwest Territories",
    years: "2012 - 2015",
    role: "Video Journalist",
    company: "CBC North",
    description: "First northern posting covering Canada's Arctic. Reported on territorial politics, mining, and Indigenous communities while building one-person-band expertise.",
    coordinates: { x: 250, y: 340 },
    order: 2,
    stories: [
      { title: "Territorial politics and governance", type: "Politics" },
      { title: "Mining and resource development", type: "Economy" },
      { title: "Northern community life", type: "Community" },
    ],
  },
  {
    id: "goosebay",
    name: "Happy Valley-Goose Bay",
    province: "Labrador",
    years: "2015 - 2020",
    role: "Video Journalist",
    company: "CBC Newfoundland and Labrador",
    description: "Solo videojournalist covering Canada's remote eastern coast. Developed expertise in Indigenous affairs, resource development, and remote field production.",
    coordinates: { x: 750, y: 430 },
    order: 3,
    stories: [
      { title: "Indigenous communities and reconciliation", type: "Community" },
      { title: "Muskrat Falls hydroelectric project", type: "Environment" },
      { title: "Military base and community impact", type: "Community" },
    ],
  },
  {
    id: "windsor",
    name: "Windsor",
    province: "Ontario",
    years: "2020 - Present",
    role: "Video Journalist / Producer",
    company: "CBC Windsor",
    description: "Currently covering southwestern Ontario's diverse communities. Focus on auto industry, immigration, housing, and municipal affairs. Also serve as CBC AI Trainer.",
    coordinates: { x: 450, y: 610 },
    order: 4,
    isCurrent: true,
    stories: [
      { title: "Auto industry transformation", type: "Economy" },
      { title: "Immigration and newcomer stories", type: "Community" },
      { title: "Housing and infrastructure", type: "Infrastructure" },
    ],
  },
];

// Realistic Canada province/territory paths (viewBox 0 0 900 700)
const provinces = {
  // British Columbia - west coast with coastal detail
  bc: "M 40,430 L 45,480 L 50,520 L 55,555 L 60,580 L 70,600 L 85,615 L 100,625 L 115,620 L 125,600 L 130,570 L 130,530 L 128,490 L 125,450 L 120,420 L 115,395 L 108,375 L 100,360 L 90,350 L 78,345 L 65,350 L 55,365 L 48,385 L 43,410 L 40,430 Z",
  // Alberta - mostly rectangular
  ab: "M 130,570 L 130,395 L 200,395 L 200,570 L 130,570 Z",
  // Saskatchewan - rectangular
  sk: "M 200,570 L 200,395 L 275,395 L 275,570 L 200,570 Z",
  // Manitoba - with Hudson Bay coastline
  mb: "M 275,570 L 275,395 L 320,395 L 345,380 L 365,355 L 380,340 L 390,355 L 388,390 L 382,430 L 372,475 L 358,520 L 345,555 L 330,575 L 310,580 L 290,575 L 275,570 Z",
  // Ontario - with Great Lakes southern boundary
  on: "M 330,575 L 355,545 L 378,505 L 398,470 L 420,445 L 448,425 L 480,415 L 510,420 L 535,440 L 548,470 L 545,510 L 530,550 L 505,585 L 475,615 L 440,635 L 405,645 L 375,640 L 350,625 L 335,600 L 330,575 Z",
  // Quebec - large with Labrador
  qc: "M 535,440 L 555,415 L 585,385 L 620,360 L 660,345 L 700,340 L 730,355 L 745,385 L 742,425 L 725,465 L 698,500 L 665,530 L 628,555 L 590,570 L 555,575 L 530,565 L 518,535 L 520,495 L 535,440 Z",
  // New Brunswick
  nb: "M 665,545 L 688,530 L 712,538 L 725,555 L 720,575 L 700,588 L 678,582 L 665,565 L 665,545 Z",
  // Nova Scotia - peninsula shape
  ns: "M 725,555 L 748,542 L 778,550 L 800,568 L 805,590 L 792,605 L 765,612 L 738,605 L 722,588 L 725,570 L 725,555 Z",
  // Prince Edward Island
  pe: "M 718,520 L 745,515 L 768,522 L 772,535 L 758,542 L 732,542 L 718,532 L 718,520 Z",
  // Newfoundland and Labrador - island + mainland
  nl: "M 730,355 L 765,340 L 800,345 L 830,365 L 845,395 L 840,430 L 820,460 L 790,480 L 755,490 L 725,485 L 705,465 L 700,430 L 710,395 L 730,355 Z M 768,505 L 802,498 L 835,510 L 855,535 L 858,565 L 842,590 L 810,600 L 778,595 L 758,572 L 755,540 L 768,505 Z",
  // Yukon - triangular territory
  yt: "M 40,340 L 45,280 L 55,235 L 75,200 L 100,180 L 115,195 L 118,240 L 115,290 L 110,340 L 105,375 L 100,360 L 78,345 L 55,365 L 43,355 L 40,340 Z",
  // Northwest Territories - large central north
  nt: "M 115,195 L 145,175 L 190,160 L 240,155 L 290,165 L 330,185 L 355,215 L 365,255 L 358,300 L 340,345 L 320,380 L 320,395 L 275,395 L 200,395 L 130,395 L 120,375 L 115,340 L 118,290 L 118,240 L 115,195 Z",
  // Nunavut - Arctic with islands
  nu: "M 355,215 L 400,185 L 460,160 L 525,145 L 590,150 L 645,175 L 685,210 L 705,260 L 700,315 L 680,360 L 660,345 L 620,360 L 585,385 L 555,415 L 535,440 L 510,420 L 480,415 L 448,425 L 420,445 L 398,470 L 378,450 L 365,400 L 355,350 L 350,295 L 355,215 Z M 480,100 L 530,90 L 580,100 L 615,125 L 625,155 L 605,180 L 565,185 L 520,175 L 485,150 L 480,120 L 480,100 Z M 400,130 L 445,118 L 485,128 L 498,150 L 485,172 L 445,180 L 408,168 L 400,145 L 400,130 Z",
};

export default function InteractiveMap() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  const selectedData = locations.find((loc) => loc.id === selectedLocation);

  return (
    <div className="relative w-full">
      {/* Map Container */}
      <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 overflow-hidden">
        {/* Decorative grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0F172A 1px, transparent 1px),
              linear-gradient(to bottom, #0F172A 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />

        {/* SVG Map */}
        <svg
          viewBox="0 0 900 700"
          className="w-full h-auto max-h-[500px]"
          style={{ filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))" }}
        >
          {/* Province fills */}
          {Object.entries(provinces).map(([key, path]) => (
            <path
              key={key}
              d={path}
              fill="#E2E8F0"
              stroke="#CBD5E1"
              strokeWidth="2"
              className="transition-all duration-300"
            />
          ))}

          {/* Journey path connecting locations */}
          <path
            d={`M ${locations[0].coordinates.x},${locations[0].coordinates.y}
                C ${locations[0].coordinates.x + 80},${locations[0].coordinates.y - 150}
                  ${locations[1].coordinates.x - 50},${locations[1].coordinates.y + 80}
                  ${locations[1].coordinates.x},${locations[1].coordinates.y}
                C ${locations[1].coordinates.x + 200},${locations[1].coordinates.y + 50}
                  ${locations[2].coordinates.x - 150},${locations[2].coordinates.y - 50}
                  ${locations[2].coordinates.x},${locations[2].coordinates.y}
                C ${locations[2].coordinates.x - 100},${locations[2].coordinates.y + 120}
                  ${locations[3].coordinates.x + 80},${locations[3].coordinates.y - 50}
                  ${locations[3].coordinates.x},${locations[3].coordinates.y}`}
            fill="none"
            stroke="url(#journeyGradient)"
            strokeWidth="4"
            strokeDasharray="15,10"
            className="animate-dash"
            style={{
              strokeDashoffset: 0,
              animation: "dash 30s linear infinite",
            }}
          />

          {/* Gradient definition */}
          <defs>
            <linearGradient id="journeyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#94A3B8" />
              <stop offset="50%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="8" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Location markers */}
          {locations.map((location, index) => {
            const isSelected = selectedLocation === location.id;
            const isHovered = hoveredLocation === location.id;
            const isActive = isSelected || isHovered;

            return (
              <g
                key={location.id}
                className="cursor-pointer"
                onClick={() => setSelectedLocation(isSelected ? null : location.id)}
                onMouseEnter={() => setHoveredLocation(location.id)}
                onMouseLeave={() => setHoveredLocation(null)}
                style={{
                  animation: `fadeInMarker 0.5s ease-out ${index * 0.15}s forwards`,
                  opacity: 0,
                }}
              >
                {/* Pulse ring for current location */}
                {location.isCurrent && (
                  <>
                    <circle
                      cx={location.coordinates.x}
                      cy={location.coordinates.y}
                      r="35"
                      fill="none"
                      stroke="#2563EB"
                      strokeWidth="2"
                      className="animate-ping"
                      style={{ transformOrigin: `${location.coordinates.x}px ${location.coordinates.y}px` }}
                    />
                    <circle
                      cx={location.coordinates.x}
                      cy={location.coordinates.y}
                      r="50"
                      fill="none"
                      stroke="#2563EB"
                      strokeWidth="1.5"
                      opacity="0.3"
                      className="animate-ping"
                      style={{
                        transformOrigin: `${location.coordinates.x}px ${location.coordinates.y}px`,
                        animationDelay: "0.5s"
                      }}
                    />
                  </>
                )}

                {/* Outer ring */}
                <circle
                  cx={location.coordinates.x}
                  cy={location.coordinates.y}
                  r={isActive ? 28 : 24}
                  fill="white"
                  stroke={location.isCurrent ? "#2563EB" : "#64748B"}
                  strokeWidth={isActive ? 4 : 3}
                  filter={isActive ? "url(#glow)" : undefined}
                  className="transition-all duration-300"
                />

                {/* Inner dot */}
                <circle
                  cx={location.coordinates.x}
                  cy={location.coordinates.y}
                  r={isActive ? 16 : 14}
                  fill={location.isCurrent ? "#2563EB" : isActive ? "#2563EB" : "#0F172A"}
                  className="transition-all duration-300"
                />

                {/* Order number */}
                <text
                  x={location.coordinates.x}
                  y={location.coordinates.y + 4}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  fontSize="16"
                  fontWeight="bold"
                  className="pointer-events-none select-none"
                >
                  {location.order}
                </text>

                {/* Label on hover */}
                {isActive && (
                  <g
                    style={{
                      animation: "fadeIn 0.2s ease-out forwards",
                    }}
                  >
                    <rect
                      x={location.coordinates.x - 70}
                      y={location.coordinates.y - 55}
                      width="140"
                      height="30"
                      rx="6"
                      fill="#0F172A"
                      opacity="0.9"
                    />
                    <text
                      x={location.coordinates.x}
                      y={location.coordinates.y - 35}
                      textAnchor="middle"
                      fill="white"
                      fontSize="16"
                      fontWeight="bold"
                      className="uppercase"
                    >
                      {location.name}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 flex items-center gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#2563EB] animate-pulse" />
            <span className="font-medium">Current</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-0.5 bg-gradient-to-r from-slate-400 to-[#2563EB]" style={{ backgroundImage: "repeating-linear-gradient(90deg, #64748B 0, #64748B 4px, transparent 4px, transparent 8px)" }} />
            <span className="font-medium">Career Path</span>
          </div>
        </div>

        {/* Instruction hint */}
        {!selectedLocation && (
          <div className="absolute bottom-4 right-4 text-xs text-slate-400 font-medium animate-pulse">
            Click a marker to explore →
          </div>
        )}
      </div>

      {/* Expandable Story Card */}
      <div
        className={`mt-6 overflow-hidden transition-all duration-500 ease-out ${
          selectedData ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {selectedData && (
          <div
            className="bg-white rounded-2xl border-2 border-slate-200 shadow-xl overflow-hidden"
            style={{ animation: "slideUp 0.4s ease-out forwards" }}
          >
            {/* Header */}
            <div className={`p-6 ${selectedData.isCurrent ? "bg-gradient-to-r from-[#2563EB] to-[#1E40AF]" : "bg-gradient-to-r from-slate-700 to-slate-800"}`}>
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    {selectedData.isCurrent && (
                      <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                        CURRENT
                      </span>
                    )}
                    <span className="text-white/80 text-sm font-medium">
                      {selectedData.years}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-1">
                    {selectedData.name}, {selectedData.province}
                  </h3>
                  <p className="text-white/90 font-semibold">{selectedData.role}</p>
                  <p className="text-white/70 text-sm">{selectedData.company}</p>
                </div>
                <button
                  onClick={() => setSelectedLocation(null)}
                  className="text-white/60 hover:text-white transition-colors p-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-slate-600 leading-relaxed mb-6">
                {selectedData.description}
              </p>

              {/* Stories/Coverage */}
              <div>
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-4">
                  Notable Coverage
                </h4>
                <div className="grid gap-3">
                  {selectedData.stories.map((story, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                      style={{
                        animation: `slideIn 0.3s ease-out ${index * 0.1}s forwards`,
                        opacity: 0,
                      }}
                    >
                      <span className={`text-xs font-bold px-2 py-1 rounded-md ${
                        story.type === "Economy" ? "bg-emerald-100 text-emerald-700" :
                        story.type === "Community" ? "bg-blue-100 text-blue-700" :
                        story.type === "Politics" ? "bg-purple-100 text-purple-700" :
                        story.type === "Environment" ? "bg-green-100 text-green-700" :
                        story.type === "Infrastructure" ? "bg-amber-100 text-amber-700" :
                        story.type === "Career" ? "bg-slate-200 text-slate-700" :
                        "bg-gray-100 text-gray-700"
                      }`}>
                        {story.type}
                      </span>
                      <span className="text-slate-700 font-medium">{story.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="px-6 pb-6 flex justify-center gap-2">
              {locations.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setSelectedLocation(loc.id)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    loc.id === selectedLocation
                      ? "bg-[#2563EB] w-6"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  title={loc.name}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInMarker {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }
        .animate-dash {
          animation: dash 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
