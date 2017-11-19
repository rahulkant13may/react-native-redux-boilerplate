# react-native-redux-boilerplate

A basic boilerplate for Mobile App development in React Native with Redux.

## Requirements
- [JDK 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
- [Node](https://nodejs.org)
- [Android Studio](https://developer.android.com/studio/index.html) for Android development
- [Xcode](https://developer.apple.com/xcode/) for iOS development

## How to use ?
```shell
$ git clone https://github.com/rahulkant13may/react-native-redux-boilerplate.git myReactApp
$ cd myReactApp
$ npm i                         
```

### iOS:
```shell
$ react-native run-ios
```

### Android:

#### Android Studio:

1. Create a local.properties file in myReactApp/android 
```shell
$ touch local.properties
```
- In Android Studio goto Tools > Android > SDK Manager
  - Copy the Android SDK location and paste it in local.properties file with this line
  - sdk.dir = Paste your Android SDK Location

2. In Android Studio goto Tools > Android > AVD Manager
  - Create Virtual Device
  
3. cd myReactApp
```shell
$ react-native run-android
```  
4. In Android Studio open myReactApp/android/app/build.gradle 

5. Run your App by clicking the green colour play button.
