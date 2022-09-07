---
title: "Vue"
date: 2019-10-10T09:10:04+08:00
# draft: true
tags: ["Vue"]
categories: ["Vue"]
---

# 响应式

https://scrimba.com/p/pXKqta/cQ3QVcr



# 双向数据绑定

[https://recallhyx.github.io/2018/03/18/%E5%89%8D%E7%AB%AF%E4%B8%89%E5%A4%A7%E6%A1%86%E6%9E%B6%E6%95%B0%E6%8D%AE%E6%B5%81%E5%8A%A8%E5%92%8C%E5%8E%9F%E7%90%86/#Angular2](https://recallhyx.github.io/2018/03/18/前端三大框架数据流动和原理/#Angular2)



单向绑定好处是容易追踪变化，双向的好处是写着方便。

### 场景

一般都是异步操作会有双向绑定的需求，比如：1. 用户输入操作 2. 请求服务器数据 3. 定时事件(setTimeout)。所有的异步操作是可能导致数据变化的根源因素。

### React Ng2 Vue 对比

-----

https://github.com/DMQ/mvvm 实现数据绑定的做法有大致如下几种：

> 发布者-订阅者模式（backbone.js）

> 脏值检查（angular.js）

> 数据劫持（vue.js）

Ng2: 脏检查。就是存储所有变量的值，每当可能有变量发生变化需要检查时，就将所有变量的旧值跟新值进行比较，不相等就说明检测到变化，需要更新对应视图。每一个组件都有自己的变化检测器，用来监测每个组件在每个运行周期是否有异步操作发生。

Vue: Vue 和 Angular2 一样，也是使用了单向数据流。vue 是通过数据劫持的方式来做数据绑定的，其中最核心的方法便是通过`Object.defineProperty()`来实现对属性的劫持，达到监听数据变动的目的。

vue 是采用数据劫持结合**发布者-订阅者模式**的方式，通过`Object.defineProperty()` 来劫持各个属性的 `setter`，`getter`，在数据变动时发布消息给订阅者，触发相应的监听回调

React: 在React中，数据流是自上而下单向的从父节点传递到子节点，也就是只有单向绑定，并没有 Angular2 和 Vue 的双向绑定 。

React数据绑定 [React](http://lib.csdn.net/base/react)采用这种方式，考虑虚拟DOM树的更新：
- 属性更新，组件自己处理
- 结构更新，重新“渲染”子树（虚拟DOM），找出最小改动步骤，打包DOM操作，给真实DOM树打补丁

## vue 双向绑定理解

https://juejin.im/post/5be4f7cfe51d453339084530

关键是：数据拦截（ES5的Object.definePropety）和Watch监视

Vue采用数据劫持&发布-订阅模式的方式，通过ES5提供的 Object.defineProperty() 方法来劫持（监控）各属性的 getter 、setter ，并在数据（对象）发生变动时通知订阅者，触发相应的监听回调。

# MVVM

MVVM: View ViewModel Model

Model: 我们可以把Model称为数据层，因为它仅仅关注数据本身，不关心任何行为

View: 用户界面。当ViewModel对Model进行更新的时候，会通过数据绑定更新到View

ViewModel: 业务逻辑层，View需要什么数据，ViewModel要提供这个数据；View有某些操作，ViewModel就要响应这些操作，所以可以说它是Model for View。



# 组件通信

**父子之间**

**React**:  **父->子**：通过props将数据传递给子组件  **子->父**：通过父组件向子组件传递函数，然后子组件中调用这些函数，利用回调函数实现数据传递

**Vue**: **父->子**：通过props进行传递数据给子组件 **子->父**：通过emit向父组件传值。 在表单控件中，使用v-model实现了双向数据绑定，其实这里v-model是一个语法糖，内部实现还是监听了表单控件的change事件，然后将数据传递给组件修改数据，从而实现了双向数据绑定

**兄弟之间**

**需要借助父亲，兄弟组件不可以直接通信的问题，这会造成数据流混乱，这就完全违反了单向数据流的思想。**

**Vue**

在Vue中，可以通过查找父组件下的子组件实例，然后进行组件进行通信。如`this.$parent.$children`，在`$children`中，可以通过组件的name找到要通信的组件，进而进行通信。

**React**

在React中，需要现将数据传递给父组件，然后父组件再传递给兄弟组件。

## 多层级组件

**Vue**

在多层级的组件中，当然可以通过不断的获取`$parent`找到需要传递的祖先级组件，然后进行通信，但是这样繁琐易错，并不推荐。Vue在2.2.0 新增提供了provide/inject的方式进行传递数据。

**React**

在React中，提供了一个和Vue类似的处理多层级组件通信的方式——`context`，这里会提供一个生产者和一个消费者，会在父组件中生产数据，在子组件中消费数据。从使用上来说，只需要将子组件包裹在生产者的`Provider`中，在需要用到数据的子组件中，通过`Consumer`包裹，就可以拿到生产者的数据

## 任意组件之间

**Vue**

对于任意组件，简单的可以使用EventBus(发布/订阅），对于更为复杂的建议使用Vuex。

**React**

简单的使用EventBus，复杂的使用Redux



# web component

https://developers.google.com/web/fundamentals/web-components/customelements?hl=zh-cn