---
title: "Webpack4"
date: 2019-11-12T23:11:28+08:00
draft: false
categories: ["webpack"]
series: ["webpack"]
---

# webpack4重大变更



# [mainfest](https://webpack.docschina.org/concepts/manifest/)

单纯的mainfest翻译过来意思就是清单。那么

在webpack中它是什么清单呢？它是模块的清单，用于描述不同模块之间的联系方式。

> 在你的应用程序中，形如 `index.html` 文件、一些 bundle 和各种资源，都必须以某种方式加载和链接到应用程序，一旦被加载到浏览器中。在经过打包、压缩、为延迟加载而拆分为细小的 chunk 这些 webpack [`优化`](https://webpack.docschina.org/configuration/optimization/) 之后，你精心安排的 `/src` 目录的文件结构都已经不再存在。所以 webpack 如何管理所有所需模块之间的交互呢？这就是 manifest 数据用途的由来……
>
> 当完成打包并发送到浏览器时，runtime 会通过 manifest 来解析和加载模块。无论你选择哪种 [模块语法](https://webpack.docschina.org/api/module-methods)，那些 `import` 或 `require` 语句现在都已经转换为 `__webpack_require__` 方法，此方法指向模块标识符(module identifier)。通过使用 manifest 中的数据，runtime 将能够检索这些标识符，找出每个标识符背后对应的模块。

当你想要通过[缓存](https://webpack.docschina.org/guides/caching/)提升性能时，理解mainfest很重要。



# 懒加载

> 懒加载或者按需加载，是一种很好的优化网页或应用的方式。这种方式实际上是先把你的代码在一些逻辑断点处分离开，然后在一些代码块中完成某些操作后，立即引用或即将引用另外一些新的代码块。这样加快了应用的初始加载速度，减轻了它的总体体积，因为某些代码块可能永远不会被加载。



## [文件名 hash](https://segmentfault.com/a/1190000014685887)

hash 是用在文件输出的名字中的，如 `[name].[hash].js`，总的来说，webpack 提供了三种 hash：

1. `[hash]`：此次打包的所有内容的 hash。
2. `[chunkhash]`：每一个 chunk 都根据自身的内容计算而来。
3. `[contenthash]`：由 css 提取插件提供，根据自身内容计算得来。

## loader 优先级

1 同 test 配置内优先级：在同一个 test 下配置多个 loader ，[优先处理的 loader 放在配置数组的后面](https://webpack.js.org/concepts/loaders/#loader-features)，

2 不同 test 内优先级：可使用 [enforce: 'pre'](https://webpack.js.org/configuration/module/#rule-enforce) 强调优先级

## 添加 webpack 打出的 bundles 到 HTML 文件

- 我们使用 webpack 配置入口时只能配置 js 文件作为入口，webpack 打出的 bundles 并不能自动与我们项目的 HTML 文件发生关联。
- 需要我们手动添加``（还可能包括后面提取出来的 css 文件）到 HTML 文件。
- 我们可以使用 [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin) 插件自动完成这个工作。
- 当仅使用 webpack 对 js 进行打包，而没有 HTML文件需求时，不需要这一步。

## 提取 js 中的 css 部分到单独的文件

webpack4 插件 [mini-css-extract-plugin](https://www.npmjs.com/package/mini-css-extract-plugin)

# [spa使用webpack4例子](https://juejin.im/entry/5b63eb8bf265da0f98317441)



# [webpack打包原理](https://juejin.im/post/5c94a2f36fb9a070fc623df4)

# [webpack模块化原理-commonjs](https://segmentfault.com/a/1190000010349749)



# [DllPlugin](https://segmentfault.com/a/1190000016567986)

[**什么是DLL**](https://juejin.im/post/5c665c6151882562986ce988)

DLL(Dynamic Link Library)文件为动态链接库文件,在Windows中，许多应用程序并不是一个完整的可执行文件，它们被分割成一些相对独立的动态链接库，即DLL文件，放置于系统中。当我们执行某一个程序时，相应的DLL文件就会被调用。

### 为什么要使用Dll

简单来讲就是节省构建时间

通常来说，我们的代码都可以至少简单区分成**业务代码**和**第三方库**。如果不做处理，每次构建时都需要把所有的代码重新构建一次，耗费大量的时间。然后大部分情况下，很多第三方库的代码并不会发生变更（除非是版本升级），这时就可以用到dll：**把复用性较高的第三方模块打包到动态链接库中，在不升级这些库的情况下，动态库不需要重新打包，每次构建只重新打包业务代码**。

## [基本用法](https://segmentfault.com/a/1190000016567986)

使用dll时，可以把构建过程分成dll构建过程和主构建过程（实质也就是如此），所以需要两个构建配置文件，例如叫做`webpack.config.js`和`webpack.dll.config.js`。

`DllPlugin`是`webpack`内置的插件，不需要额外安装，直接配置`webpack.dll.config.js`文件

#### 先编写一个配置文件专门用来编译生成动态链接库（使用 DllPlugin）

webpack_dll.config.js

```
module.exports = {=
  entry: {
    // 第三方库
    react: ['react', 'react-dom', 'react-redux']
  },
  output: {
    // 输出的动态链接库的文件名称，[name] 代表当前动态链接库的名称，
    filename: '[name].dll.js',
    path: resolve('dist/dll'),
    // library必须和后面dllplugin中的name一致 后面会说明
    library: '[name]_dll_[hash]'
  },
  plugins: [
  // 接入 DllPlugin
    new webpack.DllPlugin({
      // 动态链接库的全局变量名称，需要和 output.library 中保持一致
      // 该字段的值也就是输出的 manifest.json 文件 中 name 字段的值
      name: '[name]_dll_[hash]',
      // 描述动态链接库的 manifest.json 文件输出时的文件名称
      path: path.join(__dirname, 'dist/dll', '[name].manifest.json')
    }),
  ]
}
```

#### 编写配置文件用来打包项目（使用 DllReferencePlugin）

webpack.config.js

 ```
// 告诉 Webpack 使用了哪些动态链接库        new webpack.DllReferencePlugin({            // 描述 lodash 动态链接库的文件内容            manifest: require('./public/vendor/lodash.manifest.json')        })
 ```

**运行**

**DLL好处**

1 分离代码

业务代码和第三方模块可以被打包到不同的文件里。这样有利于调试和加载

2 提升构建速度

第三方库没有变更时，由于我们只构建业务相关代码，相比全部重新构建自然要快的多。

## add-asset-html-webpack-plugin 的使用

将动态链接库自动的存放到 dist 文件夹，自动在 html 文件中引入动态链接库脚本

```
 plugins: [
        ...,
        // 该插件将把给定的 JS 或 CSS 文件添加到 webpack 配置的文件中，并将其放入资源列表 html webpack插件注入到生成的 html 中。
        new AddAssetHtmlPlugin([
            {
                // 要添加到编译中的文件的绝对路径，以及生成的HTML文件。支持globby字符串
                filepath: require.resolve(path.resolve(__dirname, 'public/vendor/lodash.dll.js')),
                // 文件输出目录
                outputPath: 'vendor',
                // 脚本或链接标记的公共路径
                publicPath: 'vendor'
            }
        ]

```



 [**DLL 使用就三步：**](https://juejin.im/post/5c665c6151882562986ce988)

1 生成 DllPlugin

2 打包 DllReferencePlugin

3 引入 AddAssetHtmlPlugin

# webpack代码分割

### Bundle Split

Bundle Split 的主要任务是将多个引用的包和模块进行分离，避免全部依赖打包到一个文件下

#### 基本用法

Webpack 4 中需要使用到 `optimization.splitChunks` 的配置：

```
const path = require('path')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}
```

> optimization.splitChunks 的意思是将所有来自 `node_modules` 中的依赖全部打包分离出来

### Code Split

代码分离实际上就是只加载用户需要使用到的部分代码，不是必须的就暂时不加载。

这里我们要用到 `require.ensure` 这个方法去获取依赖，这样 webpack 打包之后将会增加运行时代码，在设定好的条件下才会触发获取这个依赖。

> 在 ES6 中我们可以用 `Dynamic Imports` 来替代上述方案

**代码分割作用**

1 防止重复(prevent duplication)

[`SplitChunksPlugin`](https://webpack.docschina.org/plugins/split-chunks-plugin/) 插件可以将公共的依赖模块提取到已有的 entry chunk 中，或者提取到一个新生成的 chunk。让我们使用这个插件，将前面示例中重复的 `lodash` 模块去除

2 动态导入(dynamic imports) 

当涉及到动态代码拆分时，webpack 提供了两个类似的技术。第一种，也是推荐选择的方式是，使用符合 [ECMAScript 提案](https://github.com/tc39/proposal-dynamic-import) 的 [`import()` 语法](https://webpack.docschina.org/api/module-methods#import-) 来实现动态导入



# [深入理解 Webpack 打包分块（上）](https://zhuanlan.zhihu.com/p/66212099)

“模块”(module)的概念

它指的就是我们在编码过程中有意识的封装和组织起来的代码片段。狭义上我们首先联想到的是碎片化的 React 组件，或者是 CommonJS 模块又或者是 ES6 模块，

“包”(bundle) 

如果你不想把所有的代码都放入一个包中，你可以把它们划分为多个包，也就是“块”(chunk) 中。