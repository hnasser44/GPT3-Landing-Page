/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-bg": "#040C18",
        "color-footer": "#031B34",
        "color-blog": "#042c54",
        "color-text": "#81AFDD",
        "color-subtext": "#FF8A71",
        "color-button-bg": "#FF4820",
        "input-bg": "#052D56",
        "input-text": "#3D6184",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1200px",
    },
  },
  plugins: [],
};
