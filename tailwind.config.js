/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff3c41",
        accent: "#47cf73",
        background: "#ffffff",
        text: "#060606",
      },
      fontFamily: {
        // Add font families to match our typography requirements
        display: ['"GT Super"', '"Tiempos Headline"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '1.5rem',
          lg: '2rem',
        },
      },
      boxShadow: {
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-primary',
    'text-white',
    'bg-accent',
    'text-text',
    'border-primary',
    'text-primary',
    'btn',
    'btn-primary',
    'btn-accent',
    'btn-outline',
    'container',
  ]
}; 