/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        typing: "typing 5s steps(4, end), blink .75s step-end infinite",
      },
      keyframes: {
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 100%": {
            "border-color": "transparent",
          },
          "50%": {
            "border-color": "orange",
          },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
