/** @type {import('tailwindcss').Config} */
export default {
  content: ["*.{html,js}"],
  theme: {
    screens: {
      sm: "475px",
    },
    extend: {
      maxWidth: {
        "8xl": "2560px",
      },
    },
  },
  plugins: [],
};
