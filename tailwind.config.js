/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(135deg, #0066FF 0%, #0052CC 100%)",
        "custom-gradient-2": "linear-gradient(135deg, #0066FF 0%, #00B4D8 100%)",
        "brand-gradient": "linear-gradient(135deg, #0066FF 0%, #2575FC 50%, #0052CC 100%)",
        "card-gradient": "linear-gradient(135deg, #0066FF 0%, #00C6FF 100%)",
        "snip-hero": "radial-gradient(ellipse at top, rgba(0, 102, 255, 0.14) 0%, rgba(248, 250, 252, 0) 70%)",
        "mesh-glow": "radial-gradient(circle at 50% -20%, rgba(0, 102, 255, 0.22), transparent 70%)",
      },
      colors: {
        navbarColor: "#ffffff",
        btnColor: "#0066FF",
        linkColor: "#0052CC",
        brand: {
          50: "#f0f6ff",
          100: "#e0ecff",
          200: "#c2dcff",
          300: "#94c2ff",
          400: "#579dff",
          500: "#0066FF", // Exact user logo electric blue
          600: "#0055d6",
          700: "#0043ad",
          800: "#003285",
          900: "#00225c",
          950: "#001338",
        },
      },
      boxShadow: {
        custom: "0 10px 25px -5px rgba(0, 102, 255, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.02)",
        glass: "0 8px 30px rgba(0, 102, 255, 0.06)",
        glow: "0 0 30px -5px rgba(0, 102, 255, 0.4)",
        card: "0 4px 20px -2px rgba(15, 23, 42, 0.06)",
        right: "10px 0px 10px -5px rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Outfit", "sans-serif"],
        roboto: ["Inter", "Roboto", "sans-serif"],
        montserrat: ["Outfit", "Montserrat", "sans-serif"],
      },
    },
  },

  variants: {
    extend: {
      backgroundImage: ["responsive"],
    },
  },

  plugins: [],
};