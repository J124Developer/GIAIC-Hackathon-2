import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#3563E9',
        'dark-blue': '#1A37A7',
        'light-blue': '#D6E4FD',
        'custom-white': '#C3D4E9',
      },
    },
  },
  plugins: [],
}
export default config