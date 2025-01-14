module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        base: '1.05rem',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1024px',
        },
      },
      colors: {
        'accent': '#10B981',
        'background': '#111111',
        'foreground': '#FFFFFF',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#FFFFFF',
            a: {
              color: '#10B981',
              '&:hover': {
                color: '#059669',
              },
            },
            code: {
              color: '#10B981',
              background: 'rgba(16, 185, 129, 0.1)',
              borderRadius: '4px',
              padding: '2px 4px',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
