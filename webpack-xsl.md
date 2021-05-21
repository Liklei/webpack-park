
### webpack入门到放弃


####  入门指南：

#### 一、webpack概念

* webpack、electron等前端工具的出现都是得益于NodeJs的出现
* Webpack作为前端工程化的重要一环，其作用是前端资源模块化管理和打包工具


* 主要解决的问题
- 代码拆分（Code Splitting）: 可以将应用程序分解成可管理的代码块，可以按需加载，这样用户便可快速与应用交互，而不必等到整个应用程序下载和解析完成才能使用，以此构建复杂的单页应用程序（SPA）；

- 静态资源（Static Assets）: 可以将所有的静态资源，如 js、css、图片、字体等，导入到应用程序中，然后由 webpack 使用 hash 重命名需要的资源文件，而无需为文件 URL 增添 hash 而使用 hack 脚本，并且一个资源还能依赖其他资源。

#### 二、webpack配置（从零到一搭建项目）

* 1、安装webpack
    通过 yarn add webpack webpack-cli --dev （或npm）
    * 1.1 为什么需要安装webpack-cli ？
        - webpack4 与 webpack3相比webpack4将cli单独分离了出来。
        - 在package.json中script配置dev: webpack --mode development，当执行npm run dev相当于执行webpack --mode development，
        webpack.cmd执行时会判断当前目录下是否存在node执行程序，如果存在就使用当前node进程执行node_modules/webpack/bin/webpack.js，如果当前目录下不存在node进程，则使用全局（也就是本地）node执行node_modules/webpack/bin/webpack.js文件
        - ![示例1](./1.png)
        - node_modules/webpack/bin/webpack.js首先会判断是否安装了webpack-cli模块，如果没有安装webpack-cli模块就会引导用户去安装，如果已经安装了webpack-cli模块，就会去执行node_modules\webpack-cli\bin\cli.js
         - ![示例22](./2.png)
    * 1.2 webpack-cli的作用 ？     

* 2、安装重要的依赖包
- babel  
* Babel 是一个工具链，主要用于将采用 ECMAScript 2015+ 语法编写的代码转换为向后兼容的 JavaScript 语法
* babel原理：ES6代码输入 ==》 babylon进行解析 ==》 得到AST==》 plugin用babel-traverse对AST树进行遍历转译 ==》 得到新的AST树==》 用babel-generator通过AST树生成ES5代码

https://juejin.cn/post/6962861837800964133

- url-loader， css-loader， file-loader等loader

- uglifyjs-webpack-plugin 等插件


* 3、如何配置webpack.config.js

#### 三、webpack、rollup使用建议

正是因为 webpack 拥有如此强大的功能，所以 webpack 在进行资源打包的时候，就会产生很多冗余的代码（如果你有查看过 webpack 的 bundle 文件，便会发现）。比如，把 export default str => str; 这段代码用 webpack 打包就会得到下面的结果：

这在以下的一些情境中就不太高效，需要寻求更好的解决方案：
- 需要 js 高效运行。因为 webpack 对子模块定义和运行时的依赖处理（__webpack_require__），不仅导致文件体积增大，还会大幅拉低性能；
- 项目（特别是类库）只有 js，而没有其他的静态资源文件，使用 webpack 就有点大才小用了，因为 webpack bundle 文件的体积略大，运行略慢，可读性略低。


webpack文档： https://v4.webpack.docschina.org/concepts/
入门指南： https://zhaoda.net/webpack-handbook/module-system.html



#### 进阶指南

####  一、webpack实现原理

* 分析依赖

* ES6转ES5

* 替换exports和require


#### 二、Tree Shaking性能优化实践


#### 三、loader原理解析（手写）


#### 四、Plugin原理解析（手写）


#### 五、Chunk 分包规则



###
- [系列](https://segmentfault.com/a/1190000040008841)
____________________________



####  WebPack入门

#### 入门指南：
#### 一、webpack概念
#### 二、webpack配置（从零到一搭建项目）
#### 三、webpack、rollup使用建议

#### 进阶指南
#### 一、webpack实现原理
#### 二、Tree Shaking性能优化实践
#### 三、loader原理解析（手写）
#### 四、Plugin原理解析（手写）
#### 五、Chunk 分包规则












