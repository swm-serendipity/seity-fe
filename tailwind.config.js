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
      padding: {
        4.5: "18px",
        7.5: "30px",
      },
      margin: {
        18.5: "75px",
      },
      fontFamily: {
        pretendard: [...defaultTheme.fontFamily.sans],
        lexend: ["Lexend", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        h1: ["32px", { lineHeight: "38px" }],
        h2: ["26px", { lineHeight: "32px" }],
        h3: ["22px", { lineHeight: "32px" }],
        h4: ["20px", { lineHeight: "24px" }],
        h5: ["16px", { lineHeight: "20px" }],
        "body-large": ["16px", { lineHeight: "20px" }],
        "body-medium": ["14px", { lineHeight: "20px" }],
        "body-small": ["12px", { lineHeight: "16px" }],
        "6xl": "4.5rem",
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
      screens: {
        xs: "320px",
        "2md": "900px",
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
          "chat-ai-code-title-color": "#354B61",
          "de-identification-divider-color": "#EBEBEB",
          "de-identification-red-point-color": "#FF5E5E",
          "de-identification-green-point-color": "#05DCA8",
        },
        share: {
          "chat-bg": "#EEEEEE",
        },
        signup: {
          "signup-border": "#E0E0E0",
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
        ".custom-history-scrollbar::-webkit-scrollbar": {
          width: "8px",
          background: "transparent",
        },
        ".custom-history-scrollbar": {
          "scrollbar-width": "8px",
        },
        ".custom-history-scrollbar::-webkit-scrollbar-thumb": {
          "background-color": "rgba(255, 255, 255, 0.3)",
          "border-radius": "40px",
        },

        ".custom-scrollbar::-webkit-scrollbar": {
          width: "8px",
          background: "transparent",
        },
        ".custom-scrollbar": {
          "box-sizing": "content-box",
        },
        ".custom-scrollbar::-webkit-scrollbar-thumb": {
          "background-color": "rgba(217, 217, 217, 1)",
          "border-radius": "40px",
        },

        ".underline-red": {
          "text-decoration": "underline",
          "text-decoration-color": "#FF5E5E",
          "text-underline-offset": "2px",
        },
        ".underline-green": {
          "text-decoration": "underline",
          "text-decoration-color": "#6DF1D1",
          "text-underline-offset": "2px",
        },
        ".highlight-red": {
          "background-color": "rgba(255, 94, 94, 0.2)",
          "text-decoration": "underline",
          "text-decoration-color": "#FF5E5E",
          "text-underline-offset": "2px",
        },
        ".highlight-green": {
          "background-color": "rgba(109, 241, 209, 0.2)",
          "text-decoration": "underline",
          "text-decoration-color": "#6DF1D1",
          "text-underline-offset": "2px",
        },

        ".de-identification-card": {
          "box-shadow": "0px 2px 8px rgba(0, 0, 0, 0.15)",
          "border-radius": "10px",
        },
        ".de-identification-card-focus-red": {
          "box-shadow": "0px 2px 8px rgba(0, 0, 0, 0.15)",
          "border-radius": "10px",
          border: "1px solid #FF8F8F",
        },
        ".de-identification-card-focus-green": {
          "box-shadow": "0px 2px 8px rgba(0, 0, 0, 0.15)",
          "border-radius": "10px",
          border: "1px solid #6DF1D1",
        },
        ".de-identification-change-button-red": {
          "background-color": "#FFD9D9",
          color: "#FF3434",
          "border-radius": "6px",
        },
        ".de-identification-change-button-green": {
          "background-color": "#D0FFF4",
          color: "#12A480",
          "border-radius": "6px",
        },

        ".login-box": {
          boxShadow: "0px 8px 20px rgba(207, 207, 207, 0.25)",
          backdropFilter: "blur(9px)",
          background:
            "linear-gradient(147.52deg, rgba(255, 255, 255, 0) 0.47%, #FFFFFF 0.48%, rgba(255, 255, 255, 0.6) 90.85%)",
          opacity: 0.98,
        },

        ".signup-box": {
          background:
            "linear-gradient(130.01deg, rgba(255, 255, 255, 0) 0.37%, #FFFFFF 0.37%, rgba(255, 255, 255, 0.6) 76%)",
          "box-shadow": "0px 8px 20px rgba(207, 207, 207, 0.25)",
          "backdrop-filter": "blur(9px)",
          opacity: 0.98,
        },

        ".share-chat-continue-button-bg": {
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)",
        },

        ".chat-bottom-button": {
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
