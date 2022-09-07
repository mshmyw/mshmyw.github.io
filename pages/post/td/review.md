---
title: "Review"
date: 2019-10-09T09:02:26+08:00
draft: true
---

# ES6新特性

变量声明、箭头函数、展开运算符、数组结构、类等。

y

tcp

三次握手 为何可靠

http https区别

webpack原理

nodejs项目

浏览器输入uri发生了什么

链表

哈希

排序

jwt

yy2

react性能优化

shouldcompoenntupdate有什么用 与 purecomponent区别

webpack模块化原理 动态导入原理

https加密过程

tcp三次握手为何可靠 二次不行吗

react 组件的key作用

csrf

原理

防范 验证HTTP Referer字段 token字段

性能优化（图片压缩 合并请求等）

dom渲染过程 为何阻塞

http状态码 301 302 304 区别

cetv

1 跨域 解决
2 call bind apply 区别
3 实现 jquery 元素选择器
4 元素提升
5 变量存储
6 同步与异步





react

生命周期

shouldmount

es6一些特性

wepact loader plugin

箭头函数
redux数据流

异步请求在哪里发送

虚拟dom原理

diff算法过程

这就是所谓的 Virtual DOM 算法。包括几个步骤：

1. 用 JavaScript 对象结构表示 DOM 树的结构；然后用这个树构建一个真正的 DOM 树，插到文档当中
2. 当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记录两棵树差异
3. 把2所记录的差异应用到步骤1所构建的真正的DOM树上，视图就更新了

Virtual DOM 本质上就是在 JS 和 DOM 之间做了一个缓存。可以类比 CPU 和硬盘，既然硬盘这么慢，我们就在它们之间加个缓存：既然 DOM 这么慢，我们就在它们 JS 和 DOM 之间加个缓存。CPU（JS）只操作内存（Virtual DOM），最后的时候再把变更写入硬盘（DOM）

高阶组件



# 基础

面向对象

事件委托 代理

css padding-top

http1.0 1.1 2.0

http状态码

http缓存

https



kg

for(var i =0,j=0; i< 10, j< 6; i++, j++)
{
  var k = i + j;
  console.log(i + "--" + j);
  console.log(k);
}
console.log(k);



猜测比较二者区别

1

var a = [];
for(var i = 0; i < 10; i++) {
  var c = i;
  a[i] = function() {
    console.log(c);
  }
}

`a[6]( )`

2

var a = [];
for(var i = 0; i < 10; i++) {
  var c = i;
  a[i] = function() {
    console.log(i);
  }
}

`a[6]()`



### 基本类型

JS 五种基本数据类型

```
Undefined`、`Null`、`Boolean`、`Number`、`String
```

ES6 引入了一种新的原始数据类型 **Symbol**

### 引用类型

除过上面的 6 种基本数据类型外，剩下的就是引用类型了，统称为 `Object 类型`。细分的话，有：`Object 类型`、`Array 类型`、`Date 类型`、`RegExp 类型`、`Function 类型` 等。



angular react 对比 

angular 双向绑定原理

angular脏值检测原理 

react 16 hook 和15 对比 

hook的好处 

对class的重构的有意思的事情



浏览器渲染过程

quic http1 http2 对比

react15 和react16渲染过程

输入url 到页面渲染过程



# aaa

react hook
react dom diff
redux
数组深度
拍平数组