/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: [...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        h1: ["32px", { lineHeight: "38px" }],
        h2: ["26px", { lineHeight: "32px" }],
        h3: ["20px", { lineHeight: "24px" }],
        h4: ["16px", { lineHeight: "20px" }],
        "body-large": ["16px", { lineHeight: "20px" }],
        "body-medium": ["14px", { lineHeight: "20px" }],
        "body-small": ["12px", { lineHeight: "16px" }],
      },
      fontWeight: {
        h1: "bold",
        h2: "bold",
        h3: "bold",
        h4: "bold",
        "body-large": "regular",
        "body-medium": "regular",
        "body-small": "regular",
      },
      colors: {
        whitebg: {
          default: "#232527",
          serve: "#444444",
          info: "#777777",
          disable: "#A0A0A0",
        },
        blackbg: {
          default: "#FFFFFF",
          serve: "#D6D6D6",
          info: "#9A9A9A",
          disable: "#828282",
          point: "#FFC95D",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
