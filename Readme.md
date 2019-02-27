# ReactNative-Redux-Thunk
ludejun@live.cn

集成ReactNative、Redux、Thunk、CodePush、redux-devtools、Navigation、Eslint、Prettier的工程化项目。适合复杂项目开展。

### 打开redux-devtools的方法：
1. 打开RN远程调试（模拟器上打开Menu面板，选择远程调试）
2. chrome安装有redux-devtools
3. 在远程页（一般为：http://localhost:8081/debugger-ui/），右键-Redux Devtools-Open Remote Devtools
即可获得和react开发一样的redux-devtools界面

### 重新改项目名字方法

1. 更改项目目录下app.json配置
2. 运行react-native-rename

    // install

       npm install react-native-rename -g
       
       or 
       
       yarn global add react-native-rename
    
    // in project directory
    
       react-native-rename <New_Project_ Name>


### code-push
参考：https://github.com/Microsoft/react-native-code-push
官方中文版：https://github.com/Microsoft/code-push/blob/master/cli/README-cn.md
注：如要使用code-push需根据上面文档登录codepush账号。不改动也可以跑起来，不影响开发。

ReactNativeReduxThunk
┌────────────┬──────────────────────────────────────────────────────────────────┐
│ Name       │ Deployment Key                                                   │
├────────────┼──────────────────────────────────────────────────────────────────┤
│ Production │ KUWxBVCPgQMTINEb9ZCZQERghzTBea84ca97-2860-4663-b17c-f29998a1c45d │
├────────────┼──────────────────────────────────────────────────────────────────┤
│ Staging    │ iAi7KDiudvIGysnM8WWjmMXJXuspea84ca97-2860-4663-b17c-f29998a1c45d │
└────────────┴──────────────────────────────────────────────────────────────────┘
ReactNativeReduxThunkAndroid
┌────────────┬──────────────────────────────────────────────────────────────────┐
│ Name       │ Deployment Key                                                   │
├────────────┼──────────────────────────────────────────────────────────────────┤
│ Production │ ltk1qpwwtsktwD64fUgVyDvCIJjvea84ca97-2860-4663-b17c-f29998a1c45d │
├────────────┼──────────────────────────────────────────────────────────────────┤
│ Staging    │ uhSDFY5g7NErTVC0i6Z1O5VMhJYZea84ca97-2860-4663-b17c-f29998a1c45d │
└────────────┴──────────────────────────────────────────────────────────────────┘

code-push release-react ReactNativeReduxThunk ios --plistFile "ios/ReactNativeReduxThunk/Info.plist" --development


#### Issues
1. undefined is not an object (evaluating '_reactNativeCodePush.default.CheckFrequency')
    - react-native link
    - react-native run-ios


