
npm install --save-dev webpack webpack-cli webpack-dev-server


# html 生成插件，它会将 生成的  js 和 css 文件插入到html 中
# https://webpack.docschina.org/plugins/html-webpack-plugin/#root
npm install --save-dev html-webpack-plugin 


# vue 模板编译器   和 webpack 配合的 loader
npm install -D vue-loader vue-template-compiler vue-style-loader

npm install -D css-loader style-loader
npm install -D file-loader url-loader
npm install -D @babel/core @babel/cli babel-loader @babel/preset-env


npm install @babel/polyfill
npm install vue

================================
参考文档

Webpack quick start
https://webpack.docschina.org/guides/getting-started

vue loader
https://vue-loader.vuejs.org/

html-webpack-plugin
https://webpack.docschina.org/plugins/html-webpack-plugin/

学习webpack创建vue项目1
https://segmentfault.com/a/1190000020049567

babel-loader
https://webpack.docschina.org/loaders/babel-loader 

babel-preset-env 和 .babelrc
https://zhuanlan.zhihu.com/p/27777995 

babel在webpack 中使用和配置
https://blog.csdn.net/qq_15601471/article/details/99690530 

Babel 7使用总结 
https://segmentfault.com/a/1190000019718925 

using the `useBuiltIns` option without declaring a core-js version
https://www.cnblogs.com/lguow/p/12880384.html 

学习源码
https://github.com/zhiwei122126/learn-webpack-vue 
