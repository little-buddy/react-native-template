// react-native-app
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'import',
      {
        libraryName: 'lodash',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src/'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
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
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
