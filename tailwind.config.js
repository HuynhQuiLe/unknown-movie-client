/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-login": "#191c24",
        primary: "#c0fb51",
        "primary-text": "rgba(0, 0, 0, 0.8)",
        "bg-color-header": "rgba(251, 251, 253, 0.8)",
      },
      backgroundImage: {
        bg_linear_deatils_poster_top:
          "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        bg_linear_deatils_poster_bottom:
          "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
      },
    },
  },
  plugins: [],
};
