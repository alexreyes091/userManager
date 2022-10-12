module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgWhite': '#F9F9F9',
        'bgBlack': '#3c3c3c',
        'bgGray': '#F5F5F5',
        'bgPrimary': '#2193F3',
        'bgSecondary': '#0D2137',
        'bgAlternative': '#FF8E2B',
      }
    },
  },
  plugins: [],
}