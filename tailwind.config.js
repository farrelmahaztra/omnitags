const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Inter", ...defaultTheme.fontFamily.sans],
        subtitle: ['"Roboto Medium"', ...defaultTheme.fontFamily.sans],
        body: ['"Roboto Regular"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
