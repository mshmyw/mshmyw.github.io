---
title: "Csrf"
date: 2019-11-23T12:00:24+08:00
draft: false
categories: ["csrf"]
series: ["csrf"]
---

![img](https://pic4.zhimg.com/80/v2-0c63c4193d48b8f42c4a4f53d82330df_hd.jpg)

[csrf：跨站**请求伪造**](https://juejin.im/post/5bc009996fb9a05d0a055192)

https://juejin.im/post/5df5bcea6fb9a016091def69#heading-84

是什么

CSRF实际上是盗用了被害者的身份，以被害者的身份发送恶意请求给服务器

注意：

1 B进行攻击没有直接访问A，而是借助C，所有的操作或请求都是在用户C的浏览器中完成，所以访问A时候，才会一直带有C的cookie信息。

2 Cookie 

**是什么**

是浏览器访问服务器后，服务器传给浏览器的一段数据。

浏览器需要保存这段数据，不得轻易删除

此后每次浏览器访问该服务器，都必须带上这段数据。

**作用**

识别用户身份（类似ID，里面有sessionid）

记录历史

csrf防御

通过 referer、token 或者 验证码 来检测用户提交

对于用户修改删除等操作最好都使用post 操作

避免全站通用的cookie，严格设置cookie的域

注意：

1  **CSRF攻击是源于WEB的隐式身份验证机制！WEB的身份验证机制虽然可以保证一个请求是来自于某个用户的浏览器，但却无法保证该请求是用户批准发送的！**

2 **攻击者并不能通过CSRF攻击来直接获取用户的账户控制权，也不能直接窃取用户的任何信息。他们能做到的，是欺骗用户的浏览器，让其以用户的名义运行操作**

> CSRF攻击过程中，攻击者并没有直接获取受害者的任何身份信息，因为用户的登录信息在自己的浏览器中，攻击者并没有能够存储这份信息，它只是诱骗受害者发出某些请求（比如转账），这些请求是违背用户意愿的，这很类似于现实中别人拿到你的指纹信息去做一些事情，而攻击者并不需要知道你的指纹的具体信息。 这跟密码泄漏之类有本质的不同。

JWT特点

用户将id等信息发送给服务器，由服务器创建JWT，包含头部、负载、签名。服务器创建完发送给客户端，客户端每次访问受限资源带上该字段。服务器收到jwt之后根据header payload signature等校验认证（hash算法运算并比较）用户身份。

JWT 的最大缺点是，由于服务器不保存 session 状态，因此无法在使用过程中废止某个 token，或者更改 token 的权限。也就是说，一旦 JWT 签发了，在到期之前就会始终有效，除非服务器部署额外的逻辑。

JWT 本身包含了认证信息，一旦泄露，任何人都可以获得该令牌的所有权限。为了减少盗用，JWT 的有效期应该设置得比较短。对于一些比较重要的权限，使用时应该再次对用户进行认证。

# 预防 [](https://juejin.im/post/5bc009996fb9a05d0a055192#heading-29)