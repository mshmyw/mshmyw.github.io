---
title: "Js Theory"
date: 2019-08-19T17:39:18+08:00
# draft: true
tags: ['JS原型', 'JS单线程机制和异步']
categories: ['JS原型', 'JS单线程机制和异步']
---



# JS 原型

![is-relation](/Users/chuixueximen/Pictures/is-relation.jpg)



## JS运行机制

### JS是单线程，为何还能异步？这矛盾吗？

https://wsvincent.com/javascript-closure-settimeout-for-loop/



JS本身是单线程，但是JS是运行在浏览器中的，一个浏览器可以有多个进程，而每个执行进程中就包含了一个执行线程。比如chrome每次打开一个标签页（网站），就是一个独立进程，该进程中有一个执行线程（JS引擎中执行）。浏览器还有事件进程，JS执行进程和事件进程的交互就形成了异步。



浏览器包含了：

-  JS引擎(like V8) (have stack and heap)
- web API (`setTimeout`函数、DOM操作、AJAX请求) 
- callback queue（task queue) 
- event loop(when js run time's stack is clear, get the first thing from the call back queue to stack to run)

![eventLoop](/Users/chuixueximen/Pictures/eventLoop.png)

其中setTimeout为异步函数，当JS执行到异步函数时，本身线程是继续往下顺序执行，但是异步函数是与web API进行交互。当执行结束会放到callback queue的队尾。

> The **runtime engine** is what executes our code and each major browser has a slightly different engine under the hood. For example Chrome uses the [V8](https://developers.google.com/v8/) engine which also happens to power NodeJs. This engine can only execute one piece of code at a time.

## JS 单线程意味着

one thread => one call stack => one thing at a time



## 浏览器多进程架构

https://imweb.io/topic/58e3bfa845e5c13468f567d5

跟现在的很多多线程浏览器不一样，Chrome浏览器使用多个进程来隔离不同的网页。因此在Chrome中打开一个网页相当于起了一个进程

#### 那么Chrome为什么要使用多进程架构?

在浏览器刚被设计出来的时候，那时的网页非常的简单，每个网页的资源占有率是非常低的，因此一个进程处理多个网页时可行的。然后在今天，大量网页变得日益复杂。把所有网页都放进一个进程的浏览器面临在健壮性，响应速度，安全性方面的挑战。因为如果浏览器中的`一个tab网页崩溃的话，将会导致其他被打开的网页应用`。另外相对于线程，进程之间是不共享资源和地址空间的,所以不会存在太多的安全问题，而由于多个线程共享着相同的地址空间和资源,所以会存在`线程之间有可能会恶意修改或者获取非授权数据等复杂的安全问题。`

在了解这个知识点线，我们需要先说明下什么是`浏览器内核`。

## 浏览器内核

简单来说浏览器内核是通过取得页面内容、整理信息（应用CSS）、计算和组合最终输出可视化的图像结果，通常也被称为渲染引擎。从上面我们可以知道，Chrome浏览器为每个tab页面单独启用进程，因此每个tab网页都有由其独立的渲染引擎实例。

## 浏览器内核是多线程

浏览器内核是多线程，在内核控制下各线程相互配合以保持同步，一个浏览器通常由以下常驻线程组成：

- GUI 渲染线程
- JavaScript引擎线程
- 定时触发器线程
- 事件触发线程
- 异步http请求线程

## GUI渲染线程

`GUI渲染线程`负责渲染浏览器界面HTML元素,当界面需要重绘(Repaint)或由于某种操作引发回流(reflow)时,该线程就会执行。在Javascript引擎运行脚本期间,GUI渲染线程都是处于挂起状态的,也就是说被”冻结”了.

## Javascript引擎线程

`Javascript引擎`，也可以称为JS内核，主要负责处理Javascript脚本程序，例如V8引擎。Javascript引擎线程理所当然是负责解析Javascript脚本，运行代码。

## Javascript是单线程的

Javascript是单线程的, 那么为什么Javascript要是单线程的？

这是因为Javascript这门脚本语言诞生的使命所致：JavaScript为处理页面中用户的交互，以及操作DOM树、CSS样式树来给用户呈现一份动态而丰富的交互体验和服务器逻辑的交互处理。如果JavaScript是多线程的方式来操作这些UI DOM，则可能出现UI操作的冲突； 如果Javascript是多线程的话，在多线程的交互下，处于UI中的DOM节点就可能成为一个临界资源，假设存在两个线程同时操作一个DOM，一个负责修改一个负责删除，那么这个时候就需要浏览器来裁决如何生效哪个线程的执行结果。当然我们可以通过锁来解决上面的问题。但为了避免因为引入了锁而带来更大的复杂性，Javascript在最初就选择了单线程执行。

## GUI 渲染线程 与 JavaScript引擎线程互斥！

由于JavaScript是可操纵DOM的，如果在修改这些元素属性同时渲染界面（即JavaScript线程和UI线程同时运行），那么渲染线程前后获得的元素数据就可能不一致了。因此为了防止渲染出现不可预期的结果，浏览器设置GUI渲染线程与JavaScript引擎为互斥的关系，当JavaScript引擎执行时GUI线程会被挂起，GUI更新会被保存在一个队列中等到引擎线程空闲时立即被执行。

## JS阻塞页面加载

从上面我们可以推理出，由于GUI渲染线程与JavaScript执行线程是互斥的关系，当浏览器在执行JavaScript程序的时候，GUI渲染线程会被保存在一个队列中，直到JS程序执行完成，才会接着执行。因此如果JS执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞的感觉。

## 定时触发器线程

浏览器定时计数器并不是由JavaScript引擎计数的, 因为JavaScript引擎是单线程的, 如果处于阻塞线程状态就会影响记计时的准确, 因此通过单独线程来计时并触发定时是更为合理的方案。

## 事件触发线程

当一个事件被触发时该线程会把事件添加到待处理队列的队尾，等待JS引擎的处理。这些事件可以是当前执行的代码块如定时任务、也可来自浏览器内核的其他线程如鼠标点击、AJAX异步请求等，但由于JS的单线程关系所有这些事件都得排队等待JS引擎处理。

## 异步http请求线程

在XMLHttpRequest在连接后是通过浏览器新开一个线程请求， 将检测到状态变更时，如果设置有回调函数，异步线程就产生状态变更事件放到 JavaScript引擎的处理队列中等待处理。



# [详细解析JavaScript中的异步机制](https://zhuanlan.zhihu.com/p/64736448)



# 移动端适配



# 自定义事件

https也并非100%安全，所以说：没有绝对的安全



# [数据类型深入理解](https://segmentfault.com/a/1190000006752076)

基本类型的变量是存放在栈内存（Stack）里的

![图片描述](https://segmentfault.com/img/bVCunf)

**引用类型的值是按引用访问的。**

- 栈内存中保存了变量标识符和指向堆内存中该对象的指针
- 堆内存中保存了对象的内容

![图片描述](https://segmentfault.com/img/bVCuGx)

### 检测类型

[typeof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof)：经常用来检测一个变量是不是最基本的数据类型

[instanceof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof)：用来判断某个构造函数的 prototype 属性所指向的对象是否存在于另外一个要检测对象的原型链上

# JS宏任务微任务

https://juejin.im/post/5e22b391f265da3e204d8c14 