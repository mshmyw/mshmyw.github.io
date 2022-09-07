---
title: "Nodejs"
date: 2019-10-20T10:21:20+08:00
tags: ['node']
categories: ['node']
---

# node verdaccio搭建私有仓库

1. 安装node
2. 安装verdaccio

```
npm install -g verdaccio --unsafe-perm
```

3. 启动verdaccio

   ```
   verdaccio
   # 配置
   # you can specify listen address (or simply a port)
   listen: 0.0.0.0:8873
   
   # url配置成淘宝镜像地址
   url: https://registry.npm.taobao.org/  # 默认为npm的官网仓库地址，由于国情，修改 url 让verdaccio使用 淘宝的npm镜像地址，>这样下载速度更快
   
   ```

4、使用pm2启动verdaccio，保证该进程一直处于打开状态

安装pm2

```
npm install -g pm2 --unsafe-perm
```

使用pm2启动verdaccio，以保证进程一直处于打开状态

```
pm2 start verdaccio
```

5、访问搭建好的私有仓库

在浏览器中打开http://47.107.60.51:4873，如果能正常访问则说明搭建成功了。如图：

## 客户端（本地）发布npm到私有仓库
使用verdaccio在服务器搭建好私有仓库以后，接下来就是如何在本地上传npm包到私有仓库服务器了

发布npm包之前必须先注册账号，具体可参考博客如何开发一个npm包并发布到npm中央仓库

1、登录

```
npm adduser --registry  http://47.107.60.51:4873

```

输入npm账号用户名、密码和邮箱，如下：

Username: better1025
Password: 
Email: (this IS public) 924902324@qq.com
Logged in as better1025 on http://47.107.60.51:4873/.
输出Logged in as better1025 on http://47.107.60.51:4873/.，表示npm账号better1025成功登录到http://47.107.60.51:4873/私有仓库了。

2、发布npm包到私有仓库

```
npm publish --registry http://47.107.60.51:4873
```

如何发布npm包以及遇到错误，参考博客如何开发一个npm包并发布到npm中央仓库就行，这里就不再累述了。

3、npm成功发布到私有仓库
在浏览器中刷新http://47.107.60.51:4873页面，

4、如何使用私有仓库npm包
由于国内访问国外网限制，为了提升我们下载npm包的速度，我们在平时项目开发中一般都会设置淘宝镜像。

```
// 设置淘宝镜像
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

查看npm配置信息

```
npm config ls
```

下载我们发布到私有仓库的npm包时，需要修改仓库地址，具体操作如下：

```
npm set registry http://47.107.60.51:4873
```

在执行这条命令以后，再使用npm install lld-npm-demo命令就会优先去我们自己的私有仓库下载npm包，如何没有找到，则会从npm中央仓库下载

执行命令和结果

最后推荐一个npm仓库切换工具：切换npm仓库地址，推荐使用nrm

nrm是 npm registry 管理工具, 能够查看和切换当前使用的registry。不安装也可以，安装会更高效。

```
npm install -g nrm
```



# webpack

webpack-dev-server

**你启动webpack-dev-server后，你在目标文件夹中是看不到编译后的文件的,实时编译后的文件都保存到了内存当中。因此很多同学使用webpack-dev-server进行开发的时候都看不到编译后的文件**

相对于webpack命令好处：1. 打包速度快 2. hot replace(热替换)

而 webpack命令是会输出dist目录的

# [GC](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management)

JS垃圾回收算法

1 引用计数 

缺点是 循环引用

2 标记-清除算法

从2012年起，所有现代浏览器都使用了标记-清除垃圾回收算法。



# 包应该放在devDependencies还是dependencies

dependencies是什么呢？ `生产环境`。
devdependencies是什么呢？ `开发环境`。
网上也可以查到很多资料，大概回答意思是，我们搭建一个webpack+react+es6的项目，像webpack babel这种负责打包编译的，我们就应该装在开发环境，像react之类的装在生产环境。
可是为什么呢？

# [实质区别](https://guxinyan.github.io/2017/11/02/%E5%8C%85%E5%BA%94%E8%AF%A5%E6%94%BE%E5%9C%A8devDependencies%E8%BF%98%E6%98%AFdependencies/)

如果我们只是单纯的做项目，那么我们可简单地认为生产环境和开发环境做为一种友善的提示，实质没有什么区别；但是，如果在发布npm包的时候，两种环境安装方式是有很大区别的！！！

```
假设有以下两个模块：
模块A
- devDependencies
  模块B
- dependencies
  模块C
模块D
- devDependencies
  模块E
- dependencies
  模块A
npm install D的时候， 下载的模块为：
- D
- A
- C
当我们下载了模块D的源码，并且在根目录下npm install， 下载的模块为：
- A
- C
- E
```

所以，在发布npm包的时候，本身dependencies下的模块会作为依赖，一起被下载；devDependencies下面的模块就不会自动下载了；但对于项目而言，npm install 会自动下载devDependencies和dependencies下面的模块。

# [npm依赖管理之peerDependencies](https://www.cnblogs.com/wonyun/p/9692476.html)

假设我们当前的项目是MyProject，项目中有一些依赖，比方其中有一个依赖包**PackageA**，该包的**package.json**文件指定了对**PackageB**的依赖：

```
{
    "dependencies": {
        "PackageB": "1.0.0"
    }
}
```

如果我们在我们的MyProject项目中执行`npm install PackageA`, 我们会发现我们项目的目录结构会是如下形式：

```
MyProject
|- node_modules
   |- PackageA
      |- node_modules
         |- PackageB
```

那么在我们的项目中，我们能通过下面语句引入"PackageA"：

```
var packageA = require('PackageA')
```

但是，如果你想在项目中直接引用PackageB:

```
var packageA = require('PackageA')
var packageB = require('PackageB')
```

这是不行的，即使PackageB被安装过；因为Node只会在“MyProject/node_modules”目录下查找PackageB，它不会在进入PackageA模块下的node_modules下查找。

所以，为了解决这个问题，在MyProject项目package.json中我们必须直接声明对PackageB的依赖并安装。

但是，有时我们不用在当前项目中声明对PackageB的依赖就可以直接引用，尤其是，PackageA是一个类似于**grunt**的插件，例如grunt-contrib-jshint。

为什么在项目中不用声明就可以直接使用呢？这就不得不说说peerDependencies的作用了。



## peerDependencies的引入

为了解决这种问题：

```
如果你安装我，那么你最好也安装X,Y和Z.
```

于是`peerDependencies`就被引入了。例如上面PackageA的**package.json**文件如果是下面这样：

```
{
    "peerDependencies": {
        "PackageB": "1.0.0"
    }
}
```

那么，它会告诉npm：如果某个package把我列为依赖的话，那么那个package也必需应该有对PackageB的依赖。

也就是说，如果你`npm install PackageA`，你将会得到下面的如下的目录结构：

```
MyProject
|- node_modules
   |- PackageA
   |- PackageB
```

你可能注意到：

> 在npm2中，即使当前项目MyProject中没有直接依赖PackageB，该PackageB包依然会安装到当前项目的node_modules文件夹中。

下面的代码现在可以正常工作了，因为两个包在"MyProject/node_modules"中被安装了：

```
var packageA = require('PackageA')
var packageB = require('PackageB')
```

总结一句话，`peerDependencies`的具体作用：

> `peerDependencies`的目的是提示宿主环境去安装满足插件peerDependencies所指定依赖的包，然后在插件import或者require所依赖的包的时候，永远都是引用宿主环境统一安装的npm包，最终解决插件与所依赖包不一致的问题。