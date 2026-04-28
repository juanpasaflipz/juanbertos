/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Alfa Slab One"', '"Bowlby One SC"', "serif"],
        sans: ['"Inter"', "system-ui", "-apple-system", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        cream: {
          DEFAULT: "#F5EFE3",
          light: "#FAF6EC",
          dark: "#EBE3D2",
        },
        lime: {
          DEFAULT: "#C4D74C",
          deep: "#A8BC3C",
          dark: "#8FA02C",
        },
        brick: {
          DEFAULT: "#9C2E1F",
          deep: "#7C2418",
          light: "#B5503F",
        },
        forest: {
          DEFAULT: "#2D5A2D",
          deep: "#1F4220",
          light: "#447344",
        },
        ink: {
          DEFAULT: "#1A1614",
          soft: "#3C342F",
          mute: "#6B5F56",
        },
      },
      keyframes: {
        "subtle-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "subtle-float": "subtle-float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
