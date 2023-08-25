# 现有 react-native 项目转 web 配置教程

### 目录配置

```
mkdir src
mkdir public

touch public/index.html
mv App.js src
mv app.json src
cp index.js src
mv index.js index.native.js
```

### babel 配置

see [Issue](https://github.com/nrwl/nx/issues/14407#issuecomment-1439327945)

```
 presets: [
    [
      'module:metro-react-native-babel-preset',
      { useTransformReactJSXExperimental: true },
    ],
  ],
```

### 错误 1

```
which falls outside of the project src/ directory. Relative imports outside of src/ are not supported
```

[解决方案](https://stackoverflow.com/questions/44114436/the-create-react-app-imports-restriction-outside-of-src-directory)

customize-cra 添加 `removeModuleScopePlugin()`

### 错误 2

```
Duplicate __self prop found. You are most likely using the deprecated transform-react-jsx-self Babel plugin. Both __source and __self are automatically set when using the automatic runtime. Please remove transform-react-jsx-source and transform-react-jsx-self from your Babel config
```

[解决方案](https://github.com/nrwl/nx/issues/14407#issuecomment-1439327945)

### 错误 3

```
对于文件内容依赖 react-native/Libraries/NewAppScreen
[Error] Can't resolve 'react-native/Libraries/NewAppScreen'
```
