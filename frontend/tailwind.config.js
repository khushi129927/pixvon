/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
  	extend: {
      colors: {
        cream: {
          DEFAULT: '#F2EDE4',
          dark: '#EDE7DC',
          card: '#EAE4D8',
        },
        dark: {
          DEFAULT: '#1A1A18',
        },
        orange: {
          warm: '#C4854A',
        },
        sage: {
          DEFAULT: '#7A9E7E',
        },
        muted: {
          DEFAULT: '#8A8478',
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};