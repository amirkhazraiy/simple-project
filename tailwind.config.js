


/**
 * @type {import("tailwindcss/defaultConfig")}
 */
module.exports = {
  content: [
     "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontSize: {
      xl: ['20px', { lineHeight: '1.5' }],
      lg: ['18px', { lineHeight: '1.5' }],
      md: ['16px', { lineHeight: '1.5' }],
      sm: ['14px', { lineHeight: '1.5' }],
      xs: ['12px', { lineHeight: '1.5' }],
      'display-xs': ['24px', { lineHeight: '1.25' }],
      'display-sm': ['30px', { lineHeight: '1.25' }],
      'display-md': ['36px', { lineHeight: '1.25' }],
      'display-lg': ['48px', { lineHeight: '1.25' }],
      'display-xl': ['60px', { lineHeight: '1.25' }],
      'display-2xl': ['72px', { lineHeight: '1.25' }],
    },
    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff', // $mainBackground in Angular project
      black: '#000000',
      tertiary: '#42f8a7', //TODO: It's temporary and will be deleted.
      primary: {
        25: '#F2D6E3',
        50: '#E5ABC7',
        100: '#D982A8',
        200: '#CC598C',
        300: '#BF3070',
        400: '#9E0F4F',
        500: '#B30753',
        600: '#8A174A',
        700: '#751F45',
        800: '#612640',
        900: '#4D2B3B',
      },
      secondary: {
        200: '#42f8a7',
        // TODO: There was only variant of 200 in secondary color, we need to complete the array like other colors.
      },
      purple: {
        100: '#a873ff', // purple01 in angular project, used in premium listing.
        200: '#5c29ab', // purple02 in angular project, used in premium listing.
      },
      blue: {
        // TODO: This is so messy there's no order in it! wtf?!
        100: '#003963',
        200: '#b3c8fb',
        300: '#e5ecfb',
        400: '#bbcefb',
        500: '#7495b8',
        700: '#4a63ac',
        800: '#173a62',
        900: '#282a30',
        1000: '#183352',
        1100: '#0072c380',
      },
      kilidDarkBlue: {
        100: '#173a63', // TODO: an old single color that used in some places, odd!
      },
      kilidRentTheme: {
        100: '#517cfb', // TODO: an old single color that used in some places, odd!
      },
      kilidBuyTheme: {
        100: '#09987c', // TODO: an old single color that used in some places, odd!
      },
      grayTextColor: {
        100: '#696969', // TODO: an old single color that used in forms, odd!
      },
      primaryGray: {
        100: '#373435', // TODO: an old single color that used for color of texts, fills and backgrounds usually, odd!
      },
      lightPrimaryGray: {
        100: '#f9f7f8', // TODO: an old single color that used for color of texts usually, odd!
      },
      grey: {
        25: '#FCFCFD',
        50: '#F9FAFB',
        100: '#F2F4F7',
        200: '#EAECF0',
        300: '#D0D5DD',
        400: '#98A2B3',
        500: '#667085',
        600: '#475467',
        700: '#344054',
        800: '#1D2939',
        900: '#101828',
        // 1000: '#a6a6a6', // TODO: This was used in app-promotion component in Angular project ,but it's inappropriate.
      },
      violet: {
        25: '#FBFAFF',
        50: '#F5F3FF',
        100: '#ECE9FE',
        200: '#DDD6FE',
        300: '#C3B5FD',
        400: '#A48AFB',
        500: '#875BF7',
        600: '#7839EE',
        700: '#6927DA',
        800: '#5720B7',
        900: '#491C96',
      },
      error: {
        25: '#FFFBFA',
        50: '#FEF3F2',
        100: '#FEE4E2',
        200: '#FECDCA',
        300: '#FDA29B',
        400: '#F97066',
        500: '#F04438',
        600: '#D92D20',
        700: '#B42318',
        800: '#912018',
        900: '#7A271A',
      },
      warning: {
        25: '#FFFCF5',
        50: '#FFFAEB',
        100: '#FEF0C7',
        200: '#FEDF89',
        300: '#FEC84B',
        400: '#FDB022',
        500: '#F79009',
        600: '#DC6803',
        700: '#B54708',
        800: '#93370D',
        900: '#7A2E0E',
      },
      success: {
        25: '#F6FEF9',
        50: '#ECFDF3',
        100: '#D1FADF',
        200: '#A6F4C5',
        300: '#6CE9A6',
        400: '#32D583',
        500: '#12B76A',
        600: '#039855',
        700: '#027A48',
        800: '#05603A',
        900: '#054F31',
      },
    },
    spacing: () => {
      const baseSpacingValue = 0.25;
      const spacingFactorList = [
        0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64,
      ];
      const spacingMap = {};
      spacingFactorList.forEach(
          (factor) => (spacingMap[factor] = `${baseSpacingValue * factor}rem`)
      );
      return spacingMap;
    },
    gap: ({ theme }) => theme('spacing'),
    boxShadow: {
      xs: '0 1px 2px rgba(16, 24, 40, 0.05)',
      sm: '0 1px 3px rgba(16, 24, 40, 0.1), 0 1px 2px rgba(16, 24, 40, 0.06)',
      md: '0 4px 8px -2px rgba(16, 24, 40, 0.1), 0 2px 4px -2px rgba(16, 24, 40, 0.06)',
      lg: '0 12px 16px -4px rgba(16, 24, 40, 0.08), 0 4px 6px -2px rgba(16, 24, 40, 0.03)',
      xl: '0 20px 24px -4px rgba(16, 24, 40, 0.08), 0 8px 8px -4px rgba(16, 24, 40, 0.03)',
      '2xl': '0 24px 48px -12px rgba(16, 24, 40, 0.18)',
      '3xl': '0 32px 64px -12px rgba(16, 24, 40, 0.14)',
      none: 'none',
    },
    borderRadius: {
      none: '0px',
      xs: '4px',
      sm: '8px',
      md: '12px',
      lg: '16px',
      circle: '50%',
      full: '9999px',
    },
    fontFamily: {
      sans: ['YekanBakh', 'Tahoma'],
    },
    extend: {
      transitionProperty: {
        height: 'height, opacity, scale',
        spacing: 'margin, padding',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '2rem',
        lg: '4rem',
      },
    },
  },
  plugins: [

  ],
};
