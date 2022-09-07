# vultr

https://www.flyzy2005.com/fan-qiang/shadowsocks/ss-clients-download/?utm_source=textarea.com&utm_medium=textarea.com&utm_campaign=article

https://my.vultr.com/subs/?SUBID=32495112

require: libsodium

测速：http://ping.chinaz.com/hnd-jp-ping.vultr.com

INFO: loading config from /etc/shadowsocks.json
2020-02-03 03:49:08 INFO     loading libcrypto from libcrypto.so.1.1
started
[成功] 安装成功尽情冲浪！
你的服务器地址（IP）： 140.82.17.246 
你的密码            ： 123456 
你的端口            ： 1024 
你的加密方式        ： aes-256-cfb 
欢迎访问flyzy小站   ： https://www.flyzy2005.com 
你的ss链接： ss://YWVzLTI1Ni1jZmI6MTIzNDU2QDE0MC44Mi4xNy4yNDY6MTAyNA== 



# v2ray

install

https://github.com/wulabing/V2Ray_ws-tls_bash_onekey

```
wget -N --no-check-certificate -q -O install.sh "https://raw.githubusercontent.com/wulabing/V2Ray_ws-tls_bash_onekey/master/install.sh" && chmod +x install.sh && bash install.sh
```



2 https://www.v2ex.com/t/603138?p=1

# centos8 install ssr 

使用如下脚本即可

```
dnf install gcc -y # gcc
yum install make -y # make
wget https://download.libsodium.org/libsodium/releases/libsodium-1.0.18-stable.tar.gz
tar -zxf libsodium-1.0.18-stable.tar.gz # libsodium
cd libsodium-stable
./configure --prefix=/usr
make && make check
sudo make install
sudo ldconfig
cd ..
dnf install python2 -y # python2
alternatives --set python /usr/bin/python2

yum -y install git # git
git clone -b master https://github.com/flyzy2005/ss-fly
ss-fly/ss-fly.sh -i 123456 1024 # ssr

firewall-cmd --zone=public --permanent --add-port 1024/tcp
firewall-cmd --reload
firewall-cmd --list-all
```



## gcc

```
dnf install gcc
```

## libsodium

```
wget https://download.libsodium.org/libsodium/releases/libsodium-1.0.18-stable.tar.gz
tar -zxf libsodium-1.0.18-stable.tar.gz
cd libsodium-stable
./configure --prefix=/usr
make && make check
sudo make install
sudo ldconfig

yum install make -y
```

## python2

dnf install python2

alternatives --set python /usr/bin/python2

# git

yum -y install git

git **clone** -b master https:*//github.com/flyzy2005/ss-fly*

ss-fly/ss-fly.sh -i 123456 1024

# firewall

open

```
firewall-cmd --zone=public --permanent --add-port 1024/tcp
firewall-cmd --reload
firewall-cmd --list-all
```



vultr服务重新配置教程：

1 创建新的实例主机：https://xxvps.xyz/219.html

地址：https://my.vultr.com/subs/?SUBID=32930775

用户名和密码： 838722640@qq.com birthday + me + big brother

2 执行相关配置脚本：https://repl.it/@mshmyw/Python-3

脚本中的ip和password要修改为新创建实例的ip和密码，

脚本最终的输出ss:xxxx即为客户端所需要的链接秘钥

3 销毁旧的实例实例主机：https://www.vultrblog.com/vultr-delete-vps/.html（不然它还要继续计费）

