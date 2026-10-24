export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 0 1px rgba(94, 234, 212, 0.2), 0 0 40px rgba(14, 165, 233, 0.15)',
      },
      colors: {
        night: '#020817',
        panel: '#0f172a',
        accent: '#7c3aed',
        mint: '#5eead4',
        cyan: '#67e8f9',
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.18) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
};
