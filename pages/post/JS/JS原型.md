---
title: "JS原型"
date: 2019-08-08T01:36:26+08:00
# draft: true
tags: ["JS"]
categories: ["JS"]
series: ["技术"]
---

# JS原型

## 构造函数和对象

```javascript
function Person() {

}
// 虽然写在注释里，但是你要注意：
// prototype是函数才会有的属性
Person.prototype.name = 'Kevin';
var person1 = new Person();
var person2 = new Person();
console.log(person1.name) // Kevin
console.log(person2.name) // Kevin
```

### 函数的prototype

函数具有prototype属性，它的指向是什么呢？答案是：

它指向了一个对象，这个对象正是调用该构造函数而创建的**实例**的原型，如下图：

![js-proto-dm](/Users/chuixueximen/Development/easyops-doc/201905/js-proto-dm.png)



## 对象的__proto__

每一个JavaScript对象(除了 null )都具有的一个属性，叫__proto__，这个属性会指向该对象的原型，如上图。



## 原型的constructor

每个原型都有一个 constructor 属性指向关联的构造函数，如上图



## 实例与原型

当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止。

```javascript
function Person() {

}

Person.prototype.name = 'Kevin';

var person = new Person();

person.name = 'Daisy';
console.log(person.name) // Daisy

delete person.name;
console.log(person.name) // Kevin
```



在这个例子中，我们给实例对象 person 添加了 name 属性，当我们打印 person.name 的时候，结果自然为 Daisy。

但是当我们删除了 person 的 name 属性时，读取 person.name，从 person 对象中找不到 name 属性就会从 person 的原型也就是 person.__proto__ ，也就是 Person.prototype中查找，幸运的是我们找到了 name 属性，结果为 Kevin。



## 原型的原型

上述如果还未找到呢？

## 原型链

那 Object.prototype 的原型呢？

null，我们可以打印：

```
console.log(Object.prototype.__proto__ === null) // true
```



## 继承？

通过函数Person.prototype或者实例person.__proto__，我们建立了两个对象之间的关联，这很容易让人联想到面向对象的继承机制，而且有一种说法是：“每一个对象都会从原型‘继承’属性”，然而真的是继承吗？

继承意味着复制操作，然而 JavaScript 默认并不会复制对象的属性，相反，JavaScript 只是在两个对象之间创建一个关联，这样，一个对象就可以通过委托访问另一个对象的属性和函数，所以与其叫继承，委托的说法反而更准确些。



## 为什么要有原型和原型链呢？

如果刚从面向对象过来，其实很多人应该很懵逼，原型和链到底该怎么理解呢？

举个例子：

```
function Foo() {
    this.bar = 1
    this.show = function() {
        console.log(this.bar)
    }
}

(new Foo()).show()
```

上述Foo可以看做一个类，其内部定义了属性和方法，类可以创建对象。上述存在的一个问题是：

**每当我们新建一个Foo对象时，`this.show = function...`就会执行一次，这个`show`方法实际上是绑定在对象上的，而不是绑定在“类”中**



我希望在创建类的时候只创建一次`show`方法，这时候就则需要使用原型（prototype）了

```
function Foo() {
    this.bar = 1
}

Foo.prototype.show = function show() {
    console.log(this.bar)
}

let foo = new Foo()
foo.show()
```

我们可以认为原型`prototype`是类`Foo`的一个属性，而所有用`Foo`类实例化的对象，都将拥有这个属性中的所有内容，包括变量和方法。比如上图中的`foo`对象，其天生就具有`foo.show()`方法。

我们可以认为原型`prototype`是类`Foo`的一个属性，而所有用`Foo`类实例化的对象，都将拥有这个属性中的所有内容，包括变量和方法。比如上图中的`foo`对象，其天生就具有`foo.show()`方法。



总结一下：

1. `prototype`是一个类的属性，所有类对象在实例化的时候将会拥有`prototype`中的属性和方法
2. 一个对象的`__proto__`属性，指向这个对象所在的类的`prototype`属性

## 原型链继承

所有类对象在实例化的时候将会拥有`prototype`中的属性和方法，这个特性被用来实现JavaScript中的继承机制。

```
function Father() {
    this.first_name = 'Donald'
    this.last_name = 'Trump'
}

function Son() {
    this.first_name = 'Melania'
}

Son.prototype = new Father()

let son = new Son()
console.log(`Name: ${son.first_name} ${son.last_name}`)
```

Son类继承了Father类的`last_name`属性，最后输出的是`Name: Melania Trump`。

总结一下，对于对象son，在调用`son.last_name`的时候，实际上JavaScript引擎会进行如下操作：

1. 在对象son中寻找last_name
2. 如果找不到，则在`son.__proto__`中寻找last_name
3. 如果仍然找不到，则继续在`son.__proto__.__proto__`中寻找last_name
4. 依次寻找，直到找到`null`结束。比如，`Object.prototype`的`__proto__`就是`null`

JavaScript的这个查找的机制，被运用在面向对象的继承中，被称作prototype继承链。



以上就是最基础的JavaScript面向对象编程，我们并不深入研究更细节的内容，只要牢记以下几点即可：

1. 每个构造函数(constructor)都有一个原型对象(prototype)
2. 对象的`__proto__`属性，指向类的原型对象`prototype`
3. JavaScript使用prototype链实现继承机制

> https://github.com/mqyqingfeng/Blog/issues/2
>
> https://www.leavesongs.com/PENETRATION/javascript-prototype-pollution-attack.html



## Promise.resolve()

Promise.resolve()方法接收一个参数，并会返回一个处于已完成状态的 Promise ，在then()方法中使用完成处理函数才能提取该完成态的Promise传递的值



# for ... in

循环将遍历对象本身的所有可枚举属性，以及对象从其**构造函数原型中继承**的属性



# 实现深拷贝

```javascript
    const deepClone = (obj) => {
        const newObj = obj instanceof Object ? {} : [];
        for(const props in obj) {
          newObj[props] = typeof obj[props] === 'object' ? deepClone(obj[props]) : obj[props];
        }
        
        return newObj;
    }

// test data
const obj = {
    number: 1,
    string: 'abc',
    bool: true,
    undefined: undefined,
    null: null,
    symbol: Symbol('s'),
    arr: [1, 2, 3],
    date: new Date(),
    userInfo: {
        name: 'Better',
        position: 'front-end engineer',
        skill: ['React', 'Vue', 'Angular', 'Nodejs', 'mini programs']
    },
    func: function () {
        console.log('hello better');
    }
}

```

另一种巧妙的方式：结合JSON.stringify() 和JSON.parse()
