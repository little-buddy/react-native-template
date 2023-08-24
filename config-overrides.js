const { override, addBabelPresets, addBabelPlugins } = require('customize-cra');

const babelrc = require('./babel.config');

module.exports = override(
  addBabelPlugins(...babelrc.plugins),
  addBabelPresets(...babelrc.presets)
);
