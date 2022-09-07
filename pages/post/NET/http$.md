---
title: "Http"
date: 2019-11-29T23:37:35+08:00
draft: false
categories: [""]
series: [""]
---

# [QUIC](https://zhuanlan.zhihu.com/p/32553477)

Quic 相比现在广泛应用的 http2+tcp+tls 协议有如下优势 [2]：

1. 减少了 TCP 三次握手及 TLS 握手时间。
2. 改进的拥塞控制。
3. 避免队头阻塞的多路复用。
4. 连接迁移。
5. 前向冗余纠错。

# http 1.0 1.1 [2.0](https://juejin.im/entry/5981c5df518825359a2b9476)

**头部**

Origin： 有一个字段是`Origin`，表示该请求的请求源（origin），即发自哪个域名。

## http1.1

**host头部处理**

但随着虚拟主机技术的发展，在一台物理服务器上可以存在多个虚拟主机（Multi-homed Web Servers），HTTP1.1的请求消息和响应消息都应支持Host头域，且请求消息中如果没有Host头域会报告一个错误

**长连接**

HTTP 1.1支持长连接（PersistentConnection）和请求的流水线（Pipelining）处理，在一个TCP连接上可以传送多个HTTP请求和响应，减少了建立和关闭连接的消耗和延迟，在HTTP1.1中默认开启Connection： keep-alive，一定程度上弥补了HTTP1.0每次请求都要创建连接的缺点。

**http2**

头部压缩

服务器推送

多路复用

# http 头部

content-length作用以及什么时候会不存在？

Content-Length用于描述HTTP消息实体的传输长度the transfer-length of the message-body。在HTTP协议中，消息实体长度和消息实体的传输长度是有区别，比如说gzip压缩下，消息实体长度是压缩前的长度，消息实体 的传输长度是gzip压缩后的长度。

如果head中有Content-Length，那么这个Content-Length既表示实体长度，又表示传输长度。如果实体长度和传输 长度不相等(比如说设置了Transfer-Encoding)，那么则不能设置Content-Length。如果设置了Transfer- Encoding，那么Content-Length将被忽视”。这句话翻译的优点饶，其实关键就一点：有了Transfer-Encoding，则不能 有Content-Length。

其实后面几条几乎可以忽视，简单总结后如下：

　　1、Content-Length如果存在并且有效的话，则必须和消息内容的传输长度完全一致。(经过测试，如果过短则会截断，过长则会导致超时。)

　　2、如果存在Transfer-Encoding(重点是chunked)，则在header中不能有Content-Length，有也会被忽视。

　　3、如果采用短连接，则直接可以通过服务器关闭连接来确定消息的传输长度。(这个很容易懂)

　　结合HTTP协议其他的特点，比如说Http1.1之前的不支持keep alive。那么可以得出以下结论：

　　1、在Http 1.0及之前版本中，content-length字段可有可无。

　　2、在http1.1及之后版本。如果是keep alive，则content-length和chunk必然是二选一。若是非keep alive，则和http1.0一样。content-length可有可无。

# HTTP 协议中的 Transfer-[Encoding](https://imququ.com/post/transfer-encoding-header-in-http.html)

# http 状态码



## http 与[https](https://www.jianshu.com/p/52d86558ca57)

- 数据加密 传输内容进行混淆
- 身份验证 通信双方验证对方的身份真实性
- 数据完整性保护 检测传输的内容是否被篡改或伪造

# SSL[协议](https://www.ruanyifeng.com/blog/2014/02/ssl_tls.html)



# [https](https://juejin.im/post/5c6e5803f265da2dc0065437) 

 [**1过程**](https://juejin.im/post/5a4f4884518825732b19a3ce)

![img](https://user-gold-cdn.xitu.io/2018/1/5/160c5b10d3f27e00?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

大致三个阶段：
1 TCP握手

2 SSL握手

3 数据加密传输

注意：随机的对称秘钥也只是产生了一次，不是每次传输都进行了改变。



[**2 https缺点**](https://klionsec.github.io/2017/07/31/https-learn/#menu)

不过,以上方式存在明显的中间人问题:

```
假设,此时在客户端和服务器之间存在一个中间人,这个中间人只需要把原本双方通信互发的公钥,换成自己的公钥,这样中间人就可以轻松解密通信双方所发送的所有数据
```

https也并非100%安全，所以说：没有绝对的安全



# [HTTP趣谈]origin,referer和host区别https://www.jianshu.com/p/1f9c71850299



request header里面有三个属性会涉及请求源信息

host origin referer

#### 1. Host

描述请求将被发送的目的地，包括，且仅仅包括**域名和端口号**。
 在任何类型请求中，request都会包含此header信息。

#### 2. Origin

用来说明请求从哪里发起的，包括，且仅仅包括**协议和域名**。
 这个参数一般只存在于CORS跨域请求中，可以看到response有对应的header：`Access-Control-Allow-Origin`。

#### 3. Referer

告知服务器请求的原始资源的URI，其用于所有类型的请求，并且包括：**协议+域名+查询参数（注意，不包含锚点信息）**。

因为原始的URI中的查询参数可能包含ID或密码等敏感信息，如果写入referer，则可能导致信息泄露。



[**http缓存机制**](https://juejin.im/entry/5ad86c16f265da505a77dca4)✨✨✨✨✨

浏览器的缓存机制也就是我们说的HTTP缓存机制，其机制是根据HTTP报文的缓存标识进行的

通用信息头指的是请求和响应报文都支持的头域，分别为Cache-Control、Connection、Date、Pragma、Transfer-Encoding、Upgrade、Via；实体头则是实体信息的实体头域，分别为Allow、Content-Base、Content-Encoding、Content-Language、Content-Length、Content-Location、Content-MD5、Content-Range、Content-Type、Etag、Expires、Last-Modified、extension-header。这里只是为了方便理解，将通用信息头，响应头/请求头，实体头都归为了HTTP头。

![img](https://user-gold-cdn.xitu.io/2018/4/19/162db6359673e7d0?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

- 浏览器每次发起请求，都会先在浏览器缓存中查找该请求的结果以及缓存标识

- 浏览器每次拿到返回的请求结果都会将该结果和缓存标识存入浏览器缓存中

  

## 强制缓存

强制缓存就是向浏览器缓存查找该请求结果，并根据该结果的缓存规则来决定是否使用该缓存结果的过程，强制缓存的情况主要有三种(暂不分析协商缓存过程):

1 不存在该缓存结果和缓存标识，强制缓存失效，则直接向服务器发起请求（跟第一次发起请求一致）

2 存在该缓存结果和缓存标识，但该结果已失效，强制缓存失效，则使用**协商缓存**

3 存在该缓存结果和缓存标识，且该结果尚未失效，强制缓存生效，直接返回该结果

> 那么强制缓存的缓存规则是什么？

当浏览器向服务器发起请求时，服务器会将缓存规则放入HTTP响应报文的HTTP头中和请求结果一起返回给浏览器，控制强制缓存的字段分别是Expires和Cache-Control，其中Cache-Control优先级比Expires高。

##### Expires

Expires是HTTP/1.0控制网页缓存的字段，其值为服务器返回该请求结果缓存的到期时间，即再次发起该请求时，如果客户端的时间小于Expires的值时，直接使用缓存结果。

> Expires是HTTP/1.0的字段，但是现在浏览器默认使用的是HTTP/1.1，那么在HTTP/1.1中网页缓存还是否由Expires控制？

到了HTTP/1.1，Expire已经被Cache-Control替代，原因在于Expires控制缓存的原理是使用客户端的时间与服务端返回的时间做对比，那么如果客户端与服务端的时间因为某些原因（例如时区不同；客户端和服务端有一方的时间不准确）发生误差，那么强制缓存则会直接失效，这样的话强制缓存的存在则毫无意义，那么Cache-Control又是如何控制的呢？

##### Cache-Control

在HTTP/1.1中，Cache-Control是最重要的规则，主要用于控制网页缓存，主要取值为：

- public：所有内容都将被缓存（客户端和代理服务器都可缓存）
- private：所有内容只有客户端可以缓存，Cache-Control的默认取值
- no-cache：客户端缓存内容，但是是否使用缓存则需要经过协商缓存来验证决定
- no-store：所有内容都不会被缓存，即不使用强制缓存，也不使用协商缓存
- max-age=xxx (xxx is numeric)：缓存内容将在xxx秒后失效

由于Cache-Control的优先级比expires，那么直接根据Cache-Control的值进行缓存，意思就是说在600秒内再次发起该请求，则会直接使用缓存结果，强制缓存生效。

注：在无法确定客户端的时间是否与服务端的时间同步的情况下，Cache-Control相比于expires是更好的选择，所以同时存在时，只有Cache-Control生效。

> 浏览器的缓存存放在哪里，如何在浏览器中判断强制缓存是否生效？

这里我们以博客的请求为例，状态码为灰色的请求则代表使用了强制缓存，请求对应的Size值则代表该缓存存放的位置，分别为from memory cache 和 from disk cache。

> 那么from memory cache 和 from disk cache又分别代表的是什么呢？什么时候会使用from disk cache，什么时候会使用from memory cache呢？

from memory cache代表使用内存中的缓存，from disk cache则代表使用的是硬盘中的缓存，浏览器读取缓存的顺序为memory –> disk。

虽然我已经直接把结论说出来了，但是相信有不少人对此不能理解，那么接下来我们一起详细分析一下缓存读取问题，这里仍让以我的博客为例进行分析：

访问https://heyingye.github.io/ –> 200 –> 关闭博客的标签页 –> 重新打开https://heyingye.github.io/ –> 200(from disk cache) –> 刷新 –> 200(from memory cache)

**协商缓存**(上述第2步的过程)

协商缓存就是强制缓存失效后，浏览器携带缓存标识向服务器发起请求，由服务器根据缓存标识决定是否使用缓存的过程，主要有以下两种情况：

1 协商缓存生效，返回304

2 协商缓存失效，返回200和请求结果结果



**总结**

强制缓存优先于协商缓存进行，若强制缓存(Expires和Cache-Control)生效则直接使用缓存，若不生效则进行协商缓存(Last-Modified / If-Modified-Since和Etag / If-None-Match)，协商缓存由服务器决定是否使用缓存，若协商缓存失效，那么代表该请求的缓存失效，重新获取请求结果，再存入浏览器缓存中；生效则返回304，继续使用缓存



[对浏览器的缓存机制来做个简要的总结](https://juejin.im/post/5df5bcea6fb9a016091def69)

首先通过 `Cache-Control` 验证强缓存是否可用

- 如果强缓存可用，直接使用

- 否则进入协商缓存，即发送 HTTP 请求，服务器通过请求头中的

  ```
  Last-Modified
  ```

  或者

  ```
  ETag
  ```

  字段检查资源是否更新

  - 若资源更新，返回资源和200状态码
  - 否则，返回304，告诉浏览器直接从缓存获取资源



## 浏览器本地存储（不是缓存）

浏览器的本地存储主要分为`Cookie`、`WebStorage`和`IndexedDB`, 其中`WebStorage`又可以分为`localStorage`和`sessionStorage`。

