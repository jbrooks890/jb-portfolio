/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        key: ["social-gothic-rough", "sans-serif"],
        body: ["Rajdhani"],
        tech: ["tech-brand-icons"],
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
        faint: "hsla(0, 0%, 0%, 0.1)",
        phantom: "hsla(0, 0%, 0%, 0.05)",
        shaded: "hsla(247, 31%, 38%, 0.75)",
      },
      spacing: {
        header: "3rem",
      },
      backgroundImage: {
        "gradient-circle": "radial-gradient(circle, var(--tw-gradient-stops))",
        "gradient-oval": "radial-gradient(ellipse, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
