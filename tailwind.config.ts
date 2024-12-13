/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-nunito)'],
      },
      colors: {
        
        // Adding your custom colors
        'custom-green': '#007500',
        'custom-brown': '#87512F',
        'custom-white': '#FFFFFF',
      },
      maxWidth: {
        '7xl': '80rem',
      },
      fontSize: {
        'xs': '1rem',    // 14px
        'sm': '1rem',        // 16px
        'base': '1.125rem',  // 18px
        'lg': '1.25rem',     // 20px
        'xl': '1.5rem',      // 24px
        '2xl': '1.75rem',    // 28px
        '3xl': '2rem',       // 32px
        '4xl': '2.5rem',     // 40px
        '5xl': '3rem',       // 48px
        '6xl': '4.75rem',    // 60px
      },
    },
  },
  plugins: [],
}