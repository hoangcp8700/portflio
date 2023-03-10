const plugin = require('tailwindcss/plugin');
const { fontFamily } = require('tailwindcss/defaultTheme');
// const colors = require('tailwindcss/colors');

const screens = {
  xxs: '320px',
  xs: '576px',
  sm: '768px',
  md: '991px',
  lg: '1200px',
  xl: '1440px',
};

const spacing = {
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
};

const colors = {
  transparent: 'transparent',
  current: 'currentColor',
  black: '#000',
  white: '#fff',
  light: '#F6F6F9',
  gray: {
    100: '#f7fafc',
    200: '#edf2f7',
    300: '#e2e8f0',
    400: '#cbd5e0',
    500: '#a0aec0',
    600: '#718096',
    700: '#3d516c',
    800: '#2d3748',
    900: '#1a202c',
    box: '#888888',
  },
  input: {
    field: '#0E282D',
    option: '#505050',
    box: '#A0B1B3',
  },
  plan: {
    red: '#FF7470',
    blue: '#70B2FF',
    green: '#99DB98',
    black: '#1a202c',
  },
  header: {
    bg: '#ffffff',
    bgHover: '#6CB3C4',
    fg: '#3d516c',
    ctabg: '#FF7470',
    ctafg: '#ffffff',
    tabActiveBg: '#F1F5F5',
    tabActiveFg: '#3d516c',
    tabHoverBg: '#F1F5F5',
    tabHoverFg: '#638b8f',
    tabBorder: '#39A1B2',
    tabBg: '#fff',
    tabFg: '#638b8f',
    dark: '#808e90',
    darkHover: '#e1e4e5',
  },
};

module.exports = {
  content: ['./src/components/**/*.{ts,tsx}', './src/containers/**/*.{ts,tsx}', './dist/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      spacing,
      fontFamily: {
        satoshi: ['Satoshi', ...fontFamily.sans],
        austin: ['Austin', ...fontFamily.sans],
      },
      screens,
      colors,
      backgroundImage: {
        skeleton:
          'linear-gradient(90deg,rgba(190, 190, 190, 0.2) 25%, rgba(129, 129, 129, 0.24) 37%,  rgba(190, 190, 190, 0.2) 63%)',
      },
      transitionProperty: {
        inherit: 'inherit',
      },
      transitionDuration: {
        2000: '2000ms',
        4000: '4000ms',
      },
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
        14: '14',
        15: '15',
        16: '16',
      },

      zIndex: {
        1: '1',
        2: '2',
        header: '100',
        footer: '101',
        modal: '102',
        modal2: '103',
        modal3: '104',
        overlay: '110',
        max: '999',
      },
      animation: {
        'spinner-loading': 'spinnerLoading 1.25s infinite backwards',
        skeleton: 'skeleton 1.4s ease infinite',
        tick: 'tick 300ms ease-in-out',
        scale: 'tick 300ms ease-in-out 300ms alternate both',
        slideToRight: 'slideToRight 500ms ease-in-out',
      },
      keyframes: {
        tick: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1.3)' },
          '100%': { transform: 'scale(1)' },
        },
        slideToRight: {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(50%)' },
          '75%': { transform: 'translateX(-10%)' },
          '100%': { transform: 'translateX(0)' },
        },
        spinnerLoading: {
          '0%': { transform: 'rotate(0deg) translateX(-120%)' },
          '60%, 100%': { transform: 'rotate(360deg) translateX(-120%)' },
        },
        skeleton: {
          '0%': { transform: 'translate(-37.5%)' },
          '100%': { transform: 'translate(37.5%)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    plugin(({ matchUtilities, addUtilities, addBase, theme, addVariant, e }) => {
      // registering new base styles
      addBase({
        'h1,h2': {
          fontWeight: 700,
          letterSpacing: theme('letterSpacing.tight'),
        },
        h3: {
          fontWeight: 600,
        },
        a: {
          textDecoration: 'none!important',
        },
      });

      // registering new static utility styles
      addUtilities({
        '.adjust-flex-center': {
          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center',
        },
      });
      addUtilities({
        '.reset-input': {
          outline: 'none',
          appearance: 'none',
        },
      });
      addUtilities({
        '.reset-button': {
          border: 'none',
          outline: 'none',
          appearance: 'none',
        },
      });
      addUtilities({
        '.svg-white': {
          filter: 'brightness(0) invert(1)',
        },
      });

      // registering custom variants
      addVariant('hocus', ['&:hover', '&:focus']);
      addVariant('before-after', ['&:before', '&:after']);
      addVariant('not-last', '&:not(:last-child)');
      addVariant('not-first', '&:not(:first-child)');
      addVariant('not-disabled', '&:not(:disabled)');
    }),
  ],
};
