import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      // padding: "2rem",
      // screens: {
      //   "2xl": "1400px",
      // },
    },
    extend: {
      backdropBlur: {
        custom: '1px',
      },
      screens: {
        xs: '425px',
        md: '850px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        sharp: '24px 0px 18px 0px rgba(0,0,0,0.5)',
        custom: '0 3px 9px 3px rgba(0, 0, 0, 0.1)',
        customSides:
          '18px 0px 14px 0px rgba(0,0,0,0.5), -18px 0px 14px 0px rgba(0,0,0,0.5)',
        customPricing:
          '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.34)',
      },
      colors: {
        brand: {
          50: '#ECF7FE',
          100: '#D9EFFC',
          200: '#B3E0F9',
          300: '#8DD0F7',
          400: '#67C0F4',
          500: '#41B0F1',
          600: '#1197E4',
          700: '#0D71AB',
          800: '#084B72',
          900: '#042639',
        },
        success: {
          50: '#ECF9F0',
          100: '#D5F1DE',
          200: '#AFE4C1',
          300: '#85D6A0',
          400: '#5EC982',
          500: '#3CB464',
          600: '#309151',
          700: '#246B3C',
          800: '#184928',
          900: '#0B2213',
        },
        error: {
          50: '#FFEBEC',
          100: '#FFD6D8',
          200: '#FFADB1',
          300: '#FF8086',
          400: '#FF575F',
          500: '#FF2D37',
          600: '#F0000C',
          700: '#B30009',
          800: '#7A0006',
          900: '#3D0003',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'slow-bounce': 'bounce 2.5s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
