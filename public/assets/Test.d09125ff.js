import{c as u}from"./index.89b4627b.js";const a={},s="wrapper";function l({components:t,...e}){return u(s,{...a,...e,components:t,mdxType:"MDXLayout"},u("h1",null,"vultr"),u("p",null,u("a",{parentName:"p",href:"https://www.flyzy2005.com/fan-qiang/shadowsocks/ss-clients-download/?utm_source=textarea.com&utm_medium=textarea.com&utm_campaign=article"},"https://www.flyzy2005.com/fan-qiang/shadowsocks/ss-clients-download/?utm_source=textarea.com&utm_medium=textarea.com&utm_campaign=article")),u("p",null,u("a",{parentName:"p",href:"https://my.vultr.com/subs/?SUBID=32495112"},"https://my.vultr.com/subs/?SUBID=32495112")),u("p",null,"require: libsodium"),u("p",null,"\u6D4B\u901F\uFF1A",u("a",{parentName:"p",href:"http://ping.chinaz.com/hnd-jp-ping.vultr.com"},"http://ping.chinaz.com/hnd-jp-ping.vultr.com")),u("p",null,`INFO: loading config from /etc/shadowsocks.json
2020-02-03 03:49:08 INFO     loading libcrypto from libcrypto.so.1.1
started
`,"[\u6210\u529F]",` \u5B89\u88C5\u6210\u529F\u5C3D\u60C5\u51B2\u6D6A\uFF01
\u4F60\u7684\u670D\u52A1\u5668\u5730\u5740\uFF08IP\uFF09\uFF1A 140.82.17.246
\u4F60\u7684\u5BC6\u7801            \uFF1A 123456
\u4F60\u7684\u7AEF\u53E3            \uFF1A 1024
\u4F60\u7684\u52A0\u5BC6\u65B9\u5F0F        \uFF1A aes-256-cfb
\u6B22\u8FCE\u8BBF\u95EEflyzy\u5C0F\u7AD9   \uFF1A `,u("a",{parentName:"p",href:"https://www.flyzy2005.com"},"https://www.flyzy2005.com"),`
\u4F60\u7684ss\u94FE\u63A5\uFF1A ss://YWVzLTI1Ni1jZmI6MTIzNDU2QDE0MC44Mi4xNy4yNDY6MTAyNA== `),u("h1",null,"v2ray"),u("p",null,"install"),u("p",null,u("a",{parentName:"p",href:"https://github.com/wulabing/V2Ray_ws-tls_bash_onekey"},"https://github.com/wulabing/V2Ray_ws-tls_bash_onekey")),u("pre",null,u("code",{parentName:"pre"},`wget -N --no-check-certificate -q -O install.sh "https://raw.githubusercontent.com/wulabing/V2Ray_ws-tls_bash_onekey/master/install.sh" && chmod +x install.sh && bash install.sh
`)),u("p",null,"2 ",u("a",{parentName:"p",href:"https://www.v2ex.com/t/603138?p=1"},"https://www.v2ex.com/t/603138?p=1")),u("h1",null,"centos8 install ssr"),u("p",null,"\u4F7F\u7528\u5982\u4E0B\u811A\u672C\u5373\u53EF"),u("pre",null,u("code",{parentName:"pre"},`dnf install gcc -y # gcc
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
`)),u("h2",null,"gcc"),u("pre",null,u("code",{parentName:"pre"},`dnf install gcc
`)),u("h2",null,"libsodium"),u("pre",null,u("code",{parentName:"pre"},`wget https://download.libsodium.org/libsodium/releases/libsodium-1.0.18-stable.tar.gz
tar -zxf libsodium-1.0.18-stable.tar.gz
cd libsodium-stable
./configure --prefix=/usr
make && make check
sudo make install
sudo ldconfig

yum install make -y
`)),u("h2",null,"python2"),u("p",null,"dnf install python2"),u("p",null,"alternatives --set python /usr/bin/python2"),u("h1",null,"git"),u("p",null,"yum -y install git"),u("p",null,"git ",u("strong",{parentName:"p"},"clone")," -b master https:",u("em",{parentName:"p"},"//github.com/flyzy2005/ss-fly")),u("p",null,"ss-fly/ss-fly.sh -i 123456 1024"),u("h1",null,"firewall"),u("p",null,"open"),u("pre",null,u("code",{parentName:"pre"},`firewall-cmd --zone=public --permanent --add-port 1024/tcp
firewall-cmd --reload
firewall-cmd --list-all
`)),u("p",null,"vultr\u670D\u52A1\u91CD\u65B0\u914D\u7F6E\u6559\u7A0B\uFF1A"),u("p",null,"1 \u521B\u5EFA\u65B0\u7684\u5B9E\u4F8B\u4E3B\u673A\uFF1A",u("a",{parentName:"p",href:"https://xxvps.xyz/219.html"},"https://xxvps.xyz/219.html")),u("p",null,"\u5730\u5740\uFF1A",u("a",{parentName:"p",href:"https://my.vultr.com/subs/?SUBID=32930775"},"https://my.vultr.com/subs/?SUBID=32930775")),u("p",null,"\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF1A ",u("a",{parentName:"p",href:"mailto:838722640@qq.com"},"838722640@qq.com")," birthday + me + big brother"),u("p",null,"2 \u6267\u884C\u76F8\u5173\u914D\u7F6E\u811A\u672C\uFF1A",u("a",{parentName:"p",href:"https://repl.it/@mshmyw/Python-3"},"https://repl.it/@mshmyw/Python-3")),u("p",null,"\u811A\u672C\u4E2D\u7684ip\u548Cpassword\u8981\u4FEE\u6539\u4E3A\u65B0\u521B\u5EFA\u5B9E\u4F8B\u7684ip\u548C\u5BC6\u7801\uFF0C"),u("p",null,"\u811A\u672C\u6700\u7EC8\u7684\u8F93\u51FAss:xxxx\u5373\u4E3A\u5BA2\u6237\u7AEF\u6240\u9700\u8981\u7684\u94FE\u63A5\u79D8\u94A5"),u("p",null,"3 \u9500\u6BC1\u65E7\u7684\u5B9E\u4F8B\u5B9E\u4F8B\u4E3B\u673A\uFF1A",u("a",{parentName:"p",href:"https://www.vultrblog.com/vultr-delete-vps/.html%EF%BC%88%E4%B8%8D%E7%84%B6%E5%AE%83%E8%BF%98%E8%A6%81%E7%BB%A7%E7%BB%AD%E8%AE%A1%E8%B4%B9%EF%BC%89"},"https://www.vultrblog.com/vultr-delete-vps/.html\uFF08\u4E0D\u7136\u5B83\u8FD8\u8981\u7EE7\u7EED\u8BA1\u8D39\uFF09")))}l.isMDXComponent=!0;var n=Object.freeze(Object.defineProperty({__proto__:null,default:l},Symbol.toStringTag,{value:"Module"}));const p={};p.main=n;export{p as default};
