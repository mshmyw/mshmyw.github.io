---

title: "JS闭包"
date: 2019-08-08T01:36:26+08:00
# draft: true
tags: ["JS"]
categories: ["JS"]
series: ["技术"]
---

# 闭包

mdn上定义是：函数和声明该函数的词法环境的组合。

维基定义是：[闭包][1] **词法闭包**（Lexical Closure）或**函数闭包**（function closures），是引用了自由变量的函数。这个被引用的自由变量将和这个函数一同存在，即使已经离开了创造它的环境也不例外

支持闭包的语言中，通常函数会是一等公民。也就是函数可以像普通变量一样使用。

相信你没有接触过的话读完只会更困惑。

我们知道JS是支持闭包的，下面看一个JS的🌰。

```javascript
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}

var foo = checkscope();
foo();
```

该例子中：函数*checkscope*内仍有一个函数f,而且f内引用了一个外部变量scope，其定义在checkscope中，但使用在f中。在调用时，分了两步：第一步执行checkscope()，其执行结束后有什么结果呢？答案是scope变量并未销毁，因为f函数仍然引用了它。故第二步执行foo()才没有问题。

这就是闭包的形式。

## 语言对比

像上面的这种函数套函数的写法，就是闭包的形式之一。有许多语言支持闭包，比如python,lua。并不是所有语言呢都支持这样，比如c语言，我们看一下c语言的函数，假如如下：

```c
void func1(){
    printf("http://c.biancheng.net");
    void func2(){
        printf("C语言小白变怪兽");
    }
}
```

上述定义是❌的，因为C语言的函数不能嵌套定义。

## 闭包理解

####  闭包允许内层函数引用父函数中的变量。注意这里说的是对外层的引用。

示例：

```javascript
/**
 * <body>
 * <ul>
 *     <li>one</li>
 *     <li>two</li>
 *     <li>three</li>
 *     <li>one</li>
 * </ul>
 */

var lists = document.getElementsByTagName('li');
for(var i = 0 , len = lists.length ; i < len ; i++){
    lists[ i ].onmouseover = function(){
        alert(i);    
    };
}
```

这里鼠标移过每个li元素，总是弹出4。

为什么呢？

> 首先在匿名函数（ function(){ alert(i); }）内部查找是否定义了 i，结果是没有定义；因此它会向上查找，查找结果是已经定义了，并且i的值是4（循环后的i值）；所以，最终每次弹出的都是4。

其中一种解决办法是：

```javascript
var lists = document.getElementsByTagName('li');
for(var i = 0 , len = lists.length ; i < len ; i++){
    (function(index){
        lists[ index ].onmouseover = function(){
            alert(index);    
        };                    
    })(i);
}
```

示例2：
```javascript
var data = [];

for (var i = 0; i < 3; i++) {
  data[i] = function () {
    console.log(i);
  };
}

data[0]();
data[1]();
data[2]();
```

答案是都是 3，简单分析下：

执行到data[0]时候，循环已经结束，此时i为3。在data[0]函数的作用域下，```data[0]( )```结果为3

## 内存泄漏

闭包十分容易造成浏览器的内存泄露。JS采用的是一种自动垃圾回收机制。当一个对象无用的时候，即程序中无变量引用这个对象时，就会从内存中释放掉这个变量。

#### 循环引用

A->B->C->B ：这里增加了C的某一属性引用B对象，如果这是清除A，那么B、C不会被释放，因为B和C之间产生了循环引用。



闭包非常容易创建循环引用，故有可能导致内存泄漏。

[1]: https://zh.wikipedia.org/wiki/闭包_(计算机科学)	"闭包"

> - [深入理解Javascript闭包(closure) - Felix Woo](https://web.archive.org/web/20100825182303/http://www.felixwoo.com/archives/247)



## 闭包再次理解

闭包就是由函数创造的一个词法作用域，里面创建的变量被引用后，可以在这个词法环境之外自由使用。
闭包通常用来创建内部变量，使得这些变量不能被外部随意修改，同时又可以通过指定的函数接口来操作。

两个作用：
（1）：通过闭包，在外部环境访问内部环境的变量。
（2）：使得这些变量一直保存在内存中，不会被垃圾回收。

应用场景

1. 模块。也是利用了闭包的一个强大的代码模式。