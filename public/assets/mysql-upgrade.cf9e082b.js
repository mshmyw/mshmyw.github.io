import{c as u}from"./index.89b4627b.js";const m={},n="wrapper";function e({components:l,...t}){return u(n,{...m,...t,components:l,mdxType:"MDXLayout"},u("h1",null,"centos7 \u5347\u7EA7mysql5.6->5.7"),u("h1",null,"1. Create a backup of the original MySQL data"),u("pre",null,u("code",{parentName:"pre"},`cp /var/lib/mysql /var/lib/mysql.original
`)),u("h4",null,"2. Download the MySQL 5.7 RPM"),u("pre",null,u("code",{parentName:"pre"},`// mysql80-community-release-el7-3.noarch.rpm\uFF0C\u91CC\u9762\u5305\u542B\u4E86 8\uFF0C5.7\uFF0C5.6 \u7B49\u591A\u4E2A\u7248\u672C\uFF0C\u9ED8\u8BA4\u6709\u6548\u7684\u662F 8 \u7684\u7248\u672C
wget http://repo.mysql.com/mysql57-community-release-el7.rpm
`)),u("h4",null,"3. Remove the MySQL-Community RPM that contains MySQL 5.6"),u("pre",null,u("code",{parentName:"pre"},`yum remove mysql-community-release
`)),u("h4",null,"4. Install the MySQL 5.7 RPM(\u5B89\u88C5 MySQL \u6E90)"),u("pre",null,u("code",{parentName:"pre"},`\u53EF\u4EE5\u5B89\u88C5\u81EA\u5DF1\u7684\u4E0B\u8F7D\u7684\u6587\u4EF6
# yum install mysql80-community-release-el7-3.noarch.rpm
`)),u("h4",null,"5. \u8BBE\u7F6E\u6E90\u4E2D\u7684 5.7 \u4E3A\u6709\u6548"),u("p",null,"\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u53EF\u4EE5\u67E5\u770B\u5B89\u88C5\u6E90\u6240\u652F\u6301\u7684\u6240\u6709\u7248\u672C"),u("h1",null,"yum repolist all | grep mysql"),u("pre",null,u("code",{parentName:"pre"},`mysql-cluster-7.5-community/x86_64 MySQL Cluster 7.5 Community   disabled
mysql-cluster-7.5-community-source MySQL Cluster 7.5 Community - disabled
mysql-cluster-7.6-community/x86_64 MySQL Cluster 7.6 Community   disabled
mysql-cluster-7.6-community-source MySQL Cluster 7.6 Community - disabled
mysql-cluster-8.0-community/x86_64 MySQL Cluster 8.0 Community   disabled
mysql-cluster-8.0-community-source MySQL Cluster 8.0 Community - disabled
mysql-connectors-community/x86_64  MySQL Connectors Community    enabled:    108
mysql-connectors-community-source  MySQL Connectors Community -  disabled
mysql-tools-community/x86_64       MySQL Tools Community         enabled:   
`)),u("p",null,"\u9ED8\u8BA4\u662F mysql80-community \u6709\u6548\uFF0C\u4F7F 5.7 \u6709\u6548\u7684\u65B9\u6CD5\u662F\u6267\u884C\u4E0B\u9762\u4E24\u6761\u547D\u4EE4\uFF1A"),u("pre",null,u("code",{parentName:"pre"},`# yum-config-manager --disable mysql80-community

# yum-config-manager --enable mysql57-community
`)),u("h4",null,"6. Update the MySQL Repository to 5.7"),u("p",null,"\u505C\u6389 MySQL \u670D\u52A1"),u("pre",null,u("code",{parentName:"pre",className:"language-linux"},`# systemctl stop mysqld
`)),u("p",null,"\u5347\u7EA7 MySQL"),u("pre",null,u("code",{parentName:"pre"},`yum update mysql
`)),u("p",null,"\u5347\u7EA7\u5B8C\u4E4B\u540E\u91CD\u65B0\u542F\u52A8 MySQL"),u("pre",null,u("code",{parentName:"pre",className:"language-linux"},`systemctl start mysqld
`)),u("p",null,"\u53EF\u4EE5\u8FDB\u5165MySQL\u5BA2\u6237\u7AEF\uFF0C\u53D1\u73B0\u7248\u672C\u5DF2\u7ECF\u66F4\u65B0\u4E86\uFF0C\u6700\u540E\u8FD8\u9700\u8981\u9000\u51FA\u5BA2\u6237\u7AEF\uFF0C\u518D\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u5BF9\u6570\u636E\u5E93\u8868\u8FDB\u884C\u5347\u7EA7"),u("pre",null,u("code",{parentName:"pre",className:"language-linux"},`mysql_upgrade -u root -p
`)),u("p",null,"\u6267\u884C\u5B8C\u6BD5\u4E4B\u540E\u5C31\u53EF\u4EE5\u91CD\u542FMySQL\u670D\u52A1\uFF0C\u5B8C\u6210\u5347\u7EA7"),u("pre",null,u("code",{parentName:"pre"},`# systemctl restart mysqld
`)),u("h1",null,"pass"),u("p",null,"robertma"),u("p",null,"123abc!@#ABC"),u("h1",null,"\u53C2\u8003"),u("ul",null,u("li",{parentName:"ul"},u("a",{parentName:"li",href:"https://blog.csdn.net/buildcourage/article/details/90181513"},"https://blog.csdn.net/buildcourage/article/details/90181513")),u("li",{parentName:"ul"},u("a",{parentName:"li",href:"https://linuxresolved.com/upgrade-mysql-5-6-mysql-5-7-centos/"},"https://linuxresolved.com/upgrade-mysql-5-6-mysql-5-7-centos/")),u("li",{parentName:"ul"},u("a",{parentName:"li",href:"https://docs.mattermost.com/install/install-rhel-7.html"},"https://docs.mattermost.com/install/install-rhel-7.html"))))}e.isMDXComponent=!0;var a=Object.freeze(Object.defineProperty({__proto__:null,default:e},Symbol.toStringTag,{value:"Module"}));const r={};r.main=a;export{r as default};
