module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: "#000000", // black - sophisticated foundation
        secondary: "#4ADE80", // green-400 - organic vitality
        accent: "#22C55E", // green-500 - interactive moments
        
        // Background Colors
        background: "#0A0A0A", // gray-950 - subtle depth
        surface: "#1A1A1A", // gray-900 - card elevation
        
        // Text Colors
        "text-primary": "#FFFFFF", // white - clear hierarchy
        "text-secondary": "#A3A3A3", // gray-400 - supporting information
        
        // Status Colors
        success: "#10B981", // emerald-500 - purchase confirmation
        warning: "#F59E0B", // amber-500 - stock alerts
        error: "#EF4444", // red-500 - form validation
        
        // Additional Shades for Flexibility
        green: {
          400: "#4ADE80", // secondary color
          500: "#22C55E", // accent color
          600: "#16A34A", // green-600 - darker accent
        },
        gray: {
          400: "#A3A3A3", // text-secondary
          900: "#1A1A1A", // surface
          950: "#0A0A0A", // background
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'premium': '0 4px 14px rgba(34, 197, 94, 0.1)',
        'dark': '0 2px 8px rgba(0, 0, 0, 0.3)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 8px 25px rgba(34, 197, 94, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [],
}
