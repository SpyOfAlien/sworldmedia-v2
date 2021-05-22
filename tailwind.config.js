module.exports = {
  purge: [
    'pages/**/*.{js,ts,jsx,tsx}',
    'components/**/*.{js,ts,jsx,tsx}',
    'components/common/**/*.{js,ts,jsx,tsx}',
  ],
  important: true,
  prefix: 'sw-',
  theme: {
    extend: {
      colors: {
        background: '#0E1C29',
        modal: '#172D42',
        paragraph: '#B8CAE6'
      },
      spacing: {
        sm: '1rem',
        xsm: '1.5rem',
        md: '2rem',
        lg: '3rem',
        xl: '4rem'
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        'desktop': '36px',
        'tablet': '32px',
        'mobile': '28px',
      },
      fontSize: {
        'desktop': '18px',
        'tablet': '16px',
        'mobile': '14px',
        'p': '1rem',
        'label': '2rem',
        'h1': '4.5rem',
        'h2': '3.5rem',
        'h3': '3rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },

      borderRadius: {
        'sm': '8px'
      },
      backgroundImage: theme => ({
        'cta': `linear-gradient(254.68deg, #EBE9F9 2.29%, #F9F9FA 97.31%, #E9A9FF 97.31%, #FBFAFE 97.31%)`,
        'blue': `linear-gradient(234.85deg, #A6DBF7 9.06%, #51BCF9 102.41%)`
       })
    },
  },
};
