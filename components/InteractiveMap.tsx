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
    coordinates: { x: 12, y: 72 },
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
    coordinates: { x: 28, y: 38 },
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
    coordinates: { x: 82, y: 48 },
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
    coordinates: { x: 55, y: 75 },
    order: 4,
    isCurrent: true,
    stories: [
      { title: "Auto industry transformation", type: "Economy" },
      { title: "Immigration and newcomer stories", type: "Community" },
      { title: "Housing and infrastructure", type: "Infrastructure" },
    ],
  },
];

// SVG path for simplified Canada outline
const canadaPath = `M 5,70
  C 8,68 10,65 12,68
  L 12,72 C 10,76 8,78 5,80
  L 5,70 Z
  M 12,55
  C 15,50 20,45 25,42
  C 30,38 35,35 40,33
  C 45,30 50,28 55,30
  C 60,32 65,35 70,38
  C 75,42 80,45 85,48
  C 90,52 92,58 90,62
  C 88,66 85,70 80,72
  C 75,74 70,75 65,76
  C 60,77 55,78 50,78
  C 45,78 40,77 35,75
  C 30,73 25,70 20,68
  C 15,66 12,62 12,55 Z
  M 15,40
  C 18,35 22,30 28,28
  C 34,26 40,25 45,24
  C 50,23 55,22 60,22
  C 65,22 70,24 75,28
  C 80,32 82,38 80,42
  L 75,38 C 70,35 65,33 60,33
  C 55,33 50,34 45,36
  C 40,38 35,40 30,40
  C 25,40 20,38 15,40 Z`;

// Province paths for the minimal style map
const provinces = {
  bc: "M 5,55 L 5,80 L 15,82 L 18,70 L 20,55 L 15,45 L 8,48 Z",
  ab: "M 18,50 L 18,75 L 28,75 L 28,50 Z",
  sk: "M 28,50 L 28,75 L 38,75 L 38,50 Z",
  mb: "M 38,50 L 38,78 L 48,80 L 50,55 L 45,48 Z",
  on: "M 48,55 L 45,80 L 62,82 L 68,70 L 60,55 Z",
  qc: "M 62,45 L 58,75 L 78,80 L 85,55 L 75,40 Z",
  nb: "M 80,68 L 78,75 L 85,78 L 87,72 Z",
  ns: "M 85,72 L 83,78 L 92,80 L 93,75 Z",
  pe: "M 86,68 L 85,71 L 89,71 L 89,68 Z",
  nl: "M 78,48 L 75,60 L 88,65 L 95,52 L 88,45 Z",
  yt: "M 5,30 L 5,50 L 15,50 L 18,35 L 12,28 Z",
  nt: "M 15,25 L 12,55 L 45,55 L 50,35 L 35,20 L 20,22 Z",
  nu: "M 45,15 L 40,50 L 70,55 L 85,35 L 70,15 L 55,10 Z",
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
          viewBox="0 0 100 95"
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
              strokeWidth="0.3"
              className="transition-all duration-300"
            />
          ))}

          {/* Journey path connecting locations */}
          <path
            d={`M ${locations[0].coordinates.x},${locations[0].coordinates.y}
                C ${locations[0].coordinates.x + 10},${locations[0].coordinates.y - 20}
                  ${locations[1].coordinates.x - 5},${locations[1].coordinates.y + 10}
                  ${locations[1].coordinates.x},${locations[1].coordinates.y}
                C ${locations[1].coordinates.x + 20},${locations[1].coordinates.y + 5}
                  ${locations[2].coordinates.x - 15},${locations[2].coordinates.y - 5}
                  ${locations[2].coordinates.x},${locations[2].coordinates.y}
                C ${locations[2].coordinates.x - 10},${locations[2].coordinates.y + 15}
                  ${locations[3].coordinates.x + 10},${locations[3].coordinates.y - 5}
                  ${locations[3].coordinates.x},${locations[3].coordinates.y}`}
            fill="none"
            stroke="url(#journeyGradient)"
            strokeWidth="0.8"
            strokeDasharray="2,2"
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
              <feGaussianBlur stdDeviation="1" result="coloredBlur" />
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
                      r="4"
                      fill="none"
                      stroke="#2563EB"
                      strokeWidth="0.3"
                      className="animate-ping"
                      style={{ transformOrigin: `${location.coordinates.x}px ${location.coordinates.y}px` }}
                    />
                    <circle
                      cx={location.coordinates.x}
                      cy={location.coordinates.y}
                      r="6"
                      fill="none"
                      stroke="#2563EB"
                      strokeWidth="0.2"
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
                  r={isActive ? "3.5" : "3"}
                  fill="white"
                  stroke={location.isCurrent ? "#2563EB" : "#64748B"}
                  strokeWidth={isActive ? "0.6" : "0.4"}
                  filter={isActive ? "url(#glow)" : undefined}
                  className="transition-all duration-300"
                />

                {/* Inner dot */}
                <circle
                  cx={location.coordinates.x}
                  cy={location.coordinates.y}
                  r={isActive ? "1.8" : "1.5"}
                  fill={location.isCurrent ? "#2563EB" : isActive ? "#2563EB" : "#0F172A"}
                  className="transition-all duration-300"
                />

                {/* Order number */}
                <text
                  x={location.coordinates.x}
                  y={location.coordinates.y + 0.5}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  fontSize="1.5"
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
                      x={location.coordinates.x - 12}
                      y={location.coordinates.y - 10}
                      width="24"
                      height="5"
                      rx="1"
                      fill="#0F172A"
                      opacity="0.9"
                    />
                    <text
                      x={location.coordinates.x}
                      y={location.coordinates.y - 7}
                      textAnchor="middle"
                      fill="white"
                      fontSize="2"
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
