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

```
npm i babel-plugin-react-native-web
该插件对 react-native-web 下的目录指引有引导优化的作用
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

### 错误 4

```
Error: Can't resolve 'react-native/Libraries/NewAppScreen'

这个问题是因为react-native-web 没有支持这个文件的维护
不过也能理解：react-native 包下的样例文件随时都会变，减少不必要的维护成本
让 react-native-web 可以更lib一点

把与 'react-native/Libraries/NewAppScreen' 相关依赖从项目中删除就可以
所以启动 react-native-web 的样例项目不要以官方demo为准
```

### 错误 5

```
Attempted import error: 'DevSettings' is not exported from 'react-native' (imported as 'DevSettings').

react-native-devsettings 模块依赖 DevSettings
而 react-native-web 是放弃这个模块维护的
```

### 错误 6

```
[eslint] Plugin "react" was conflicted between ".eslintrc.js » plugin:react/jsx-runtime" and "BaseConfig » /Users/buddy/Documents/Coding/rngo/node_modules/eslint-config-react-app/base.js".

React17 已经通过babel的形式去除了对于
import React from 'react' 强制性引用
plugin/jsx-runtime 是用来消除 react 必须引入的eslint警告的
这应该是与 web端 eslint-config-react-app 产生了冲突

应该是版本冲突，删除yarn.lock，重新生成一份 yarn.lock 就解决了

```

### 错误 7

```
Application "App" has not been registered
```

### 注意事项

```
当区分 App.ts 是 web 还是 native 的时候，除 src 下文件之外的更新都会跳过错误
所以项目能否运行还是依赖 src 下文件的状态，需要通过 src 下文件的变动来确定当前
是否是一个非报错的状态
```
