module.exports = {
  content: [ "./11ty/**/*.{html,js}", ],
  corePlugins: {
    preflight: false,
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
