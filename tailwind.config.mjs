/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#2d2d2d",
        "medium-gray": "#4a4a4a",
        "light-gray": "#e5e5e5",
        "light-pink": "#f5c2d1",
        "light-blue": "#ABE8F7",
        "pink-accent": "#e8a4b8",
        "text-light": "#f5f5f5",
        "text-dark": "#1a1a1a",
      },
    },
  },
  plugins: [],
};
