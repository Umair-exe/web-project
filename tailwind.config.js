module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '500': '500ms',
        '2000': '2000ms',
      },
    
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
