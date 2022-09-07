---
ltitle: "React-01"
date: 2019-08-08T01:36:26+08:00
tags: ["React"]
categories: ["React"]
---

# react

## 生命周期

单个组件的生命周期的函数执行顺序是 componentWillMount -> render -> componentDidMount

- 为何先render 再componentDidMount?



总体三步：

初始化、运行中、销毁

**初始化**

1 getInitialState:获取每个实例的初始化状态

2 componentWillMount 组件即将被装载、渲染到页面上

3 render:组件在这里生成虚拟的 DOM 节点

4 componentDidMount:组件真正在被装载之后

[**运行中**](https://segmentfault.com/a/1190000016885832)

1 shouldComponentUpdate 组件接受到新属性或者新状态的时候（可以返回 false，接收数据后不更新，阻止 render 调用，后面的函数不会被继续执行了）

**shouldComponentUpdate** 这个方法用来判断**是否需要调用 render 方法重新描绘 dom**。因为 dom 的描绘非常消耗性能，如果我们能在 shouldComponentUpdate 方法中能够写出更**优化**的 dom diff 算法，可以极大的提高性能。

2 componentWillUpdate 组件即将更新不能修改属性和状态

3 render:组件重新描绘

4 componentDidUpdate:组件已经更新

**销毁阶段**

componentWillUnmount 组件即将销毁



## Making Effects Self-Sufficient ?

https://overreacted.io/a-complete-guide-to-useeffect/#functional-updates-and-google-docs

```
  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);
```

> A: Even though this effect only runs once, the interval callback that belongs to the first render is perfectly capable of sending the `c => c + 1` update instruction every time the interval fires. It doesn’t need to know the current `counter` state anymore. React already knows it.



# 同步渲染 和 异步渲染（React Fiber）

https://segmentfault.com/a/1190000017483690

## 同步渲染

 假设有一千个组件要渲染， 每个耗费1ms, 一千个就是1000ms, 由于javascript 是单线程的， 这 1000ms 里 CPU 都在努力的干活， 一旦开始，中间就不会停。 如果这时候用户去操作， 比如输入， 点击按钮， 此时页面是没有响应的。 等更新完了， 你之前的那些输入就会啪啪啪一下子出来了。

这就是我们说的`页面卡顿`, 用起来很不爽， 体验不好。

这个问题和设备性能没有多大关系， 归根结底还是`同步渲染机制`的问题。

因为JavaScript单线程的特点，每个同步任务不能耗时太长，不然就会让程序不会对其他输入作出相应，React的更新过程就是犯了这个禁忌，而React Fiber就是要改变现状。

## 异步渲染

Fiber 的做法是：分片。

把一个很耗时的任务分成很多小片，每一个小片的运行时间很短，虽然总时间依然很长，但是在每个小片执行完之后，都给其他任务一个执行的机会，这样唯一的线程就`不会被独占`，其他任务依然有运行的机会。 而`维护每一个分片的数据结构， 就是Fiber`。



# hooks 本质

> Hooks 的本质是一个渲染函数，就像是把 Class 组件的 `render()` 函数单独提取出来一样。

`render()` 函数在运行时会根据那一次的 props 和 state 去渲染。如果在 `render()` 函数运行期间 props 或是 state 再次发生变化，并不会影响这一次的执行，而是会触发新一轮的渲染，`render()` 再一次被调用，并且这一次传入的是变化后的 props 和 state。

> `render()` 函数中用到的 props 和 state 在函数执行的一开始就已经被确定了。



## 不要担心重复定义函数

Hooks 的执行就只是单纯的「渲染 -> 执行 Effect」，当组件状态发生改变，它并不是去修改某个现有的东西，而是给组件的函数传入新的参数，然后重置走一遍「渲染 -> 执行 Effect」的流程。

事实上，Hooks 的每一次渲染，都有它自己的 props、state、函数、Effect、……所有的一切都是这一次渲染独有的。

好在，只要不是非常高频的更新，这种程度的开销并不会对我们的应用造成明显的负面影响。因此我们可以允许这种反模式的存在。




# Writing Resilient Components



## Don’t Stop the Data Flow in Rendering
Avoiding copying props into state。

## Don’t Stop the Data Flow in Side Effects
side effects (e.g. data fetching) are also a part of the data flow
## Don’t Stop the Data Flow in Optimizations

The default shallow comparison in React.memo will respect changing function identity
In a class, PureComponent has the same behavior.
If you insist on a custom comparison, make sure that you don’t skip functions:

## Principle2
Don’t treat “receiving props” as a special event. Avoid “syncing” props and state. In most cases, every value should either be fully controlled (through props), or fully uncontrolled (in local state). Avoid derived state when you can. And always be ready to render!



# React Docs

## state
不要直接修改 State
State 的更新可能是异步的

## 事件
React 事件的命名采用小驼峰式
使用 JSX 语法时你需要传入一个函数作为事件处理函数



# 组合

React组件本质是对象，故props原则上可以接受任何类型，包括组件类型。

# React哲学

1. 单一功能原则 
2. UI组件与数据模型对应
3. 层次结构分明
4. UI实现和交互实现分隔开



> 即使你已经熟悉了 *state* 的概念，也**完全不应该使用 state** 构建静态版本。state 代表了随时间会产生变化的数据，应当仅在实现交互时使用。所以构建应用的静态版本时，你不会用到它。

React 数据流是自上而下的单向传递，反向传递需要借助事件。



# 无障碍

最最简单也是最最重要的检测是确保你的整个网站都可以被只使用键盘的用户使用和访问

- 对比度 WCAG



对比度测试

https://webaim.org/resources/contrastchecker/?fcolor=0000FF&bcolor=FFFFFF

# 代码分割

代码分割是由诸如 Webpack这类打包器支持的一项技术，能够创建多个包并在运行时动态加载。

## 懒加载（延迟加载）

能够显著地提高你的应用性能。尽管并没有减少应用整体的代码体积，但你可以避免加载用户永远不需要的代码，并在初始加载的时候减少所需加载的代码量。

React.lazy 和Suspense技术

`React.lazy` 函数能让你像渲染常规组件一样处理动态引入（的组件）

然后应在 `Suspense` 组件中渲染 lazy 组件，如此使得我们可以使用在等待加载 lazy 组件时做优雅降级（如 loading 指示器等）。

> 这项新功能使得可以不借助任何附加库就能通过代码分割（code splitting）延迟加载 react 组件。延迟加载是一种优先渲染必须或重要的用户界面项目，而将不重要的项目悄然载入的技术。这项技术已经被完全整合进了 react 自身的核心库中。



### 延迟和挂起为何重要

打包工具将所有代码组件相继归纳到一个 javascript 块中，并将其传递给浏览器；但随着应用增长，我们注意到打包的体积也与日俱增。这会导致应用因为加载慢而难以使用。借助代码分割，代码包能被分割成更小的块，最重要的块先被加载，而其余次要的则延迟加载。

另外一个是要考虑慢网络情况。



## Refs 

需要在典型数据流之外强制修改子组件。被修改的子组件可能是一个 React 组件的实例，也可能是一个 DOM 元素。对于这两种情况，React 都提供了解决办法。



下面是几个适合使用 refs 的情况：

- 管理焦点，文本选择或媒体播放。
- 触发强制动画。
- 集成第三方 DOM 库



**你不能在函数组件上使用 ref 属性**，因为他们没有实例。



# Hook

为何引入hook?

1. 在组件之间复用状态逻辑很难

2. 复杂组件变得难以理解

3. 难以理解的 class



> 传递给 `useEffect` 的函数在每次渲染中都会有所不同，每次我们重新渲染，都会生成*新的* effect，替换掉之前的。某种意义上讲，effect 更像是渲染结果的一部分 —— 每个 effect “属于”一次特定的渲染



### Effect

如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（`[]`）作为第二个参数。这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行

> **不要在循环，条件或嵌套函数中调用 Hook，** 确保总是在你的 React 函数的最顶层调用他们
>
> **不要在普通的 JavaScript 函数中调用 Hook。**

只要 Hook 的调用顺序在多次渲染之间保持一致，React 就能正确地将内部 state 和对应的 Hook 进行关联

如果我们想要有条件地执行一个 effect，可以将判断放到 Hook 的*内部*：

### 自定义hook

目前为止，在 React 中有两种流行的方式来共享组件之间的状态逻辑: [render props](https://zh-hans.reactjs.org/docs/render-props.html) 和[高阶组件](https://zh-hans.reactjs.org/docs/higher-order-components.html).

当我们想在两个函数之间共享逻辑时，我们会把它提取到第三个函数中。而组件和 Hook 都是函数，所以也同样适用这种方式。

**自定义 Hook 是一个函数，其名称以 “`use`” 开头，函数内部可以调用其他的 Hook。**



# React性能

## [shouldComponentUpdate VS PureComponent区别](https://juejin.im/post/5b614d9bf265da0fa759e84b)

1 PureComponent通过prop和state的浅比较来实现shouldComponentUpdate，

## [key属性作用](https://juejin.im/post/59abb01c518825243f1b6dad)

