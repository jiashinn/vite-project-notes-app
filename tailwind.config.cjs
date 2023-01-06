/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        typewriter:
          "typewriter 2s steps(9) infinite, blink 0.5s steps(9) infinite",
      },
      keyframes: {
        typewriter: {
          "40%": { left: "100%" },
          "60%": { left: "100%" },
          "100%": { left: "0%" },
        },
        blink: {
          "0%": {
            "border-left": " solid 5px  #EDDE5D",
          },
          "100%": {
            "border-left": "solid 5px  transparent",
          },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
