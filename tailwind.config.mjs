/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        '7xl': '0px 7px 25px 0px rgba(100, 100, 111, 0.25)'
      },
      spacing: {
        '626': '39.125rem',
        '788': '49.25rem',
        '262': '16.375rem',
        '518': '32.375rem',
        '150': '9.375rem'
      },
      fontSize: {
        '22': '1.375rem'
      },
      colors: {
        'purple': '#656EC2',
        'gray': '#767676',
        'dark': '#282626'
      },
      screens: {
        'desktopL': '1920px',
        'desktopM': '1440px',
        'desktopS': '1024px',
        'tablet': '768px',
        'phoneL': '425px',
        'phoneM': '375px',
        'phoneS': '320px',

      }
    },
  },
  plugins: [],
};
