module.exports = {
  important: true,
  prefix: 'sw-',
  theme: {
    extend: {
      colors: {
        black: '#000000',
        brown: '#5f3d2c',
        white: '#FFFFFF',
        background: '#040D21',
        modal: '#172D42',
        lightModal: '#1F3F5C',
        paragraph: '#B8CAE6',
      },
      spacing: {
        sm: '1rem',
        xsm: '1.5rem',
        md: '2rem',
        lg: '3rem',
        xl: '8rem',
        xxl: '14rem',
        48: '48%',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        desktop: '36px',
        tablet: '32px',
        mobile: '28px',
      },
      fontSize: {
        bigscreen: '18px',
        desktop: '16px',
        mobile: '14px',
        p: '1rem',
        h1: '4rem',
        h2: '3.11111111111rem',
        h3: '3rem',
        h4: '2.66666666667rem',
        h5: '1.77777777778rem',
        h6: '1.333333rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },

      borderRadius: {
        sm: '8px',
      },
      backgroundImage: (theme) => ({
        cta: `linear-gradient(254.68deg, #EBE9F9 2.29%, #F9F9FA 97.31%, #E9A9FF 97.31%, #FBFAFE 97.31%)`,
        blue: `linear-gradient(234.85deg, #A6DBF7 9.06%, #51BCF9 102.41%)`,
        card: `linear-gradient(152.2deg, #9CECFB 0%, #65C7F7 50.55%, #0052D4 99.52%)`,
      }),
      screens: {
        '2xl': '1680px',
        '3xl': '1920px',
      },
    },
  },
};
