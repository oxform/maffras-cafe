/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Bebas Neue gives that hand-painted signage / vinyl-banner feel
        display: ['"Bebas Neue"', '"Anton"', 'Impact', 'sans-serif'],
        sans:    ['"Inter"', 'system-ui', 'sans-serif'],
        // Kept for backwards-compat; renders as a small bold uppercase tag
        script:  ['"Inter"', 'system-ui', 'sans-serif']
      },
      // Token names kept the same so existing components keep working.
      // The values are remapped to the new black / red / off-white system.
      colors: {
        cream: {
          50:  '#F6F4EE', // page background (warm off-white)
          100: '#EDEAE0', // soft surface
          200: '#D9D5C7',
          300: '#B8B2A0'
        },
        coffee: {
          50:  '#3F3F46',
          200: '#27272A',
          400: '#18181B',
          600: '#0A0A0A',
          800: '#000000', // primary dark surface
          900: '#000000'  // strongest text
        },
        accent: {
          olive:  '#9CA3AF',
          burnt:  '#DC2626', // primary RED accent
          cherry: '#991B1B'
        }
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' }
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        marquee: 'marquee 38s linear infinite'
      }
    }
  },
  plugins: []
}
