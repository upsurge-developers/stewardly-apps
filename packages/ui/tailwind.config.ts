import { type Config } from 'tailwindcss'
import sharedConfig from "@stewardly/tailwind-config/tailwind.config.ts"

const config: Pick<Config, 'presets' | 'content' | 'plugins'> = {
  content: ['./src/**/*.{ts,tsx}'],
  presets: [sharedConfig],
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
