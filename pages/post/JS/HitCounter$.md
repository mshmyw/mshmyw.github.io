---
title: "Reactjs"
date: 2019-08-20T18:26:52+08:00
# draft: true
tags: ["hit Counter", "UV", "PV"]
categories: ["hit Counter", "UV", "PV"]
---

# [HTTP Referer 教程](http://www.ruanyifeng.com/blog/2019/06/http-referer.html)

HTTP 协议在请求（request）的头信息里面，设计了一个`Referer`字段，给出"引荐网页"的 URL。

这个字段是可选的。客户端发送请求的时候，自主决定是否加上该字段。

主要是以下三种场景，会发送`Referer`字段。

（1）用户点击网页上的链接。

（2）用户发送表单。

（3）网页加载静态资源，比如加载图片、脚本、样式。


上面这些场景，浏览器都会将当前网址作为`Referer`字段，放在 HTTP 请求的头信息发送。

## 三、Referer 的作用

`Referer`字段实际上告诉了服务器，用户在访问当前资源之前的位置。这往往可以用来用户跟踪。

## Referrer Policy 的值

W3C 为此制定了更强大的 [Referrer Policy](https://w3c.github.io/webappsec-referrer-policy/)。

Referrer Policy，用于过滤 Referrer 报头内容，目前是一个候选标准，不过已经有部分浏览器支持该标准



# Cookie

https://javascript.ruanyifeng.com/bom/cookie.html#toc1

https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies

Cookie 是服务器保存在浏览器的一小段文本信息，每个 Cookie 的大小一般不能超过4KB。浏览器每次向服务器发出请求，就会自动附上这段信息。

Cookie 主要用来分辨两个请求是否来自同一个浏览器，以及用来保存一些状态信息。它的常用场合有以下一些。

1 对话（session）管理：保存登录、购物车等需要记录的信息。
2 个性化：保存用户的偏好，比如网页的字体大小、背景色等等。
3 追踪：记录和分析用户行为