import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/pages/**/*.vue',
    './app/app.vue'
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#020817',
          soft: '#050B18',
          elevated: '#0B1120'
        },
        surface: {
          DEFAULT: '#0F172A',
          light: '#111C32',
          elevated: '#16213A'
        },
        brand: {
          DEFAULT: '#2563EB',
          light: '#3B82F6',
          cyan: '#06B6D4',
          purple: '#7C3AED'
        },
        muted: {
          DEFAULT: '#CBD5E1',
          dark: '#94A3B8'
        },
        success: '#22C55E'
      },
      borderColor: {
        subtle: 'rgba(148, 163, 184, 0.16)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #2563EB, #3B82F6, #7C3AED)'
      },
      boxShadow: {
        glow: '0 20px 70px rgba(37, 99, 235, 0.22)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite'
      }
    }
  }
}
