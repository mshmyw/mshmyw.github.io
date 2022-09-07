---
title: "Python"
date: 2019-11-09T10:52:39+08:00
draft: false
categories: ["algo"]
series: ["algo"]
---

# 字符串表达式求值

[leetcode224和227有类似题目，但是不够。](https://blog.csdn.net/VonSdite/article/details/77428828)

思路：

只需要将表达式化为二叉树的后缀表达式即可，有了后缀表达式，就比较简单了。后缀表达式是能够唯一确定表达式树的。后序遍历表达式树即可。用栈对后缀表达式进行处理也可以的。主要还是需要将字符串表达式化为后缀表达式。

