import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // Barbershop Color System
        "barbershop-black": "hsl(var(--barbershop-black))",
        "barbershop-white": "hsl(var(--barbershop-white))",
        "barbershop-gray-light": "hsl(var(--barbershop-gray-light))",
        "barbershop-gray": "hsl(var(--barbershop-gray))",
        "barbershop-gray-dark": "hsl(var(--barbershop-gray-dark))",
        
        "barber-red": "hsl(var(--barber-red))",
        "barber-red-dark": "hsl(var(--barber-red-dark))",
        "barber-red-light": "hsl(var(--barber-red-light))",
        "barber-blue": "hsl(var(--barber-blue))",
        "barber-blue-dark": "hsl(var(--barber-blue-dark))",
        "barber-blue-light": "hsl(var(--barber-blue-light))",
        "barber-gold": "hsl(var(--barber-gold))",
        "barber-gold-dark": "hsl(var(--barber-gold-dark))",
        "barber-platinum": "hsl(var(--barber-platinum))",
        "barber-platinum-dark": "hsl(var(--barber-platinum-dark))",
        
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'orbitron': ['Orbitron', 'monospace'],
      },
      backgroundImage: {
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-barber': 'var(--gradient-barber)',
        'gradient-accent': 'var(--gradient-accent)',
        'gradient-subtle': 'var(--gradient-subtle)',
        'gradient-platinum': 'var(--gradient-platinum)',
        'gradient-gold': 'var(--gradient-gold)',
        'gradient-luxury': 'var(--gradient-luxury)',
        'gradient-premium': 'var(--gradient-premium)',
      },
      boxShadow: {
        'powerful': 'var(--shadow-powerful)',
        'barber': 'var(--shadow-barber)',
        'glow': 'var(--shadow-glow)',
        'luxury': 'var(--shadow-luxury)',
        'floating': 'var(--shadow-floating)',
        'ultra': 'var(--shadow-ultra)',
        'platinum': 'var(--glow-platinum)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        
        // Luxury Animations
        "shimmer": {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "luxury-loading": {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "scroll-progress": {
          "0%": { left: "-100%" },
          "50%": { left: "0%" },
          "100%": { left: "100%" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "fade-in-up": {
          "0%": { 
            opacity: "0", 
            transform: "translateY(40px)" 
          },
          "100%": { 
            opacity: "1", 
            transform: "translateY(0)" 
          },
        },
        "fade-in-scale": {
          "0%": { 
            opacity: "0", 
            transform: "scale(0.8)" 
          },
          "100%": { 
            opacity: "1", 
            transform: "scale(1)" 
          },
        },
        "slide-in-left": {
          "0%": { 
            opacity: "0", 
            transform: "translateX(-100px)" 
          },
          "100%": { 
            opacity: "1", 
            transform: "translateX(0)" 
          },
        },
        "slide-in-right": {
          "0%": { 
            opacity: "0", 
            transform: "translateX(100px)" 
          },
          "100%": { 
            opacity: "1", 
            transform: "translateX(0)" 
          },
        },
        "luxury-bounce": {
          "0%, 20%, 53%, 80%, 100%": { 
            transform: "translate3d(0,0,0)" 
          },
          "40%, 43%": { 
            transform: "translate3d(0, -30px, 0)" 
          },
          "70%": { 
            transform: "translate3d(0, -15px, 0)" 
          },
          "90%": { 
            transform: "translate3d(0, -4px, 0)" 
          },
        },
        "glow-pulse": {
          "0%, 100%": { 
            boxShadow: "0 0 30px hsl(var(--barber-red) / 0.4), 0 0 60px hsl(var(--barber-blue) / 0.2)" 
          },
          "50%": { 
            boxShadow: "0 0 60px hsl(var(--barber-red) / 0.8), 0 0 120px hsl(var(--barber-blue) / 0.6), 0 0 180px hsl(var(--barber-gold) / 0.4)" 
          },
        },
        "ultra-glow": {
          "0%, 100%": { 
            boxShadow: "0 0 40px hsl(var(--barber-red) / 0.5), 0 0 80px hsl(var(--barber-blue) / 0.3), 0 0 120px hsl(var(--barber-gold) / 0.2)" 
          },
          "33%": { 
            boxShadow: "0 0 80px hsl(var(--barber-blue) / 0.7), 0 0 160px hsl(var(--barber-gold) / 0.5), 0 0 240px hsl(var(--barber-red) / 0.3)" 
          },
          "66%": { 
            boxShadow: "0 0 120px hsl(var(--barber-gold) / 0.9), 0 0 240px hsl(var(--barber-red) / 0.7), 0 0 360px hsl(var(--barber-blue) / 0.5)" 
          },
        },
        "premium-float": {
          "0%, 100%": { 
            transform: "translateY(0px) rotateX(0deg)",
            filter: "brightness(100%)"
          },
          "50%": { 
            transform: "translateY(-30px) rotateX(5deg)",
            filter: "brightness(110%)"
          },
        },
        "luxury-scale": {
          "0%, 100%": { 
            transform: "scale(1) rotateZ(0deg)" 
          },
          "50%": { 
            transform: "scale(1.05) rotateZ(1deg)" 
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        
        // Luxury Animations
        "shimmer": "shimmer 3s ease-in-out infinite",
        "luxury-loading": "luxury-loading 2s ease-in-out infinite",
        "scroll-progress": "scroll-progress 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out",
        "fade-in-scale": "fade-in-scale 0.6s ease-out",
        "slide-in-left": "slide-in-left 0.8s ease-out",
        "slide-in-right": "slide-in-right 0.8s ease-out",
        "luxury-bounce": "luxury-bounce 2s ease-in-out",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        
        // Ultra-Premium Delayed Animations
        "fade-in-up-delay": "fade-in-up 0.8s ease-out 0.2s both",
        "fade-in-scale-delay": "fade-in-scale 0.6s ease-out 0.4s both",
        "slide-in-left-delay": "slide-in-left 0.8s ease-out 0.6s both",
        "ultra-glow": "ultra-glow 3s ease-in-out infinite",
        "premium-float": "premium-float 4s ease-in-out infinite",
        "luxury-scale": "luxury-scale 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
