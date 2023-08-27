# 现有 react-native 项目转 web 配置教程<br>[![Netlify Status](https://api.netlify.com/api/v1/badges/bc65eeb5-b61d-475c-a386-d08ad5701559/deploy-status)](https://app.netlify.com/sites/rn-go/deploys)

@See [doc](https://retool.com/blog/how-to-make-your-react-native-apps-work-on-the-web/)

[index.html 模版](https://codesandbox.io/s/react-native-q4qymyp2l6?from-embed=&file=/public/index.html)

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

### babel 插件

```
npm i babel-plugin-react-native-web
```

该插件对 react-native-web 下的目录指引有引导优化的作用

## react-native 转 web 遇到问题所需的额外配置项

[解决](https://stackoverflow.com/questions/44114436/the-create-react-app-imports-restriction-outside-of-src-directory)

which falls outside of the project src/ directory.
Relative imports outside of src/ are not supported.

```
customize-cra 添加 removeModuleScopePlugin()
```

[解决](https://github.com/nrwl/nx/issues/14407#issuecomment-1439327945)

Duplicate **self prop found. You are most likely using the deprecated transform-react-jsx-self Babel plugin. Both **source and \_\_self are automatically set when using the automatic runtime. Please remove transform-react-jsx-source and transform-react-jsx-self from your Babel config

```
presets 添加 "useTransformReactJSXExperimental": true 配置项

注意 react-native 和 web 对于 jsx 的一些配置应该是有区别的，所以仅对 web 端的配置添加该选项
```

解决

Error: Can't resolve 'react-native/Libraries/NewAppScreen'

```
把与 'react-native/Libraries/NewAppScreen' 相关依赖从项目中删除就可以

因为 react-native-web 没有支持这个文件的维护
```

解决

Attempted import error: 'DevSettings' is not exported from 'react-native' (imported as 'DevSettings').

```
react-native-devsettings 一类原生端独有的配置需要放在 native 的入口文件去引用
```

解决

[eslint] Plugin "react" was conflicted between ".eslintrc.js » plugin:react/jsx-runtime" and "BaseConfig » /Users/buddy/Documents/Coding/rngo/node_modules/eslint-config-react-app/base.js".

```
React17 已经通过 babel 的形式去除了对于
import React from 'react' 强制性引用
plugin/jsx-runtime 是用来消除 react 必须引入的 eslint 警告的
这应该是与 web 端 eslint-config-react-app 产生了冲突

应该是版本冲突，删除 yarn.lock，重新生成一份 yarn.lock 就解决了
```

[解决](https://github.com/facebook/create-react-app/issues/11825#issuecomment-1000454644)

Compiling JS failed: 122980:12:invalid expression (possible JSX: pass -parse-jsx to parse) Buffer size 7162689 starts with: 766172205f5f42554e444c455f535441

```
报下面的错，就是给 native 段也添加了 "useTransformReactJSXExperimental": true 配置项，
删除即可
```

解决

only default export is available soon

```
webpack5 开始不支持以 key 的形式从 json 中导出变量
```

## 注意事项

```
web 编译的时候，除 src 下文件之外的更新都会跳过错误显示编译成功
所以 web 项目能否运行还是依赖 src 下文件的状态，
需要通过 src 下文件的变动来确定当前是否是一个正确的状态
```

## 部署 netlify 失败

```
Build script returned non-zero exit code: 2

根据你的lock文件去设置打包命令
如果是yarn.lock 必须使用yarn执行，否则会出现上面错误
```
