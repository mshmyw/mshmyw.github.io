---
title: "Tool"
date: 2019-09-25T23:44:16+08:00
# draft: true
tags: ["nginx"]
categories: ["nginx"]
---

# linux nginx

## Nginx如何处理一个请求

Nginx首先选定由哪一个*虚拟主机*来处理请求。假如有如下配置（3个主机端口*:80)

```
server {
    listen      80;
    server_name example.org www.example.org;
    ...
}

server {
    listen      80;
    server_name example.net www.example.net;
    ...
}

server {
    listen      80;
    server_name example.com www.example.com;
    ...
}



```

在这个配置中，nginx仅仅检查请求的“Host”头以决定该请求应由哪个虚拟主机来处理。如果Host头没有匹配任意一个虚拟主机，或者请求中根本没有包含Host头，那nginx会将请求分发到定义在此端口上的默认虚拟主机。在以上配置中，第一个被列出的虚拟主机即nginx的默认虚拟主机——这是nginx的默认行为。

## default_server

而且，可以显式地设置某个主机为默认虚拟主机，即在"`listen`"指令中设置"`default_server`"参数：

```
server {
    listen      80 default_server;
    server_name example.net www.example.net;
    ...
}
```

请注意"`default_server`"是监听端口的属性，而不是主机名的属性。



# http头部Host字段作用

同一个IP也可以设置多个不同站点，那我访问不同的域名都转发到同一IP，怎么区分这些不同的站点呢，就是用的Host字段，如果服务器后台解析出Host但是服务器上找不到相应的站点，那么这个连接很可能会被丢弃，从而报错。



# postgresql 

## install

https://www.postgresql.org/download/linux/redhat/

# 使用

###  创建密码

```
[root@node010-dev data]# su - postgres
-bash-4.2$ psql
psql (11.2)
输入 "help" 来获取帮助信息.
postgres=# \password postgres
```

### 配置监听ip

编辑`/var/lib/pgsql/11/data/postgresql.conf` 文件

将`#listen_addresses = 'localhost'`修改为`listen_addresses='*'` （当然，此处‘*’也可以改为任何你想开放的服务器IP）

### 配置允许登录

默认情况下PostgreSQL不支持密码登录，在登录的时候会有如下报错：

```
# psql -U postgres
# psql: FATAL:  Peer authentication failed for user "postgres"
```

如需支持需要修改配置文件

编辑该文件，将未注释的peer都替换成为md5

```
vim /var/lib/pgsql/11/data/pg_hba.conf
```

重启服务之后即可正常登录数据库



### 配置允许远程登录

在进行了上面的配置之后，是可以进行本地端的登录的，但是在远端使用连接命令，在server端的pg_hba.conf文件末尾添加以下内容：

```
# TYPE DATABASE USER CIDR-ADDRESS METHOD
host    all             all              0.0.0.0/0              md5
```

允许本地登录

```text
# existing entry, allows connections from localhost
host all   all        127.0.0.1/32 md5
```

# 数据库使用

数据库使用首先需要psql -U postgres进入数据后再执行

## 创建用户

创建用户并设置密码：

```
postgres=# create user dbuser with password '123456';
```

## 创建数据库及授权

创建数据库并指定用户

```
create database commento owner dbuser;
```

进行用户授权，将指定数据库的所有权限都赋予dbuser，否则dbuser只能登录控制台，没有任何数据库操作权限。

```
postgres=# grant all privileges on database commento to dbuser;
```



# 解决：The 'Access-Control-Allow-Origin' header contains multiple values'x

错误提示是multiple xxxx，可能是：

为了解决跨域问题，在服务端代码中加了个过滤器，并且在nginx也做了相关配置，故导致设置重复，保留其中一种即可。



# 同源策略

同源策略规定**跨域**之间的脚本是隔离的，一个域的脚本不能访问和操作另外一个域的绝大部分属性和方法。

那么什么叫相同域，什么叫不同的域呢？当两个域具有相同的协议(如http), 相同的端口(如80)，相同的host（如www.example.org)，那么我们就可以认为它们是相同的域。



# Base64编码

Base64的编码则是从二进制转换为字符串。

Base64编码主要用在传输、存储、表示二进制领域，不能算得上加密，只是无法直接看到明文

Base64是一种基于64个可打印字符来表示二进制数据的表示方法

## 为什么要编码

在计算机中任何数据都是按ascii码存储的，而ascii码的128～255之间的值是不可见字符。而在网络上交换数据时，比如说从A地传到B地，往往要经过多个路由设备，由于不同的设备对字符的处理方式有一些不同，这样那些不可见字符就有可能被处理错误，这是不利于传输的。所以就先把数据先做一个Base64编码，统统变成可见字符，这样出错的可能性就大降低了。

## how

> 举一个中文的例子，汉字"严"如何转化成Base64编码？

这里需要注意，汉字本身可以有多种编码，比如gb2312、utf-8、gbk等等，每一种编码的Base64对应值都不一样。下面的例子以utf-8为例。

首先，"严"的utf-8编码为E4B8A5，写成二进制就是三字节的"11100100 10111000 10100101"。将这个24位的二进制字符串，按照第3节中的规则，转换成四组一共32位的二进制值"00111001 00001011 00100010 00100101"，相应的十进制数为57、11、34、37，它们对应的Base64值就为5、L、i、l。

所以，汉字"严"（utf-8编码）的Base64值就是5Lil



# Kafka

Broker: 消息中间件处理节点，一个kafka节点就是一个Broker,多一个Broker可以组成一个kafka集群。

Topic: 主题。Kafka根据Topic对消息进行归类，发布到Kafka集群的每条消息都要指定一个Topic.



### API Gateway

在没有API网关作为统一出口的情况下，需要调用方自己组合各种服务，而且容易让调用方感知后端各种服务的存在，各个需要各个做很多相同的工作。

一般也会把路由，安全，限流，缓存，日志，监控，重试，熔断等都放到 API 网关来做，然后服务层就完全脱离这些东西，纯粹的做业务，也能够很好的保证业务代码的干净，不用关心安全，压力等方面的问题。