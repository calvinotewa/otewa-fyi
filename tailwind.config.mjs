import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Royal purple palette. 500 is royal purple (#7851A9), the default
        // background of the site (dark appearance).
        royal: {
          50: '#f4effa',
          100: '#e7ddf3',
          200: '#cbb8e3',
          300: '#af92d3',
          400: '#9770c4',
          500: '#7851a9',
          600: '#664791',
          700: '#523b74',
          800: '#3e2c57',
          900: '#2b1e3d',
        },
      },
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': 'currentColor',
            '--tw-prose-headings': 'currentColor',
            '--tw-prose-links': 'currentColor',
            '--tw-prose-bold': 'currentColor',
            '--tw-prose-quotes': 'currentColor',
            '--tw-prose-code': 'currentColor',
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};