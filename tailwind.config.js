/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gameboy-green": "#8BC34A",
        "gameboy-dark": "#2D5016",
        "gameboy-bg": "#0F0F0F",
        "gameboy-red": "#ff0000",
        "gameboy-red-dark": "#CC0000",
      },
      fontFamily: {
        retro: ['"Press Start 2P"', "cursive"],
        mono: ['"Courier Prime"', "monospace"],
      },
      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
