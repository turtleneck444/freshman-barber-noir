import { useEffect, useRef, useState } from "react"
import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react"
import { motion } from "framer-motion"
import { Calendar, MapPin, Clock, ArrowRight, Scissors, Star, Award, Shield } from "lucide-react"

export default function BarbershopHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true)
    const handleMouseLeave = () => setIsActive(false)

    const container = containerRef.current
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-black relative overflow-hidden">
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0"
              result="tint"
            />
          </filter>
          <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
          <filter id="logo-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          <filter id="text-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#000000", "#ef4444", "#3b82f6", "#1f2937", "#dc2626"]}
        speed={0.3}
        backgroundColor="#000000"
      />
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-60"
        colors={["#000000", "#ffffff", "#ef4444", "#3b82f6"]}
        speed={0.2}
        wireframe="true"
        backgroundColor="transparent"
      />

      <header className="relative z-20 flex items-center justify-between p-6">
        <motion.div
          className="flex items-center group cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <motion.div
            className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 overflow-hidden"
            whileHover={{
              rotate: [0, -2, 2, 0],
              transition: {
                rotate: { duration: 0.6, ease: "easeInOut" },
              },
            }}
          >
            <img 
              src="/freshmenlogo.jpg" 
              alt="The Freshmen Barbershop" 
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </motion.div>

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/60 rounded-full"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                }}
                animate={{
                  y: [-10, -20, -10],
                  x: [0, Math.random() * 20 - 10, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Navigation */}
        <nav className="flex items-center space-x-2">
          <a
            href="#services"
            className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
          >
            Services
          </a>
          <a
            href="#booking"
            className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
          >
            Booking
          </a>
          <a
            href="#contact"
            className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
          >
            Contact
          </a>
        </nav>

        {/* Book Now Button Group with Arrow */}
        <div id="gooey-btn" className="relative flex items-center group" style={{ filter: "url(#gooey-filter)" }}>
          <button className="absolute right-0 px-2.5 py-2 rounded-full bg-red-600 text-white font-normal text-xs transition-all duration-300 hover:bg-red-500 cursor-pointer h-8 flex items-center justify-center -translate-x-10 group-hover:-translate-x-19 z-0">
            <ArrowRight className="w-3 h-3" />
          </button>
          <button className="px-6 py-2 rounded-full bg-red-600 text-white font-normal text-xs transition-all duration-300 hover:bg-red-500 cursor-pointer h-8 flex items-center z-10">
            Book Now
          </button>
        </div>
      </header>

      <main className="absolute bottom-8 left-8 z-20 max-w-5xl">
        <div className="text-left">
          <motion.div
            className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm mb-8 relative border border-white/20"
            style={{
              filter: "url(#glass-effect)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full" />
            <Award className="h-4 w-4 text-white/90 mr-2" />
            <span className="text-white/90 text-sm font-medium relative z-10 tracking-wide">
              Mississauga's Premier Barbershop
            </span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-none tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span
              className="block font-light text-white/95 text-4xl md:text-5xl lg:text-6xl mb-4 tracking-wider"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "url(#text-glow)",
              }}
            >
              THE FRESHMEN
            </motion.span>
            <span className="block font-black text-white drop-shadow-2xl mb-4">BARBERSHOP</span>
            <motion.span 
              className="block font-light text-white/90 italic text-2xl md:text-3xl lg:text-4xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Where tradition meets innovation
            </motion.span>
          </motion.h1>

          <motion.div
            className="text-xl font-light text-white/80 mb-10 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <p className="mb-4 text-2xl">Experience the future of barbering.</p>
            <p className="mb-4 text-2xl">Premium cuts, classic techniques.</p>
            <p className="text-3xl font-medium text-white">
              Where tradition meets innovation.
            </p>
          </motion.div>

          {/* Enhanced Location Cards */}
          <motion.div
            className="flex flex-wrap items-center gap-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="group flex items-center space-x-4 bg-white/10 backdrop-blur-xl px-6 py-4 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-2xl">
              <div className="p-3 rounded-full bg-red-500/20 group-hover:bg-red-500/30 transition-all duration-300">
                <MapPin className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <p className="text-white/90 font-semibold text-lg">Location</p>
                <p className="text-white/70 text-sm">167 Queen Street South, Unit 4</p>
                <p className="text-white/70 text-sm">Mississauga, ON</p>
              </div>
            </div>
            
            <div className="group flex items-center space-x-4 bg-white/10 backdrop-blur-xl px-6 py-4 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-2xl">
              <div className="p-3 rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 transition-all duration-300">
                <Clock className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <p className="text-white/90 font-semibold text-lg">Hours</p>
                <p className="text-white/70 text-sm">Mon-Fri: 9AM-8PM</p>
                <p className="text-white/70 text-sm">Sat-Sun: 10AM-6PM</p>
              </div>
            </div>

            <div className="group flex items-center space-x-4 bg-white/10 backdrop-blur-xl px-6 py-4 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-2xl">
              <div className="p-3 rounded-full bg-green-500/20 group-hover:bg-green-500/30 transition-all duration-300">
                <Shield className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <p className="text-white/90 font-semibold text-lg">Experience</p>
                <p className="text-white/70 text-sm">15+ Years</p>
                <p className="text-white/70 text-sm">Expert Barbers</p>
              </div>
            </div>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            className="flex items-center gap-8 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <motion.button
              className="px-12 py-5 rounded-full bg-transparent border-2 border-white/30 text-white font-semibold text-lg transition-all duration-500 hover:bg-white/10 hover:border-white/50 hover:text-white cursor-pointer backdrop-blur-sm flex items-center gap-3 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              View Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
            
            <motion.button
              className="px-12 py-5 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-lg transition-all duration-500 hover:from-red-500 hover:to-red-600 cursor-pointer shadow-2xl hover:shadow-3xl flex items-center gap-3 group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center gap-3">
                <Scissors className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Book Appointment
                <div className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </motion.button>
          </motion.div>
        </div>
      </main>

      <div className="absolute bottom-8 right-8 z-30">
        <div className="relative w-24 h-24 flex items-center justify-center">
          <PulsingBorder
            colors={["#ef4444", "#3b82f6", "#ffffff", "#dc2626", "#1d4ed8", "#f97316", "#ffffff"]}
            colorBack="#00000000"
            speed={1.5}
            roundness={1}
            thickness={0.1}
            softness={0.2}
            intensity={5}
            spotsPerColor={5}
            spotSize={0.1}
            pulse={0.1}
            smoke={0.5}
            smokeSize={4}
            scale={0.65}
            rotation={0}
            frame={9161408.251009725}
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
            }}
          />

          {/* Rotating Text Around the Pulsing Border */}
          <motion.svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{ transform: "scale(1.8)" }}
          >
            <defs>
              <path id="circle" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
            </defs>
            <text className="text-sm fill-white/80 font-medium">
              <textPath href="#circle" startOffset="0%">
                The Freshmen Barbershop • Premium Cuts • Classic Techniques • Where Tradition Meets Innovation •
              </textPath>
            </text>
          </motion.svg>
        </div>
      </div>
    </div>
  )
}
