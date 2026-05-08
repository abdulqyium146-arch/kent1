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
        brand: {
          50:  '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          500: '#475569',
          600: '#334155',
          700: '#1e293b',
          800: '#141e2e',
          900: '#0f172a',
        },
        accent: {
          300: '#fde68a',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        slate: {
          750: '#2a3544',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card:  '0 2px 16px rgba(0,0,0,0.07)',
        cta:   '0 8px 32px rgba(245,158,11,0.30)',
        hover: '0 12px 40px rgba(15,23,42,0.15)',
        glow:  '0 0 0 3px rgba(245,158,11,0.25)',
      },
    },
  },
  plugins: [],
}

export default config
