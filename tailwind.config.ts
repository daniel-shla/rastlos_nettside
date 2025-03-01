import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': '0.75rem', // Example: Extra small
        'sm': '0.875rem', // Example: Small
        'base': '1rem',   // Example: Base
        'lg': '1.125rem', // Example: Large
        'xl': '1.25rem',  // Example: Extra large
        '2xl': '1.5rem',  // Example: 2x extra large
        '3xl': '1.875rem', // Example: 3x extra large
        '4xl': '2.25rem', // Example: 4x extra large
        '5xl': '3rem',    // Example: 5x extra large
      },
      colors: {
        'header-text': '#fece94',
        'shortcut-text': '#fef6da',
        'buldreoransj': '#ff914d',
        'footerfarge': '#fef6da',
        'darkgrey': '#292929',
        'rastrød': '#ff5a55',
        'minfarge': '',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: { // Add this section
        'anton': ['Anton', 'sans-serif'], // Define the 'anton' font family
      },
    },
  },
  plugins: [],
} satisfies Config;