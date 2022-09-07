---
title: "Event"
date: 2019-11-30T00:13:06+08:00
draft: false
categories: [""]
series: [""]
---

# 事件委托 代理  [冒泡](https://segmentfault.com/a/1190000018140493)



## 标准事件流

1、捕获阶段 （先从最外层向内查找）
2、目标阶段（找到事件元（当前点击的dom））
3、冒泡阶段（向上冒泡传递事件）



```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>冒泡</title>
</head>
<style>
    * {
        margin: 0;
        padding: 0;
    }
    
    div {
        padding: 30px;
    }
    
    .div1 {
        background: red
    }
    
    .div2 {
        background: blueviolet
    }
    
    .div3 {
        background: yellowgreen
    }
</style>

<body>
    <div class="div1">
        父
        <div class="div2">
            子
            <div class="div3">
                孙
            </div>
        </div>
    </div>
    <script>
       // javascript事件绑定addEventListener接收三个参数，
       //  1、事件名称字符串且不带on
       //  2、回调函数
       //  3、事件流方式（默认为冒泡（false），捕获为true）
        window.onload = function() {
            document.querySelector('.div1').addEventListener('click', function() {
                console.log('点击div1')
            }, false)
            document.querySelector('.div2').addEventListener('click', function() {
                console.log('点击div2')
            }, false)
            document.querySelector('.div3').addEventListener('click', function() {
                console.log('点击div3')
            }, false)
        }
    </script>
</body>

</html>

上述为冒泡过程，点击`div3`，输出：
点击孙
点击子
点击父
```

## 事件委托

我理解的事件委托的好处有两点
1、减少事件绑定次数
2、可以给未知元素绑定事件（例如动态渲染的List）

其原理就是利用事件冒泡向外传递的特性

# formdata参数格式

https://www.jianshu.com/p/3d7817a2e461

下载文件的几种方式

https://scarletsky.github.io/2016/07/03/download-file-using-javascript/