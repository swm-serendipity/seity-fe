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
      borderRadius: {
        "4xl": "40px",
      },
      gap: {
        18: "72px",
      },
      margin: {
        18.5: "75px",
      },
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
        "sidebar-button": {
          default: "#232527",
          hover: "#393939",
          click: "#171717",
          alert: "#FF5E5E",
          hr: "#3D3D3D",
          divider: "#808284",
        },
        prompt: {
          "ai-select-bg": "#F5F5F5",
          "ai-select-button-bg": "#E6E6E6",
          "chat-ai-bg-color": "#F5F5F5",
          "chat-user-bg-color": "#363636",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".custom-scrollbar::-webkit-scrollbar": {
          width: "8px",
          background: "transparent",
        },
        ".custom-scrollbar": {
          "scrollbar-width": "8px",
        },
        ".custom-scrollbar::-webkit-scrollbar-thumb": {
          "background-color": "rgba(255, 255, 255, 0.3)",
          "border-radius": "40px",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
