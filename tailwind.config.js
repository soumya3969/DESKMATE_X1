/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#050505',
        carbon: '#0a0b12',
        ink: '#0d0f1a',
        glass: 'rgba(255,255,255,0.04)',
        neon: {
          blue: '#5b8cff',
          indigo: '#6b6bff',
          violet: '#9d6bff',
          cyan: '#4fd6ff',
        },
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        body: ['"Albert Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(91,140,255,0.45)',
        'glow-lg': '0 0 80px -10px rgba(123,107,255,0.5)',
        'glow-violet': '0 0 60px -12px rgba(157,107,255,0.55)',
        'inner-glow': 'inset 0 1px 0 0 rgba(255,255,255,0.08)',
        card: '0 8px 40px -12px rgba(0,0,0,0.8)',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at center, rgba(91,140,255,0.18), transparent 60%)',
        'grid-fade': 'linear-gradient(to bottom, transparent, rgba(5,5,5,0.9))',
        'aurora': 'linear-gradient(120deg, #5b8cff 0%, #9d6bff 50%, #4fd6ff 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        gridMove: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '64px 64px' },
        },
        spinSlow: {
          to: { transform: 'rotate(360deg)' },
        },
        ping2: {
          '75%, 100%': { transform: 'scale(2.2)', opacity: '0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
        gridMove: 'gridMove 8s linear infinite',
        spinSlow: 'spinSlow 24s linear infinite',
        ping2: 'ping2 2.4s cubic-bezier(0,0,0.2,1) infinite',
      },
    },
  },
  plugins: [],
}
