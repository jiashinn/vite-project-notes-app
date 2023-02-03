module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      //typing animation//
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

      //note-list-grid//
      gridTemplateColumns: {
        fluid: "repeat(auto-fit,300px)",
      },
      colors: {
        transparent: "transparent",
      },
    },
  },
};
