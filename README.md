# <img src="./android/app/src/main/res/mipmap-hdpi/ic_launcher.png" width="24" style="border-radius:4px" /> react-native-template

[该项目支持在 web 端运行](https://github.com/little-buddy/react-native-template/tree/web)

### 基础功能库

```
- react-native-gesture-handler
- react-navigation
   - react-native-screens
   - react-native-safe-area-context
   - @react-navigation/bottom-tabs
   - @react-navigaiton/native
   - @react-navigation/native-stack
- react-native-reanimated
- lottie-react-native
```

```
- redux
   - @reduxjs/toolkit
   - react-redux
   - redux-persist
```

```
- axios
```

### react-native@0.70.0 open debugger 失效问题

see [rn-doc](https://reactnative.dev/docs/hermes#debugging-js-on-hermes-using-google-chromes-devtools)

```
由于 0.70.0 以后默认使用 hermes，所以需要用 hermes 的规则去 debuger
老的版本是使用 JavsScriptCore，所以能适用 Open Debugger
然而根据官方的操作貌似在 0.71.0+ 以上 ChormeDebugger 依旧失效
所以社区提供了 react-native-devsettings 的包对 原调试进行了扩展
接着调试就遇到了下面的问题
```

### Calling synchronous methods on native modules is not supported in Chrome.

```
It seems that the api with the sync mark has this error.
ios: RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD
android: isBlockingSynchronousMethod=true
最终解决的方案就是使用 Flipper -> 它会完美兼容以上问题
```

```
突然发现一个有趣的api
https://random.imagecdn.app/1920/1080
免费随机生成一张图片，测试真的太有用了
```
