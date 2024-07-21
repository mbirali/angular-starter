module.exports = {
  important: true,
  content: ["./src/**/*.{html,scss,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
