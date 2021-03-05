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
        primary: {
          light: '#bcbec2',
          normal: '#202634',
          dark: '#131721',
          button: '#475473',
        },
        accent: {
          light: '#b8babc',
          normal: '#121821',
          dark: '#0a0e14',
        },
        warning: {
          light: '#f0c2b3',
          normal: '#cc3300',
          dark: '#b92000',
        },
        textColor: {
          light: '#000000',
          dark: '#ffffff',
        },
        backgroundColor: {
          light: '#fafafa',
          dark: '#202634',
        },
        vulcan: {
          DEFAULT: '#121821',
          50: '#6B86AE',
          100: '#5A78A5',
          200: '#486084',
          300: '#364863',
          400: '#243042',
          500: '#121821',
          600: '#000000',
        },
        charade: {
          DEFAULT: '#202634',
          50: '#f4f4f5',
          100: '#e9e9eb',
          200: '#c7c9cc',
          300: '#a6a8ae',
          400: '#636771',
          500: '#202634',
          600: '#1d222f',
          700: '#181d27',
          800: '#13171f',
          900: '#101319',
        },
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
