/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'charter': ['Charter-Regular', 'serif'],
        'charter-bold': ['Charter-Bold', 'serif'],
        'charter-italic': ['Charter-Italic', 'serif'],
        'charter-bold-italic': ['Charter-Bold-Italic', 'serif'],
        'arial': ['Arial-Regular', 'sans-serif'],
        'arial-bold': ['Arial-Bold', 'sans-serif'],
        'arial-black': ['Arial-Black', 'sans-serif'],
        'chamelton': ['Chamelton10', 'sans-serif'],
        'chamelton-bd': ['Chamelton10-Bd', 'sans-serif'],
        'chamelton-blk': ['Chamelton10-Blk', 'sans-serif'],
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
} 