/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        "rounded-circle": "url('./assets/shared/desktop/bg-pattern-circle.svg')"
      },
      colors: {
          "primary-dark-pink": "rgb(186, 66, 112)",
          "primary-link-water-white": "rgb(251, 252, 254)",
          "secondary-san-juan-blue": "rgb(54, 83, 107)",
          "secondary-mirage-blue": "rgb(27, 38, 47)",
          "secondary-charm-pink": "rgb(218, 109, 151)",
          "secondary-light-san-juan-blue": "rgb(108, 130, 148)"
      },
      fontFamily: {
        "DM-serif": ["DM Serif Display", "sans-serif"],
        "public-sans": ["Public Sans", "sans-serif"]
      },
      fontSize: {
        "h1-large": "72px",
        "h1-small": "56px",
        "h2": "48px",
        "h3-big": "32px",
        "h3-small": "18px",
        "h4": "24px",
        "body": "15px"
      },
      lineHeight: {
        "h1-large": "72px",
        "h1-small": "56px",
        "h2": "56px",
        "h3-big": "40px",
        "h3-small": "25px",
        "h4": "32px",
        "body": "28px"
      },
      letterSpacing: {
        "h1-large": "-0.55px",
        "h1-small": "-0.43px",
        "h2": "-0.37px",
        "h3-big": "-0.25px",
        "h3-small": "-0.14px",
        "h4": "-0.18px",
      }
    },
  },
  plugins: [],
};
