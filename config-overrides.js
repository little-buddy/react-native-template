const webpack = require('webpack');
const {
  override,
  addBabelPresets,
  addBabelPlugins,
  useBabelRc,
  removeModuleScopePlugin,
  addWebpackPlugin,
  addWebpackAlias,
  addWebpackModuleRule,
} = require('customize-cra');
const path = require('path');

const babelrc = require('./babel.config.js');

// @deprecated
const addWebpackIgnoreWarnings = () => config => {
  config.ignoreWarnings = [/only default export is available soon/];
  return config;
};

const moduleResolveConf = babelrc.plugins[0][1];
const moduleResolverAlias = {};
Object.keys(moduleResolveConf.alias).forEach(key => {
  moduleResolverAlias[key] = path.resolve(
    __dirname,
    moduleResolveConf.alias[key][0]
  );
});

// ****** Warning ******
// module-resolver 跟 alias 有冲突
// web 端应该优先使用 alias 和 create-react-app 一起使用
// 而 native 端则优先使用 module-resolver 和 metro 配合使用
// *********************
module.exports = override(
  addWebpackIgnoreWarnings(),
  addWebpackAlias(moduleResolverAlias),
  addWebpackPlugin(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      ),
      __DEV__: process.env.NODE_ENV !== 'production' || true,
    })
  ),
  addWebpackModuleRule({
    test: /\.ttf$/,
    loader: 'url-loader', // or directly file-loader
    include: [
      path.resolve(__dirname, 'node_modules/react-native-vector-icons'),
      path.resolve(__dirname, 'src'),
    ],
  }),

  addBabelPresets([
    'module:metro-react-native-babel-preset',
    // @see https://github.com/nrwl/nx/issues/14407#issuecomment-1439327945
    { useTransformReactJSXExperimental: true },
  ]),
  addBabelPlugins(
    ...babelrc.plugins.slice(1, babelrc.plugins.length - 1),
    'react-native-web',
    '@babel/plugin-proposal-export-namespace-from',
    babelrc.plugins[babelrc.plugins.length - 1]
  ),

  removeModuleScopePlugin()
);
