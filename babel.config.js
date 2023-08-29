// react-native-app
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src/'],
        extensions: [
          '.js',
          '.ios.js',
          '.android.js',
          '.native.js',
          '.jsx',
          '.ios.jsx',
          '.android.jsx',
          '.native.jsx',
          '.ts',
          '.ios.ts',
          '.android.ts',
          '.native.ts',
          '.tsx',
          '.ios.tsx',
          '.android.tsx',
          '.native.tsx',
          '.json',
        ],
        alias: {
          tests: ['./tests/'],
          '@/apis': ['./src/apis'],
          '@/assets': ['./src/assets'],
          '@/components': ['./src/components'],
          '@/constants': ['./src/constants'],
          '@/hooks': ['./src/hooks'],
          '@/locales': ['./src/locales'],
          '@/pages': ['./src/pages'],
          '@/routers': ['./src/routers'],
          '@/store': ['./src/store'],
          '@/utils': ['./src/utils'],
          '@/style': ['./src/style'],
        },
      },
    ],
    [
      'import',
      {
        libraryName: 'lodash',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
