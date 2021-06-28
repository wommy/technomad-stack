module.exports = {
  // mode: "jit",
  purge: [
    "./11ty/**/*.html",
    "./11ty/**/*.js",
  ],
  darkMode: false,
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
