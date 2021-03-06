module.exports = {
  important: true,
  prefix: 'sw-',
  theme: {
    extend: {
      colors: {
        black: '#000000',
        brown: '#5f3d2c',
        white: '#FFFFFF',
        background: '#0E2193',
        modal: '#172D42',
        lightModal: '#1F3F5C',
        paragraph: '#B8CAE6',
        servicesBg: '#EAE9F214',
        footerBg: '#00093f',
      },
      spacing: {
        xs: '0.75rem',
        sm: '1rem',
        xsm: '1.5rem',
        md: '2rem',
        lg: '3rem',
        xl: '8rem',
        xxl: '14rem',
        48: '48%',
        31: '31%',
        header: '60px',
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
        link: '1rem',
        xs: '0.75rem',
        p: '1rem',
        h1: '4rem',
        h2: '3.11111111111rem',
        h3: '3rem',
        h4: '2.66666666667rem',
        h5: '1.77777777778rem',
        h6: '1.333333rem',
      },
      opacity: {
        15: '0.15',
        35: '0.35',
        65: '0.65',
        85: '0.85',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },

      borderRadius: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '30px',
      },
      backgroundImage: (theme) => ({
        cta: `linear-gradient(254.68deg, #EBE9F9 2.29%, #F9F9FA 97.31%, #E9A9FF 97.31%, #FBFAFE 97.31%)`,
        blue: `linear-gradient(234.85deg, #A6DBF7 9.06%, #51BCF9 102.41%)`,
        card: `linear-gradient(152.2deg, #9CECFB 0%, #65C7F7 50.55%, #0052D4 99.52%)`,
        hero: `linear-gradient(180deg, rgba(4, 13, 33, 0) 47.4%, #040D21 100%)`,
      }),
      screens: {
        '2xl': '1680px',
        '3xl': '1920px',
      },
      zIndex: {
        '-100': '-100',
      },
    },
  },
};
