import {nextui } from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      defaultTheme: "light", // default theme from the themes object
      themes: {
        light: {
          colors: {
            shadow: 'rgba(0, 0, 0, 0.16)',
          },
          focus:'#BEF264'
        },
        dark: {
          colors: {
            shadow: 'rgba(0, 0, 0, 0.56)',
          },
          focus:'red'
        }
      }
    })
  ],
}

