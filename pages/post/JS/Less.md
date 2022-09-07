---
title: "Less"
date: 2019-08-13T22:51:59+08:00
# draft: true
tags: ['CSS', 'LESS']
categories: ['CSS', 'LESS']
---



# React 和 css 又爱又恨的组合

http://hkongm.github.io/2018/07/25/ReactStyleTypes/



# CSS 动画

# [CSS 定位][1]



## position: `relative` VS `absolute`

## relative

仍然遵循文档的流式结构（flow of the document),但是now [left](https://css-tricks.com/almanac/properties/l/left/)/[right](https://css-tricks.com/almanac/properties/r/right/)/[top](https://css-tricks.com/almanac/properties/t/top/)/[bottom](https://css-tricks.com/almanac/properties/b/bottom/)/[z-index](https://css-tricks.com/almanac/properties/z/z-index/) 将起作用，效果就是按照不同的设置（比如left)产生相对于原始位置的偏移。

## absolute

不再遵循文档流式结构，其他元素假装它不存在。除此之外，其他的位置属性仍然发生作用。

left/bottom等作用于子元素时，其响应会相对于文档全局，而非父元素，要想相对于父元素则父元素需设定position为relative

故absolute作用与子元素可产生蒙版效果。

[1]:  https://css-tricks.com/almanac/properties/p/position/ css-tricks



# scrollTop VS scrollHeight

## scrollTop 

- 可读可写
- 是视口隐藏部分矩形的垂直高度，即被隐藏在内容区域上方的像素数
- 元素未滚动时，scrollTop的值为0
- 可以设置或者获取一个元素距离他容器顶部的像素距离

## scrollHeight 

- 只读

- 是视口垂直总高度，包括overflow属性导致溢出而无法展示在网页的不可见部分

  

## clientHeight

- 是视口可见垂直高度,表示页面的可视区域的尺寸



如果元素滚动到了最底部，则下式成立

```
element.scrollHeight - element.scrollTop === element.clientHeight
```



# iframe 样式

```
.iframe-in-next {
  .searchable-sidebar {
    top: 74px !important;
    left: 23px;
    display: block !important;

    .sidebar-heading {
      display: none;
    }

    .custom-search {
      margin-top: 25px;
    }
  }

  .searchable-sidebar-content {
    margin-left: 260px;
    .page-title-container {
      margin-left: -260px;
    }
  }
}

```



# 强大的CSS效果!

>  https://juejin.im/post/5d9ec8b0518825651b1dffa3



# 前端设计

https://smohan.net/lab/

https://bennettfeely.com/clippy/



## 常用

display

position:[CSS中position属性( absolute | relative | static | fixed )详解]( https://blog.csdn.net/chen_zw/article/details/8741365)



## 你未必知道的[CSS](https://juejin.im/post/5d9ec8b0518825651b1dffa3)



# grid 布局

# CSS Grid [网格布局教程](https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)

# 学懂grid布局：这篇就够了(译)[](https://zhuanlan.zhihu.com/p/60883744)



# CSS3[新特性](https://juejin.im/entry/595f1e3c5188250d914dd53c)



## 元素高度和宽度

el.offsetHeight = height + padding + border（滚动条是在边框内的，自然也包括在内）
el.clientHeight = 可视化看到的高度 (就是content的高度)
el.scrollHeight = 整个元素的高度 （ 包括了clientHeight看不到的那部分，一般就是你css设置的元素高度）



```
如下div块元素 el：
求其各种宽、高
+--------------------------------------------+
|                                            |
|    +--------------------------------+      |
|    |                                |      |
|    |   +---------------------+      |      |
|    |   |                     |      |      |
|    |   |  +--------------+   |      |      |
|    |   |  |              |   |      |      |
|    |   |  |              |   |      |      |
|    |   |  |   height     |   |      |      |
|    |   |  |   200px      |   |      |      |
|    |   |  |              |   |      |      |
|    |   |  +--------------+   |      |      |
|    |   |     padding         |      |      |
|    |   |     10px            |      |      |
|    |   +---------------------+      |      |
|    |          border                |      |
|    |          5px                   |      |
|    +--------------------------------+      |
|               margin                       |
|               8px                          |
|                                            |
+--------------------------------------------+

xx = Height | Width

el.clientHeight = 220px
el.offsetHeight = el.clientHeight + border高度 = 230px
el.scrollHeight = el.clientHeight + 溢出Height
```



> 1. clientHeight和clientWidth用于描述元素内尺寸，是指 元素内容+内边距 大小，不包括边框（IE下实际包括）、外边距、滚动条部分
>
> 2. offsetHeight和offsetWidth用于描述元素外尺寸，是指 元素内容+内边距+边框，不包括外边距和滚动条部分
> 3. scrollWidth和scrollHeight是元素的内容区域加上内边距加上溢出尺寸，当内容正好和内容区域匹配没有溢出时，这些属性与clientWidth和clientHeight相等



