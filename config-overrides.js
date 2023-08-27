const {
  override,
  addBabelPresets,
  addBabelPlugins,
  useBabelRc,
  removeModuleScopePlugin,
} = require('customize-cra');
const path = require('path');

const babelrc = require('./babel.config.js');

// @deprecated
const addWebpackIgnoreWarnings = () => config => {
  config.ignoreWarnings = [/only default export is available soon/];
  return config;
};

module.exports = override(
  addWebpackIgnoreWarnings(),
  addBabelPlugins(
    ...babelrc.plugins.slice(0, babelrc.plugins.length - 1),
    'react-native-web',
    '@babel/plugin-proposal-export-namespace-from',
    babelrc.plugins[babelrc.plugins.length - 1]
  ),
  addBabelPresets([
    'module:metro-react-native-babel-preset',
    // @see https://github.com/nrwl/nx/issues/14407#issuecomment-1439327945
    { useTransformReactJSXExperimental: true },
  ]),
  removeModuleScopePlugin()
);
