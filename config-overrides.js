const {
  override,
  addBabelPresets,
  addBabelPlugins,
  useEslintRc,
  useBabelRc,
  removeModuleScopePlugin,
} = require('customize-cra');
const path = require('path');

const babelrc = require('./babel.config.js');

module.exports = override(
  addBabelPlugins(...babelrc.plugins),
  addBabelPresets(...babelrc.presets),
  useBabelRc(),
  removeModuleScopePlugin()
  // useEslintRc(path.resolve(__dirname, '.eslintrc.js'))
);
