/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customLight: {
          primary: '#7269FF',
          secondary: '#251F4B',
          accent: '#FFFFFF',
          background: '#FFFFFF',
          text: '#333333',
        },
        customDark: {
          primary: '#7269FF',
          secondary: '#B2A8EE',
          accent: '#FFFFFF',
          background: '#0F0B21',
          text: '#FFFFFF',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};