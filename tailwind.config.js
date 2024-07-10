/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        key: ["social-gothic-rough", "sans-serif"],
        body: ["Rajdhani"],
        tech: ["tech-brand-icons"],
        webdings: ["webdings"],
      },
      colors: {
        red: "#d10000",
        midnite: "#18161d",
        nite: "#2b2145",
        evening: "hsl(245, 40%, 25%)",
        shade: "#4b428a",
        sundown: "hsl(245, 30%, 60%)",
        lavender: "hsl(246, 57%, 63%)",
        day: "hsl(246, 60%, 80%)",
        lite: "hsl(245, 100%, 95%)",
        // lite: "white",
        faint: "hsla(0, 0%, 0%, 0.1)",
        phantom: "hsla(0, 0%, 0%, 0.05)",
        shaded: "hsla(247, 31%, 38%, 0.75)",
      },
      aspectRatio: {
        video: "16/9",
      },
      spacing: {
        header: "3rem",
      },
      backgroundImage: {
        "gradient-circle": "radial-gradient(circle, var(--tw-gradient-stops))",
        "gradient-oval": "radial-gradient(ellipse, var(--tw-gradient-stops))",
      },
      borderRadius: {
        ellipse: "50%",
      },
      textShadow: {
        DEFAULT: "2px 2px 2px var(--tw-shadow-color)",
      },
      animation: {
        flicker: "flicker 300ms ease",
        jab: "jab 300ms infinite linear alternate",
        bob: "bob 500ms infinite ease-in-out alternate",
      },
      keyframes: {
        bob: {
          from: { ["--tw-translate-y"]: "0" },
          to: { ["--tw-translate-y"]: "-0.25em" },
        },

        flicker: {
          "0%": {
            opacity: 0,
          },
          "25%": {
            opacity: 0.5,
          },
          "50%": {
            opacity: 0.25,
          },
          "75%": {
            opacity: 0.5,
          },
          "100%": {
            opacity: 1,
          },
        },
        jab: {
          to: { transform: "translateX(.1em)" },
        },
      },
    },
  },
  plugins: [],
};
