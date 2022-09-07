---
title: "Mysql Upgrade"
date: 2019-08-27T17:47:35+08:00
# draft: true
tags: ["mysql5.7", "upgrade"]
categories: ["mysql5.7", "upgrade"]
---

#  centos7 升级mysql5.6->5.7

# 1. Create a backup of the original MySQL data

```
cp /var/lib/mysql /var/lib/mysql.original
```

#### 2. Download the MySQL 5.7 RPM

```
// mysql80-community-release-el7-3.noarch.rpm，里面包含了 8，5.7，5.6 等多个版本，默认有效的是 8 的版本
wget http://repo.mysql.com/mysql57-community-release-el7.rpm
```

#### 3. Remove the MySQL-Community RPM that contains MySQL 5.6

```
yum remove mysql-community-release
```

#### 4. Install the MySQL 5.7 RPM(安装 MySQL 源)

```
可以安装自己的下载的文件
# yum install mysql80-community-release-el7-3.noarch.rpm
```

#### 5. 设置源中的 5.7 为有效 

通过以下命令可以查看安装源所支持的所有版本

# yum repolist all | grep mysql
```
mysql-cluster-7.5-community/x86_64 MySQL Cluster 7.5 Community   disabled
mysql-cluster-7.5-community-source MySQL Cluster 7.5 Community - disabled
mysql-cluster-7.6-community/x86_64 MySQL Cluster 7.6 Community   disabled
mysql-cluster-7.6-community-source MySQL Cluster 7.6 Community - disabled
mysql-cluster-8.0-community/x86_64 MySQL Cluster 8.0 Community   disabled
mysql-cluster-8.0-community-source MySQL Cluster 8.0 Community - disabled
mysql-connectors-community/x86_64  MySQL Connectors Community    enabled:    108
mysql-connectors-community-source  MySQL Connectors Community -  disabled
mysql-tools-community/x86_64       MySQL Tools Community         enabled:   
```



默认是 mysql80-community 有效，使 5.7 有效的方法是执行下面两条命令：

```
# yum-config-manager --disable mysql80-community

# yum-config-manager --enable mysql57-community
```

#### 6. Update the MySQL Repository to 5.7

停掉 MySQL 服务

```linux
# systemctl stop mysqld
```

升级 MySQL

```
yum update mysql
```

升级完之后重新启动 MySQL

```linux
systemctl start mysqld
```

可以进入MySQL客户端，发现版本已经更新了，最后还需要退出客户端，再执行以下命令对数据库表进行升级

```linux
mysql_upgrade -u root -p
```

执行完毕之后就可以重启MySQL服务，完成升级

```
# systemctl restart mysqld
```

# pass

robertma

123abc!@#ABC

# 参考

- https://blog.csdn.net/buildcourage/article/details/90181513
- https://linuxresolved.com/upgrade-mysql-5-6-mysql-5-7-centos/
- https://docs.mattermost.com/install/install-rhel-7.html