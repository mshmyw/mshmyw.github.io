---
title: "Gfw"
date: 2020-01-12T21:31:24+08:00
draft: false
categories: [""]
series: [""]
---

# [翻墙原理](https://superxlcr.github.io/2018/07/01/%E4%B8%8A%E7%BD%91%E9%99%90%E5%88%B6%E5%92%8C%E7%BF%BB%E5%A2%99%E5%9F%BA%E6%9C%AC%E5%8E%9F%E7%90%86/)

1 GFW[封锁原理](https://medium.com/@thomas_summon/%E6%B5%85%E8%B0%88vpn-vps-proxy%E4%BB%A5%E5%8F%8Ashadowsocks%E4%B9%8B%E9%97%B4%E7%9A%84%E8%81%94%E7%B3%BB%E5%92%8C%E5%8C%BA%E5%88%AB-b0198f92db1b)

Dns劫持

**ip封锁**

dns劫持之后，GFW引入了ip封锁，直接锁住了访问目标网站的去路，用户发往被封锁ip的任何数据都会被墙截断。这个时候，依靠类似于修改Hosts文件这种低成本方法突破封锁就显得有些天方夜谭了。那么，解决办法是什么呢？答案是：在第三方架设翻墙服务器，中转与目标服务器间的来往流量。目前为止，GFW采用的是黑名单模式，像Google、Facebook这种在黑名单上的网站的ip无法访问，而不在黑名单上的第三方不记名ip可以。于是，一切就很明朗了，我们目前几乎所有的翻墙手段都是基于上述原理实现的，vpn是，shadowsocks是，还有一些比较冷门的（比如v2ray）同样如此，只不过它们的技术细节不同（这个我们不会深入）。

2 **vpn**

最广泛且知名的是：openvpn

是一种加密通讯技术。

vpn是一种加密通讯技术，它被设计出来的目的是数据传输安全和[网络匿名](https://zh.wikipedia.org/wiki/匿名)。

既然不是为翻墙而生，那从翻墙的角度上讲，vpn协议就存在诸多问题。最严重的一个就是流量特征过于明显。墙目前已经能够精确识别绝大部分vpn协议的流量特征并给予封锁，所以，vpn这种翻墙方式基本已经废了。

3 **proxy**

Proxy（代理）又分为正向代理和反向代理。翻墙所用的代理都是正向代理。反向代理的作用主要是为服务器做缓存和负载均衡

## 正向代理

正向代理主要有HTTP、HTTP over TLS(HTTPS)、Socks、Socks over TLS几种。其中，HTTP和Socks无法用于翻墙，HTTPS和Socks over TLS可以用于翻墙。不过，Socks over TLS几乎没人用

Proxy的历史同样早于GFW，它最早被设计出来的目的当然也不是翻墙。正向代理最主要的目的和vpn差不多，都是用于匿名，但HTTP和Socks不能加密，只能匿名，HTTPS既可以匿名，也可以用于加密通信。

理论上讲，HTTPS代理无论是安全性，还是在隐匿性，都要比目前最为流行的shadowsocks好。事实上，在所有已知的翻墙协议中，无论是vpn协议，还是代理协议，它应该都是最好的。v2ray的vmess over tls也许能和HTTPS代理媲美。但v2ray存在的时间较短、使用者较少、社区也没有HTTPS代理活跃（从全球范围上看），故而，相比于HTTPS代理，vmess协议潜在的安全漏洞可能要多。

当然，HTTPS代理也有它的缺点，其中最大的缺点就是配置复杂。即便能用默认参数就用默认参数，用户自己只作最低限度的配置，对新手而言，这也是一个无比痛苦的过程。更别说，想要正常使用HTTPS代理，你还要购买域名和证书这些，非常麻烦。所以，即便是在shadowsocks出现之前，HTTPS代理也没在大陆流行起来。这也是造成v2ray的小众的主要原因之一（另一个是用户没有从shadowsocks迁移到v2ray的动力），它的配置同样相当复杂。除此之外，HTTPS代理只能转发tcp流量，对udp无能为力。



[各个代理协议对比](https://medium.com/@Blankwonder/%E5%90%84%E7%A7%8D%E5%8A%A0%E5%AF%86%E4%BB%A3%E7%90%86%E5%8D%8F%E8%AE%AE%E7%9A%84%E7%AE%80%E5%8D%95%E5%AF%B9%E6%AF%94-1ed52bf7a803)

目前我们常用的加密代理有协议有 HTTPS，SOCKS5-TLS 和 shadowsocks

以上协议都是基于 TCP 的代理协议，代理协议（Proxy Procotol）与 VPN 不同，仅可被用于通过代理服务器转发 TCP 连接（shadowsocks 支持代理 UDP），而 VPN 可被用于 IP 层上的所有协议，如 TCP、UDP、ICMP 等。所以在使用代理时，ping 等 ICMP 应用是不可以被代理的。

然后简单解释一下什么是 TLS，TLS 又名 SSL，是针对数据流的安全传输协议。简单来说，一个 TCP 链接，把其中原本要传输的数据，按照 TLS 协议去进行加密传输，那么即可保证其中传输的数据安全。这个安全至少体现在以下几个方面：

1. 数据被加密，任何可以截取到 TCP 数据流的人，无法解密出原始数据；
2. 数据不可被篡改，一旦篡改会导致解密失败，连接断开；
3. 服务器身份验证，基于 X509 的证书体系去确认目标服务器是否为真实的服务器。



4 代码

https://shadowsocks.org/en/index.html

https://github.com/shadowsocks



OPENVPN Tunnelblick

TunnelBlick不过是openvpn客户端而已

# [OpenVPN：链中的自签名证书](http://www.voidcn.com/article/p-bpzsheuo-btw.html)



验证：

```
chuixueximen @ robert in /Library/Application Support/Tunnelblick/Users/chuixueximen/easyops-gz.tblk/Contents/Resources [23:04:30]
$ ls
ca.crt       config.ovpn  robertma.crt robertma.key ta.key

chuixueximen @ robert in /Library/Application Support/Tunnelblick/Users/chuixueximen/easyops-gz.tblk/Contents/Resources [23:04:30]
$ sudo openssl verify -CAfile ca.crt robertma.crt
```

# [openvpn](http://zhangzr.com/2018/08/31/openvpn/)安装与配置

基础知识：

Q:使用PKI而非静态秘钥

使用PKI允许一次使用多个客户端，每个客户端都有自己的密钥。服务器不必具有客户端的任何特殊知识。OpenVPN只需要提供我们即将设置的OpenVPN CA签署的证书。反之，客户端也会验证服务器的证书

Q:什么是Certificate Authority(CA)？

你可能在应用中遇到过TLS网站证书，通常证书在WEB上下文中有两个作用

1. 加密浏览器与服务器之间的数据
2. 确保流览器连接到目标网站



## 都包括哪个密钥文件

### Key文件（*.key）

这个是应该保密的私钥文件。只有所有者才需要使用私钥，所以它不应该在随意丢放。它可以用来代表其的所有者进行加密、解密和签名文件。

### 证书文件（*.crt）

这是个可以公开使用的公钥文件。证书文件只能用于对私有密钥所有者签名的文件进行加密或验证，因此可以广泛共享。在Openvpn上下文中，证书文件用于验证Openvpn服务器本身的身份以及连接客户端的标识。由于这引动证书是由我们信任的CA签署的，双方都会信任它。

### 证书签名请求文件(*.csr)

CA证书不需要客户端的私钥来生成，它需要来自客户端的CSR一完成，CSR由客户端签名，因此CA信任它是合法的请求并返回签名的证书文件。在购买SSL证书时，CSR的使用更为常见。在服务器上生成CSR，并将其提供给SSL供应商，然后它们将证书文件返回给您，然后将证书文件安装到服务器上。



[ubuntu下openvpn安装](https://zhaijiahui.github.io/2019/05/09/openvpn%E6%9C%8D%E5%8A%A1%E7%AB%AF%E5%AE%89%E8%A3%85/)



**PKI密码机制**



# opnVPN

虚拟网卡是使用网络底层编程技术实现的一个驱动软件，安装后在主机上多出现一个网卡，可以像其它网卡一样进行配置。服务程序可以在应用层打开虚拟网卡，如果应用软件（如IE）向虚拟网卡发送数据，则服务程序可以读取到该数据，如果服务程序写合适的数据到虚拟网卡，应用软件也可以接收得到。虚拟网卡在很多的操作系统下都有相应的实现，这也是OpenVpn能够跨平台一个很重要的理由

如果用户访问一个远程的虚拟地址（属于虚拟网卡配用的地址系列，区别于真实地址），则操作系统会通过路由机制将 **数据包（TUN模式）或数据帧（TAP模式）** 发送到虚拟网卡上，服务程序接收该数据并进行相应的处理后，通过SOCKET从外网上发送出去，远程服务程序通过SOCKET从外网上接收数据，并进行相应的处理后，发送给虚拟网卡，则应用软件可以接收到，完成了一个单向传输的过程

OpenVPN所有的通信都 **基于一个单一的IP端口** ，默认使用UDP协议通讯，同时TCP也被支持。OpenVPN连接能通过大多数的代理服务器，并且能够在NAT的环境中很好地工作。服务端具有向客户端“推送”某些网络配置信息的功能，这些信息包括：IP地址、路由设置等。OpenVPN提供了两种虚拟网络接口：通用Tun/Tap驱动，通过它们，可以建立三层IP隧道，或者虚拟二层以太网，后者可以传送任何类型的二层以太网络数据。传送的数据可通过LZO算法压缩。IANA（Internet Assigned Numbers Authority）指定给OpenVPN的官方端口为1194。OpenVPN 2.0以后版本每个进程可以同时管理数个并发的隧道

OpenVPN使用通用网络协议（TCP与UDP）的特点使它成为IPsec等协议的理想替代，尤其是在ISP（Internet service provider）过滤某些特定VPN协议的情况下。 在选择协议时候，需要注意2个加密隧道之间的网络状况，如有高延迟或者丢包较多的情况下，请选择TCP协议作为底层协议，UDP协议由于存在无连接和重传机制，导致要隧道上层的协议进行重传，效率非常低下



# 怎么共享VPN连接？

假如mac A通过tunnelblick 连接 到 专有办公网络 ，那么与A处于同一个局域网内的win10 B能与其共享vpn连接吗？可以的话如何去做？