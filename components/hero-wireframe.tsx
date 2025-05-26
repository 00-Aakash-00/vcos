"use client"

import { useEffect, useRef, useState } from "react"

export default function HeroWireframe() {
  const svgRef = useRef<SVGSVGElement>(null)
  const [isHovered, setIsHovered] = useState<string | null>(null)

  useEffect(() => {
    // Scroll-based rotation animation
    const handleScroll = () => {
      if (svgRef.current) {
        const scrollY = window.scrollY
        const rotation = scrollY * 0.02
        svgRef.current.style.transform = `rotate(${rotation}deg)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative w-full h-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
      <svg
        ref={svgRef}
        viewBox="0 0 800 900"
        className="w-full h-full transition-transform duration-300 ease-out"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9B4DFF" />
            <stop offset="100%" stopColor="#FF6D1B" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="glowOrange">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feFlood floodColor="#FF6D1B" floodOpacity="0.5" />
            <feComposite in2="coloredBlur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background */}
        <rect width="100%" height="100%" fill="#1A1C22" opacity="0.05" rx="20" />

        {/* Main Browser Window */}
        <g className="animate-float">
          <rect
            x="100"
            y="150"
            width="600"
            height="400"
            rx="20"
            fill="none"
            stroke="url(#pulseGradient)"
            strokeWidth="2"
            filter={isHovered === "main" ? "url(#glow)" : ""}
            onMouseEnter={() => setIsHovered("main")}
            onMouseLeave={() => setIsHovered(null)}
            className="cursor-pointer transition-all duration-300"
          />

          {/* Browser Header */}
          <rect x="100" y="150" width="600" height="60" rx="20 20 0 0" fill="none" stroke="#9B4DFF" strokeWidth="2" />

          {/* Browser Controls */}
          <circle cx="130" cy="180" r="8" fill="none" stroke="#9B4DFF" strokeWidth="1.5" />
          <circle cx="160" cy="180" r="8" fill="none" stroke="#9B4DFF" strokeWidth="1.5" />
          <circle cx="190" cy="180" r="8" fill="none" stroke="#9B4DFF" strokeWidth="1.5" />

          {/* URL Bar */}
          <rect x="230" y="165" width="440" height="30" rx="15" fill="none" stroke="#9B4DFF" strokeWidth="1.5" />
        </g>

        {/* Content Area - Dashboard Layout */}
        <g className="animate-float-delayed">
          {/* Sidebar */}
          <rect
            x="120"
            y="230"
            width="150"
            height="300"
            rx="15"
            fill="none"
            stroke="#9B4DFF"
            strokeWidth="1.5"
            filter={isHovered === "sidebar" ? "url(#glowOrange)" : ""}
            onMouseEnter={() => setIsHovered("sidebar")}
            onMouseLeave={() => setIsHovered(null)}
            className="cursor-pointer transition-all duration-300"
          />

          {/* Sidebar Items */}
          <rect x="140" y="250" width="110" height="40" rx="10" fill="none" stroke="#9B4DFF" strokeWidth="1.5" />
          <rect x="140" y="300" width="110" height="40" rx="10" fill="none" stroke="#9B4DFF" strokeWidth="1.5" />
          <rect x="140" y="350" width="110" height="40" rx="10" fill="none" stroke="#9B4DFF" strokeWidth="1.5" />
          <rect x="140" y="400" width="110" height="40" rx="10" fill="none" stroke="#9B4DFF" strokeWidth="1.5" />
        </g>

        {/* Main Content Area */}
        <g className="animate-float">
          {/* Stats Cards */}
          <rect
            x="290"
            y="230"
            width="180"
            height="100"
            rx="15"
            fill="none"
            stroke="url(#pulseGradient)"
            strokeWidth="2"
            filter={isHovered === "stat1" ? "url(#glow)" : ""}
            onMouseEnter={() => setIsHovered("stat1")}
            onMouseLeave={() => setIsHovered(null)}
            className="cursor-pointer transition-all duration-300"
          />

          <rect
            x="490"
            y="230"
            width="180"
            height="100"
            rx="15"
            fill="none"
            stroke="url(#pulseGradient)"
            strokeWidth="2"
            filter={isHovered === "stat2" ? "url(#glow)" : ""}
            onMouseEnter={() => setIsHovered("stat2")}
            onMouseLeave={() => setIsHovered(null)}
            className="cursor-pointer transition-all duration-300"
          />

          {/* Chart Area */}
          <rect
            x="290"
            y="350"
            width="380"
            height="180"
            rx="15"
            fill="none"
            stroke="#9B4DFF"
            strokeWidth="2"
            filter={isHovered === "chart" ? "url(#glowOrange)" : ""}
            onMouseEnter={() => setIsHovered("chart")}
            onMouseLeave={() => setIsHovered(null)}
            className="cursor-pointer transition-all duration-300"
          />

          {/* Chart Lines */}
          <path
            d="M 320 480 L 380 450 L 440 460 L 500 420 L 560 440 L 620 400"
            fill="none"
            stroke="url(#pulseGradient)"
            strokeWidth="2"
            className="animate-draw"
          />
        </g>

        {/* Floating Elements */}
        <g className="animate-float-slow">
          {/* AI Module */}
          <rect
            x="50"
            y="50"
            width="140"
            height="80"
            rx="15"
            fill="none"
            stroke="#FF6D1B"
            strokeWidth="2"
            filter={isHovered === "ai" ? "url(#glowOrange)" : ""}
            onMouseEnter={() => setIsHovered("ai")}
            onMouseLeave={() => setIsHovered(null)}
            className="cursor-pointer transition-all duration-300"
          />
          <circle cx="120" cy="90" r="20" fill="none" stroke="#FF6D1B" strokeWidth="1.5" />

          {/* Data Module */}
          <rect
            x="610"
            y="50"
            width="140"
            height="80"
            rx="15"
            fill="none"
            stroke="#9B4DFF"
            strokeWidth="2"
            filter={isHovered === "data" ? "url(#glow)" : ""}
            onMouseEnter={() => setIsHovered("data")}
            onMouseLeave={() => setIsHovered(null)}
            className="cursor-pointer transition-all duration-300"
          />
          <rect x="640" y="70" width="80" height="10" rx="5" fill="none" stroke="#9B4DFF" strokeWidth="1.5" />
          <rect x="640" y="90" width="60" height="10" rx="5" fill="none" stroke="#9B4DFF" strokeWidth="1.5" />
          <rect x="640" y="110" width="70" height="10" rx="5" fill="none" stroke="#9B4DFF" strokeWidth="1.5" />
        </g>

        {/* Bottom Elements */}
        <g className="animate-float-delayed">
          {/* Action Buttons */}
          <rect
            x="200"
            y="600"
            width="180"
            height="60"
            rx="30"
            fill="none"
            stroke="url(#pulseGradient)"
            strokeWidth="2"
            filter={isHovered === "btn1" ? "url(#glow)" : ""}
            onMouseEnter={() => setIsHovered("btn1")}
            onMouseLeave={() => setIsHovered(null)}
            className="cursor-pointer transition-all duration-300"
          />

          <rect
            x="420"
            y="600"
            width="180"
            height="60"
            rx="30"
            fill="none"
            stroke="#9B4DFF"
            strokeWidth="2"
            filter={isHovered === "btn2" ? "url(#glowOrange)" : ""}
            onMouseEnter={() => setIsHovered("btn2")}
            onMouseLeave={() => setIsHovered(null)}
            className="cursor-pointer transition-all duration-300"
          />
        </g>

        {/* Decorative Circles */}
        <circle
          cx="150"
          cy="700"
          r="30"
          fill="none"
          stroke="url(#pulseGradient)"
          strokeWidth="1.5"
          className="animate-pulse-slow"
        />
        <circle
          cx="650"
          cy="700"
          r="30"
          fill="none"
          stroke="url(#pulseGradient)"
          strokeWidth="1.5"
          className="animate-pulse-slow"
        />

        {/* Connection Lines */}
        <path
          d="M 190 90 Q 400 120 610 90"
          fill="none"
          stroke="url(#pulseGradient)"
          strokeWidth="1"
          strokeDasharray="5,5"
          className="animate-dash"
        />

        <path
          d="M 120 130 Q 400 180 680 130"
          fill="none"
          stroke="#9B4DFF"
          strokeWidth="1"
          strokeDasharray="5,5"
          className="animate-dash-reverse"
        />
      </svg>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        
        @keyframes draw {
          from { stroke-dasharray: 0 1000; }
          to { stroke-dasharray: 1000 0; }
        }
        
        @keyframes dash {
          to { stroke-dashoffset: -10; }
        }
        
        @keyframes dash-reverse {
          to { stroke-dashoffset: 10; }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out 0.5s infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-draw {
          animation: draw 3s ease-in-out infinite alternate;
        }
        
        .animate-dash {
          animation: dash 20s linear infinite;
        }
        
        .animate-dash-reverse {
          animation: dash-reverse 20s linear infinite;
        }
      `}</style>
    </div>
  )
}
