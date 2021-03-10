module.exports = {
  important: true,
  // Active dark mode on class basis
  darkMode: 'class',
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  purge: {
    content: ['./pages/**/*.tsx', './components/**/*.tsx'],
    // These options are passed through directly to PurgeCSS
  },
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#410056',
          light: '#cfbdd3',
          dark: '#240a2d',
        },
        'cta-light': '#ced2bd',
        cta: '#405600',
        'cta-dark': '#242d09',

        'info-light': '#d8ebf6',
        info: '#4eb1db',
        'info-dark': '#2e5567',

        'warning-light': '#fbeace',
        warning: '#dbaf38',
        'warning-dark': '#685422',

        'success-light': '#d8f0d3',
        success: '#55bf51',
        'success-dark': '#2f5b2b',

        'danger-light': '#fecece',
        danger: '#d9264a',
        'danger-dark': '#691e27',
      },
      backgroundImage: (theme) => ({
        check: "url('/icons/check.svg')",
        landscape: "url('/images/landscape/2.jpg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      inset: ['checked'],
      zIndex: ['hover', 'active'],
    },
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
  },
};
