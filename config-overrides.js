const {
  override,
  addBabelPresets,
  addBabelPlugins,
  useBabelRc,
  removeModuleScopePlugin,
} = require('customize-cra');
const path = require('path');

const babelrc = require('./babel.config.js');

const addWebpackIgnoreWarnings = () => config => {
  config.ignoreWarnings = [/only default export is available soon/];

  return config;
};

module.exports = override(
  addWebpackIgnoreWarnings(),
  addBabelPlugins(...babelrc.plugins, 'react-native-web'),
  addBabelPresets([
    'module:metro-react-native-babel-preset',
    // @see https://github.com/nrwl/nx/issues/14407#issuecomment-1439327945
    { useTransformReactJSXExperimental: true },
  ]),
  useBabelRc(),
  removeModuleScopePlugin()
);
