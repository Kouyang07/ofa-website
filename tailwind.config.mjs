/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit', // Make sure JIT mode is enabled
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        delius: ['var(--font-delius)', 'cursive']
      },
    },
  },
  plugins: [],
};
