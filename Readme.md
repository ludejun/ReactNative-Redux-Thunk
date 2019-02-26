# ReactNative-Redux-Thunk
ludejun@live.cn

集成ReactNative、Redux、Thunk、redux-devtools、Navigation、Eslint、Prettier的工程化项目。适合复杂项目开展。

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
