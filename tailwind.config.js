module.exports = {
  important: true,
  // Active dark mode on class basis
  darkMode: 'class',
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  purge: {
    content: [
      './public/**/*.html',
      './src/**/*.{js,jsx,ts,tsx,vue}',
      './pages/**/*.{js,jsx,ts,tsx,vue}',
    ],
    // These options are passed through directly to PurgeCSS
  },
  theme: {
    extend: {
      colors: {
        button: 'var(--color-button-text)',
        transparent: 'transparent',
        primary: {
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
          disabled: 'var(--color-accent-disabled)',
        },
        brand2: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
          disabled: 'var(--color-accent-disabled)',
        },
        brand: {
          DEFAULT: '#0C0040',
          light: '#cfbdd3',
          dark: '#240a2d',
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
