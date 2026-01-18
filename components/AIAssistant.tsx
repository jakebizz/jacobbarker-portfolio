"use client";

import { useState } from "react";

const prompt = `Tell me about Jacob Barker's journalism career. He's a videojournalist with CBC Windsor who has been working in broadcast journalism since 2010. His work spans video, audio, and written journalism covering Windsor-Essex communities. He covers topics including infrastructure, human interest stories, social issues, immigration, healthcare, automotive industry, and investigative reporting. He's also a CBC AI trainer and has AVID Media Composer certification. His career has taken him from Vancouver to Hay River (Northwest Territories), Happy Valley-Goose Bay (Labrador), and now Windsor, Ontario. Summarize his experience and notable work.`;

export default function AIAssistant() {
  const [clicked, setClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const urlWithPrompt = `https://www.perplexity.ai/?q=${encodeURIComponent(prompt)}`;
    window.open(urlWithPrompt, "_blank");
    setClicked(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setClicked(false);
    }, 3000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Success notification */}
      {clicked && (
        <div className="absolute -top-12 right-0 bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-lg text-sm text-gray-700 whitespace-nowrap animate-fade-in">
          ✓ Opening Perplexity...
        </div>
      )}

      {/* Perplexity button with expanding text on hover */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative bg-white border-2 border-gray-200 rounded-full shadow-lg hover:shadow-xl transition-all hover:border-gray-300 flex items-center justify-center gap-2 overflow-hidden"
        style={{
          width: isHovered ? 'auto' : '56px',
          height: '56px',
          paddingLeft: '14px',
          paddingRight: isHovered ? '16px' : '14px',
        }}
      >
        <img
          src="https://cdn.simpleicons.org/perplexity/808080"
          alt="Perplexity AI"
          width={28}
          height={28}
          className="opacity-70 group-hover:opacity-100 transition-all flex-shrink-0"
        />
        <span
          className="text-sm text-gray-700 font-medium whitespace-nowrap transition-all"
          style={{
            maxWidth: isHovered ? '200px' : '0px',
            opacity: isHovered ? 1 : 0,
          }}
        >
          Ask AI about my work
        </span>
      </button>
    </div>
  );
}
