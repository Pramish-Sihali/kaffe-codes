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
        'great-vibes': ['Great Vibes', 'cursive'],
      },
      colors: {
        // Existing custom colors
        'custom-green': '#007500',
        'custom-brown': '#87512F',
        'custom-white': '#FFFFFF',
        
        // New carousel colors
        'coffee': {
          DEFAULT: '#2A1810',
          'gold': '#D4AF37',
        }
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
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay-1': 'float 6s ease-in-out 1s infinite',
        'float-delay-2': 'float 6s ease-in-out 2s infinite',
        'float-delay-3': 'float 6s ease-in-out 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(var(--rotate, 0deg))' },
          '50%': { transform: 'translateY(-20px) rotate(var(--rotate, 0deg))' },
        }
      },
    },
  },
  plugins: [],
}