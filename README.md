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
npm i babel-plugin-react-native-web
该插件对 react-native-web 下的目录指引有引导优化的作用
```

## rn 转 web 过程中遇到的问题

### which falls outside of the project src/ directory. Relative imports outside of src/ are not supported

```
customize-cra 添加 removeModuleScopePlugin()
```

[参考社区](https://stackoverflow.com/questions/44114436/the-create-react-app-imports-restriction-outside-of-src-directory)

### Duplicate **self prop found. You are most likely using the deprecated transform-react-jsx-self Babel plugin. Both **source and \_\_self are automatically set when using the automatic runtime. Please remove transform-react-jsx-source and transform-react-jsx-self from your Babel config

```
由于和 web 共用一个babel.config.js，所以添加
"useTransformReactJSXExperimental": true
选项就可以了
{
  "presets": [["module:metro-react-native-babel-preset", { "useTransformReactJSXExperimental": true }]]
}
```

[参考社区](https://github.com/nrwl/nx/issues/14407#issuecomment-1439327945)

### Error: Can't resolve 'react-native/Libraries/NewAppScreen'

```
这个问题是因为react-native-web 没有支持这个文件的维护
不过也能理解：react-native 包下的样例文件随时都会变，减少不必要的维护成本
让 react-native-web 可以更lib一点

把与 'react-native/Libraries/NewAppScreen' 相关依赖从项目中删除就可以
所以启动 react-native-web 的样例项目不要以官方demo为准
```

### Attempted import error: 'DevSettings' is not exported from 'react-native' (imported as 'DevSettings').

```
react-native-devsettings 模块依赖 DevSettings
而 react-native-web 是放弃这个模块维护的

所以要在 native 的入口文件去引用这个模块
```

### [eslint] Plugin "react" was conflicted between ".eslintrc.js » plugin:react/jsx-runtime" and "BaseConfig » /Users/buddy/Documents/Coding/rngo/node_modules/eslint-config-react-app/base.js".

```
React17 已经通过babel的形式去除了对于
import React from 'react' 强制性引用
plugin/jsx-runtime 是用来消除 react 必须引入的eslint警告的
这应该是与 web端 eslint-config-react-app 产生了冲突

应该是版本冲突，删除yarn.lock，重新生成一份 yarn.lock 就解决了

```

Compiling JS failed: 122980:12:invalid expression (possible JSX: pass -parse-jsx to parse) Buffer size 7162689 starts with: 766172205f5f42554e444c455f535441

```
web 端调通，跑原生端又遇到的问题，应该是jsx转译出现的问题
删除 "useTransformReactJSXExperimental": true 即可
```

[参考社区](https://github.com/facebook/create-react-app/issues/11825#issuecomment-1000454644)

### only default export is available soon

```
webpack5 开始不支持以 key 的形式从 json 中导出变量
```

### 注意事项

```
web编译的时候，除 src 下文件之外的更新都会跳过错误显示编译成功
所以web项目能否运行还是依赖 src 下文件的状态，需要通过 src 下文件的变动来确定当前是否是一个正确的状态
```
