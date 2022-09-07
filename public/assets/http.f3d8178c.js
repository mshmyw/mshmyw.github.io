import{c as u}from"./index.89b4627b.js";const B={},e="wrapper";function F({components:E,...C}){return u(e,{...B,...C,components:E,mdxType:"MDXLayout"},u("h1",null,u("a",{parentName:"h1",href:"https://zhuanlan.zhihu.com/p/32553477"},"QUIC")),u("p",null,"Quic \u76F8\u6BD4\u73B0\u5728\u5E7F\u6CDB\u5E94\u7528\u7684 http2+tcp+tls \u534F\u8BAE\u6709\u5982\u4E0B\u4F18\u52BF ","[2]","\uFF1A"),u("ol",null,u("li",{parentName:"ol"},"\u51CF\u5C11\u4E86 TCP \u4E09\u6B21\u63E1\u624B\u53CA TLS \u63E1\u624B\u65F6\u95F4\u3002"),u("li",{parentName:"ol"},"\u6539\u8FDB\u7684\u62E5\u585E\u63A7\u5236\u3002"),u("li",{parentName:"ol"},"\u907F\u514D\u961F\u5934\u963B\u585E\u7684\u591A\u8DEF\u590D\u7528\u3002"),u("li",{parentName:"ol"},"\u8FDE\u63A5\u8FC1\u79FB\u3002"),u("li",{parentName:"ol"},"\u524D\u5411\u5197\u4F59\u7EA0\u9519\u3002")),u("h1",null,"http 1.0 1.1 ",u("a",{parentName:"h1",href:"https://juejin.im/entry/5981c5df518825359a2b9476"},"2.0")),u("p",null,u("strong",{parentName:"p"},"\u5934\u90E8")),u("p",null,"Origin\uFF1A \u6709\u4E00\u4E2A\u5B57\u6BB5\u662F",u("inlineCode",{parentName:"p"},"Origin"),"\uFF0C\u8868\u793A\u8BE5\u8BF7\u6C42\u7684\u8BF7\u6C42\u6E90\uFF08origin\uFF09\uFF0C\u5373\u53D1\u81EA\u54EA\u4E2A\u57DF\u540D\u3002"),u("h2",null,"http1.1"),u("p",null,u("strong",{parentName:"p"},"host\u5934\u90E8\u5904\u7406")),u("p",null,"\u4F46\u968F\u7740\u865A\u62DF\u4E3B\u673A\u6280\u672F\u7684\u53D1\u5C55\uFF0C\u5728\u4E00\u53F0\u7269\u7406\u670D\u52A1\u5668\u4E0A\u53EF\u4EE5\u5B58\u5728\u591A\u4E2A\u865A\u62DF\u4E3B\u673A\uFF08Multi-homed Web Servers\uFF09\uFF0CHTTP1.1\u7684\u8BF7\u6C42\u6D88\u606F\u548C\u54CD\u5E94\u6D88\u606F\u90FD\u5E94\u652F\u6301Host\u5934\u57DF\uFF0C\u4E14\u8BF7\u6C42\u6D88\u606F\u4E2D\u5982\u679C\u6CA1\u6709Host\u5934\u57DF\u4F1A\u62A5\u544A\u4E00\u4E2A\u9519\u8BEF"),u("p",null,u("strong",{parentName:"p"},"\u957F\u8FDE\u63A5")),u("p",null,"HTTP 1.1\u652F\u6301\u957F\u8FDE\u63A5\uFF08PersistentConnection\uFF09\u548C\u8BF7\u6C42\u7684\u6D41\u6C34\u7EBF\uFF08Pipelining\uFF09\u5904\u7406\uFF0C\u5728\u4E00\u4E2ATCP\u8FDE\u63A5\u4E0A\u53EF\u4EE5\u4F20\u9001\u591A\u4E2AHTTP\u8BF7\u6C42\u548C\u54CD\u5E94\uFF0C\u51CF\u5C11\u4E86\u5EFA\u7ACB\u548C\u5173\u95ED\u8FDE\u63A5\u7684\u6D88\u8017\u548C\u5EF6\u8FDF\uFF0C\u5728HTTP1.1\u4E2D\u9ED8\u8BA4\u5F00\u542FConnection\uFF1A keep-alive\uFF0C\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u5F25\u8865\u4E86HTTP1.0\u6BCF\u6B21\u8BF7\u6C42\u90FD\u8981\u521B\u5EFA\u8FDE\u63A5\u7684\u7F3A\u70B9\u3002"),u("p",null,u("strong",{parentName:"p"},"http2")),u("p",null,"\u5934\u90E8\u538B\u7F29"),u("p",null,"\u670D\u52A1\u5668\u63A8\u9001"),u("p",null,"\u591A\u8DEF\u590D\u7528"),u("h1",null,"http \u5934\u90E8"),u("p",null,"content-length\u4F5C\u7528\u4EE5\u53CA\u4EC0\u4E48\u65F6\u5019\u4F1A\u4E0D\u5B58\u5728\uFF1F"),u("p",null,"Content-Length\u7528\u4E8E\u63CF\u8FF0HTTP\u6D88\u606F\u5B9E\u4F53\u7684\u4F20\u8F93\u957F\u5EA6the transfer-length of the message-body\u3002\u5728HTTP\u534F\u8BAE\u4E2D\uFF0C\u6D88\u606F\u5B9E\u4F53\u957F\u5EA6\u548C\u6D88\u606F\u5B9E\u4F53\u7684\u4F20\u8F93\u957F\u5EA6\u662F\u6709\u533A\u522B\uFF0C\u6BD4\u5982\u8BF4gzip\u538B\u7F29\u4E0B\uFF0C\u6D88\u606F\u5B9E\u4F53\u957F\u5EA6\u662F\u538B\u7F29\u524D\u7684\u957F\u5EA6\uFF0C\u6D88\u606F\u5B9E\u4F53 \u7684\u4F20\u8F93\u957F\u5EA6\u662Fgzip\u538B\u7F29\u540E\u7684\u957F\u5EA6\u3002"),u("p",null,"\u5982\u679Chead\u4E2D\u6709Content-Length\uFF0C\u90A3\u4E48\u8FD9\u4E2AContent-Length\u65E2\u8868\u793A\u5B9E\u4F53\u957F\u5EA6\uFF0C\u53C8\u8868\u793A\u4F20\u8F93\u957F\u5EA6\u3002\u5982\u679C\u5B9E\u4F53\u957F\u5EA6\u548C\u4F20\u8F93 \u957F\u5EA6\u4E0D\u76F8\u7B49(\u6BD4\u5982\u8BF4\u8BBE\u7F6E\u4E86Transfer-Encoding)\uFF0C\u90A3\u4E48\u5219\u4E0D\u80FD\u8BBE\u7F6EContent-Length\u3002\u5982\u679C\u8BBE\u7F6E\u4E86Transfer- Encoding\uFF0C\u90A3\u4E48Content-Length\u5C06\u88AB\u5FFD\u89C6\u201D\u3002\u8FD9\u53E5\u8BDD\u7FFB\u8BD1\u7684\u4F18\u70B9\u9976\uFF0C\u5176\u5B9E\u5173\u952E\u5C31\u4E00\u70B9\uFF1A\u6709\u4E86Transfer-Encoding\uFF0C\u5219\u4E0D\u80FD \u6709Content-Length\u3002"),u("p",null,"\u5176\u5B9E\u540E\u9762\u51E0\u6761\u51E0\u4E4E\u53EF\u4EE5\u5FFD\u89C6\uFF0C\u7B80\u5355\u603B\u7ED3\u540E\u5982\u4E0B\uFF1A"),u("p",null,"\u3000\u30001\u3001Content-Length\u5982\u679C\u5B58\u5728\u5E76\u4E14\u6709\u6548\u7684\u8BDD\uFF0C\u5219\u5FC5\u987B\u548C\u6D88\u606F\u5185\u5BB9\u7684\u4F20\u8F93\u957F\u5EA6\u5B8C\u5168\u4E00\u81F4\u3002(\u7ECF\u8FC7\u6D4B\u8BD5\uFF0C\u5982\u679C\u8FC7\u77ED\u5219\u4F1A\u622A\u65AD\uFF0C\u8FC7\u957F\u5219\u4F1A\u5BFC\u81F4\u8D85\u65F6\u3002)"),u("p",null,"\u3000\u30002\u3001\u5982\u679C\u5B58\u5728Transfer-Encoding(\u91CD\u70B9\u662Fchunked)\uFF0C\u5219\u5728header\u4E2D\u4E0D\u80FD\u6709Content-Length\uFF0C\u6709\u4E5F\u4F1A\u88AB\u5FFD\u89C6\u3002"),u("p",null,"\u3000\u30003\u3001\u5982\u679C\u91C7\u7528\u77ED\u8FDE\u63A5\uFF0C\u5219\u76F4\u63A5\u53EF\u4EE5\u901A\u8FC7\u670D\u52A1\u5668\u5173\u95ED\u8FDE\u63A5\u6765\u786E\u5B9A\u6D88\u606F\u7684\u4F20\u8F93\u957F\u5EA6\u3002(\u8FD9\u4E2A\u5F88\u5BB9\u6613\u61C2)"),u("p",null,"\u3000\u3000\u7ED3\u5408HTTP\u534F\u8BAE\u5176\u4ED6\u7684\u7279\u70B9\uFF0C\u6BD4\u5982\u8BF4Http1.1\u4E4B\u524D\u7684\u4E0D\u652F\u6301keep alive\u3002\u90A3\u4E48\u53EF\u4EE5\u5F97\u51FA\u4EE5\u4E0B\u7ED3\u8BBA\uFF1A"),u("p",null,"\u3000\u30001\u3001\u5728Http 1.0\u53CA\u4E4B\u524D\u7248\u672C\u4E2D\uFF0Ccontent-length\u5B57\u6BB5\u53EF\u6709\u53EF\u65E0\u3002"),u("p",null,"\u3000\u30002\u3001\u5728http1.1\u53CA\u4E4B\u540E\u7248\u672C\u3002\u5982\u679C\u662Fkeep alive\uFF0C\u5219content-length\u548Cchunk\u5FC5\u7136\u662F\u4E8C\u9009\u4E00\u3002\u82E5\u662F\u975Ekeep alive\uFF0C\u5219\u548Chttp1.0\u4E00\u6837\u3002content-length\u53EF\u6709\u53EF\u65E0\u3002"),u("h1",null,"HTTP \u534F\u8BAE\u4E2D\u7684 Transfer-",u("a",{parentName:"h1",href:"https://imququ.com/post/transfer-encoding-header-in-http.html"},"Encoding")),u("h1",null,"http \u72B6\u6001\u7801"),u("h2",null,"http \u4E0E",u("a",{parentName:"h2",href:"https://www.jianshu.com/p/52d86558ca57"},"https")),u("ul",null,u("li",{parentName:"ul"},"\u6570\u636E\u52A0\u5BC6 \u4F20\u8F93\u5185\u5BB9\u8FDB\u884C\u6DF7\u6DC6"),u("li",{parentName:"ul"},"\u8EAB\u4EFD\u9A8C\u8BC1 \u901A\u4FE1\u53CC\u65B9\u9A8C\u8BC1\u5BF9\u65B9\u7684\u8EAB\u4EFD\u771F\u5B9E\u6027"),u("li",{parentName:"ul"},"\u6570\u636E\u5B8C\u6574\u6027\u4FDD\u62A4 \u68C0\u6D4B\u4F20\u8F93\u7684\u5185\u5BB9\u662F\u5426\u88AB\u7BE1\u6539\u6216\u4F2A\u9020")),u("h1",null,"SSL",u("a",{parentName:"h1",href:"https://www.ruanyifeng.com/blog/2014/02/ssl_tls.html"},"\u534F\u8BAE")),u("h1",null,u("a",{parentName:"h1",href:"https://juejin.im/post/5c6e5803f265da2dc0065437"},"https")),u("p",null," ",u("a",{parentName:"p",href:"https://juejin.im/post/5a4f4884518825732b19a3ce"},u("strong",{parentName:"a"},"1\u8FC7\u7A0B"))),u("p",null,u("img",{parentName:"p",src:"https://user-gold-cdn.xitu.io/2018/1/5/160c5b10d3f27e00?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"})),u("p",null,`\u5927\u81F4\u4E09\u4E2A\u9636\u6BB5\uFF1A
1 TCP\u63E1\u624B`),u("p",null,"2 SSL\u63E1\u624B"),u("p",null,"3 \u6570\u636E\u52A0\u5BC6\u4F20\u8F93"),u("p",null,"\u6CE8\u610F\uFF1A\u968F\u673A\u7684\u5BF9\u79F0\u79D8\u94A5\u4E5F\u53EA\u662F\u4EA7\u751F\u4E86\u4E00\u6B21\uFF0C\u4E0D\u662F\u6BCF\u6B21\u4F20\u8F93\u90FD\u8FDB\u884C\u4E86\u6539\u53D8\u3002"),u("p",null,u("a",{parentName:"p",href:"https://klionsec.github.io/2017/07/31/https-learn/#menu"},u("strong",{parentName:"a"},"2 https\u7F3A\u70B9"))),u("p",null,"\u4E0D\u8FC7,\u4EE5\u4E0A\u65B9\u5F0F\u5B58\u5728\u660E\u663E\u7684\u4E2D\u95F4\u4EBA\u95EE\u9898:"),u("pre",null,u("code",{parentName:"pre"},`\u5047\u8BBE,\u6B64\u65F6\u5728\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u4E4B\u95F4\u5B58\u5728\u4E00\u4E2A\u4E2D\u95F4\u4EBA,\u8FD9\u4E2A\u4E2D\u95F4\u4EBA\u53EA\u9700\u8981\u628A\u539F\u672C\u53CC\u65B9\u901A\u4FE1\u4E92\u53D1\u7684\u516C\u94A5,\u6362\u6210\u81EA\u5DF1\u7684\u516C\u94A5,\u8FD9\u6837\u4E2D\u95F4\u4EBA\u5C31\u53EF\u4EE5\u8F7B\u677E\u89E3\u5BC6\u901A\u4FE1\u53CC\u65B9\u6240\u53D1\u9001\u7684\u6240\u6709\u6570\u636E
`)),u("p",null,"https\u4E5F\u5E76\u975E100%\u5B89\u5168\uFF0C\u6240\u4EE5\u8BF4\uFF1A\u6CA1\u6709\u7EDD\u5BF9\u7684\u5B89\u5168"),u("h1",null,"[HTTP\u8DA3\u8C08]","origin,referer\u548Chost\u533A\u522B",u("a",{parentName:"h1",href:"https://www.jianshu.com/p/1f9c71850299"},"https://www.jianshu.com/p/1f9c71850299")),u("p",null,"request header\u91CC\u9762\u6709\u4E09\u4E2A\u5C5E\u6027\u4F1A\u6D89\u53CA\u8BF7\u6C42\u6E90\u4FE1\u606F"),u("p",null,"host origin referer"),u("h4",null,"1. Host"),u("p",null,"\u63CF\u8FF0\u8BF7\u6C42\u5C06\u88AB\u53D1\u9001\u7684\u76EE\u7684\u5730\uFF0C\u5305\u62EC\uFF0C\u4E14\u4EC5\u4EC5\u5305\u62EC",u("strong",{parentName:"p"},"\u57DF\u540D\u548C\u7AEF\u53E3\u53F7"),`\u3002
\u5728\u4EFB\u4F55\u7C7B\u578B\u8BF7\u6C42\u4E2D\uFF0Crequest\u90FD\u4F1A\u5305\u542B\u6B64header\u4FE1\u606F\u3002`),u("h4",null,"2. Origin"),u("p",null,"\u7528\u6765\u8BF4\u660E\u8BF7\u6C42\u4ECE\u54EA\u91CC\u53D1\u8D77\u7684\uFF0C\u5305\u62EC\uFF0C\u4E14\u4EC5\u4EC5\u5305\u62EC",u("strong",{parentName:"p"},"\u534F\u8BAE\u548C\u57DF\u540D"),`\u3002
\u8FD9\u4E2A\u53C2\u6570\u4E00\u822C\u53EA\u5B58\u5728\u4E8ECORS\u8DE8\u57DF\u8BF7\u6C42\u4E2D\uFF0C\u53EF\u4EE5\u770B\u5230response\u6709\u5BF9\u5E94\u7684header\uFF1A`,u("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin"),"\u3002"),u("h4",null,"3. Referer"),u("p",null,"\u544A\u77E5\u670D\u52A1\u5668\u8BF7\u6C42\u7684\u539F\u59CB\u8D44\u6E90\u7684URI\uFF0C\u5176\u7528\u4E8E\u6240\u6709\u7C7B\u578B\u7684\u8BF7\u6C42\uFF0C\u5E76\u4E14\u5305\u62EC\uFF1A",u("strong",{parentName:"p"},"\u534F\u8BAE+\u57DF\u540D+\u67E5\u8BE2\u53C2\u6570\uFF08\u6CE8\u610F\uFF0C\u4E0D\u5305\u542B\u951A\u70B9\u4FE1\u606F\uFF09"),"\u3002"),u("p",null,"\u56E0\u4E3A\u539F\u59CB\u7684URI\u4E2D\u7684\u67E5\u8BE2\u53C2\u6570\u53EF\u80FD\u5305\u542BID\u6216\u5BC6\u7801\u7B49\u654F\u611F\u4FE1\u606F\uFF0C\u5982\u679C\u5199\u5165referer\uFF0C\u5219\u53EF\u80FD\u5BFC\u81F4\u4FE1\u606F\u6CC4\u9732\u3002"),u("p",null,u("a",{parentName:"p",href:"https://juejin.im/entry/5ad86c16f265da505a77dca4"},u("strong",{parentName:"a"},"http\u7F13\u5B58\u673A\u5236")),"\u2728\u2728\u2728\u2728\u2728"),u("p",null,"\u6D4F\u89C8\u5668\u7684\u7F13\u5B58\u673A\u5236\u4E5F\u5C31\u662F\u6211\u4EEC\u8BF4\u7684HTTP\u7F13\u5B58\u673A\u5236\uFF0C\u5176\u673A\u5236\u662F\u6839\u636EHTTP\u62A5\u6587\u7684\u7F13\u5B58\u6807\u8BC6\u8FDB\u884C\u7684"),u("p",null,"\u901A\u7528\u4FE1\u606F\u5934\u6307\u7684\u662F\u8BF7\u6C42\u548C\u54CD\u5E94\u62A5\u6587\u90FD\u652F\u6301\u7684\u5934\u57DF\uFF0C\u5206\u522B\u4E3ACache-Control\u3001Connection\u3001Date\u3001Pragma\u3001Transfer-Encoding\u3001Upgrade\u3001Via\uFF1B\u5B9E\u4F53\u5934\u5219\u662F\u5B9E\u4F53\u4FE1\u606F\u7684\u5B9E\u4F53\u5934\u57DF\uFF0C\u5206\u522B\u4E3AAllow\u3001Content-Base\u3001Content-Encoding\u3001Content-Language\u3001Content-Length\u3001Content-Location\u3001Content-MD5\u3001Content-Range\u3001Content-Type\u3001Etag\u3001Expires\u3001Last-Modified\u3001extension-header\u3002\u8FD9\u91CC\u53EA\u662F\u4E3A\u4E86\u65B9\u4FBF\u7406\u89E3\uFF0C\u5C06\u901A\u7528\u4FE1\u606F\u5934\uFF0C\u54CD\u5E94\u5934/\u8BF7\u6C42\u5934\uFF0C\u5B9E\u4F53\u5934\u90FD\u5F52\u4E3A\u4E86HTTP\u5934\u3002"),u("p",null,u("img",{parentName:"p",src:"https://user-gold-cdn.xitu.io/2018/4/19/162db6359673e7d0?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"})),u("ul",null,u("li",{parentName:"ul"},u("p",{parentName:"li"},"\u6D4F\u89C8\u5668\u6BCF\u6B21\u53D1\u8D77\u8BF7\u6C42\uFF0C\u90FD\u4F1A\u5148\u5728\u6D4F\u89C8\u5668\u7F13\u5B58\u4E2D\u67E5\u627E\u8BE5\u8BF7\u6C42\u7684\u7ED3\u679C\u4EE5\u53CA\u7F13\u5B58\u6807\u8BC6")),u("li",{parentName:"ul"},u("p",{parentName:"li"},"\u6D4F\u89C8\u5668\u6BCF\u6B21\u62FF\u5230\u8FD4\u56DE\u7684\u8BF7\u6C42\u7ED3\u679C\u90FD\u4F1A\u5C06\u8BE5\u7ED3\u679C\u548C\u7F13\u5B58\u6807\u8BC6\u5B58\u5165\u6D4F\u89C8\u5668\u7F13\u5B58\u4E2D"))),u("h2",null,"\u5F3A\u5236\u7F13\u5B58"),u("p",null,"\u5F3A\u5236\u7F13\u5B58\u5C31\u662F\u5411\u6D4F\u89C8\u5668\u7F13\u5B58\u67E5\u627E\u8BE5\u8BF7\u6C42\u7ED3\u679C\uFF0C\u5E76\u6839\u636E\u8BE5\u7ED3\u679C\u7684\u7F13\u5B58\u89C4\u5219\u6765\u51B3\u5B9A\u662F\u5426\u4F7F\u7528\u8BE5\u7F13\u5B58\u7ED3\u679C\u7684\u8FC7\u7A0B\uFF0C\u5F3A\u5236\u7F13\u5B58\u7684\u60C5\u51B5\u4E3B\u8981\u6709\u4E09\u79CD(\u6682\u4E0D\u5206\u6790\u534F\u5546\u7F13\u5B58\u8FC7\u7A0B):"),u("p",null,"1 \u4E0D\u5B58\u5728\u8BE5\u7F13\u5B58\u7ED3\u679C\u548C\u7F13\u5B58\u6807\u8BC6\uFF0C\u5F3A\u5236\u7F13\u5B58\u5931\u6548\uFF0C\u5219\u76F4\u63A5\u5411\u670D\u52A1\u5668\u53D1\u8D77\u8BF7\u6C42\uFF08\u8DDF\u7B2C\u4E00\u6B21\u53D1\u8D77\u8BF7\u6C42\u4E00\u81F4\uFF09"),u("p",null,"2 \u5B58\u5728\u8BE5\u7F13\u5B58\u7ED3\u679C\u548C\u7F13\u5B58\u6807\u8BC6\uFF0C\u4F46\u8BE5\u7ED3\u679C\u5DF2\u5931\u6548\uFF0C\u5F3A\u5236\u7F13\u5B58\u5931\u6548\uFF0C\u5219\u4F7F\u7528",u("strong",{parentName:"p"},"\u534F\u5546\u7F13\u5B58")),u("p",null,"3 \u5B58\u5728\u8BE5\u7F13\u5B58\u7ED3\u679C\u548C\u7F13\u5B58\u6807\u8BC6\uFF0C\u4E14\u8BE5\u7ED3\u679C\u5C1A\u672A\u5931\u6548\uFF0C\u5F3A\u5236\u7F13\u5B58\u751F\u6548\uFF0C\u76F4\u63A5\u8FD4\u56DE\u8BE5\u7ED3\u679C"),u("blockquote",null,u("p",{parentName:"blockquote"},"\u90A3\u4E48\u5F3A\u5236\u7F13\u5B58\u7684\u7F13\u5B58\u89C4\u5219\u662F\u4EC0\u4E48\uFF1F")),u("p",null,"\u5F53\u6D4F\u89C8\u5668\u5411\u670D\u52A1\u5668\u53D1\u8D77\u8BF7\u6C42\u65F6\uFF0C\u670D\u52A1\u5668\u4F1A\u5C06\u7F13\u5B58\u89C4\u5219\u653E\u5165HTTP\u54CD\u5E94\u62A5\u6587\u7684HTTP\u5934\u4E2D\u548C\u8BF7\u6C42\u7ED3\u679C\u4E00\u8D77\u8FD4\u56DE\u7ED9\u6D4F\u89C8\u5668\uFF0C\u63A7\u5236\u5F3A\u5236\u7F13\u5B58\u7684\u5B57\u6BB5\u5206\u522B\u662FExpires\u548CCache-Control\uFF0C\u5176\u4E2DCache-Control\u4F18\u5148\u7EA7\u6BD4Expires\u9AD8\u3002"),u("h5",null,"Expires"),u("p",null,"Expires\u662FHTTP/1.0\u63A7\u5236\u7F51\u9875\u7F13\u5B58\u7684\u5B57\u6BB5\uFF0C\u5176\u503C\u4E3A\u670D\u52A1\u5668\u8FD4\u56DE\u8BE5\u8BF7\u6C42\u7ED3\u679C\u7F13\u5B58\u7684\u5230\u671F\u65F6\u95F4\uFF0C\u5373\u518D\u6B21\u53D1\u8D77\u8BE5\u8BF7\u6C42\u65F6\uFF0C\u5982\u679C\u5BA2\u6237\u7AEF\u7684\u65F6\u95F4\u5C0F\u4E8EExpires\u7684\u503C\u65F6\uFF0C\u76F4\u63A5\u4F7F\u7528\u7F13\u5B58\u7ED3\u679C\u3002"),u("blockquote",null,u("p",{parentName:"blockquote"},"Expires\u662FHTTP/1.0\u7684\u5B57\u6BB5\uFF0C\u4F46\u662F\u73B0\u5728\u6D4F\u89C8\u5668\u9ED8\u8BA4\u4F7F\u7528\u7684\u662FHTTP/1.1\uFF0C\u90A3\u4E48\u5728HTTP/1.1\u4E2D\u7F51\u9875\u7F13\u5B58\u8FD8\u662F\u5426\u7531Expires\u63A7\u5236\uFF1F")),u("p",null,"\u5230\u4E86HTTP/1.1\uFF0CExpire\u5DF2\u7ECF\u88ABCache-Control\u66FF\u4EE3\uFF0C\u539F\u56E0\u5728\u4E8EExpires\u63A7\u5236\u7F13\u5B58\u7684\u539F\u7406\u662F\u4F7F\u7528\u5BA2\u6237\u7AEF\u7684\u65F6\u95F4\u4E0E\u670D\u52A1\u7AEF\u8FD4\u56DE\u7684\u65F6\u95F4\u505A\u5BF9\u6BD4\uFF0C\u90A3\u4E48\u5982\u679C\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u7AEF\u7684\u65F6\u95F4\u56E0\u4E3A\u67D0\u4E9B\u539F\u56E0\uFF08\u4F8B\u5982\u65F6\u533A\u4E0D\u540C\uFF1B\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u6709\u4E00\u65B9\u7684\u65F6\u95F4\u4E0D\u51C6\u786E\uFF09\u53D1\u751F\u8BEF\u5DEE\uFF0C\u90A3\u4E48\u5F3A\u5236\u7F13\u5B58\u5219\u4F1A\u76F4\u63A5\u5931\u6548\uFF0C\u8FD9\u6837\u7684\u8BDD\u5F3A\u5236\u7F13\u5B58\u7684\u5B58\u5728\u5219\u6BEB\u65E0\u610F\u4E49\uFF0C\u90A3\u4E48Cache-Control\u53C8\u662F\u5982\u4F55\u63A7\u5236\u7684\u5462\uFF1F"),u("h5",null,"Cache-Control"),u("p",null,"\u5728HTTP/1.1\u4E2D\uFF0CCache-Control\u662F\u6700\u91CD\u8981\u7684\u89C4\u5219\uFF0C\u4E3B\u8981\u7528\u4E8E\u63A7\u5236\u7F51\u9875\u7F13\u5B58\uFF0C\u4E3B\u8981\u53D6\u503C\u4E3A\uFF1A"),u("ul",null,u("li",{parentName:"ul"},"public\uFF1A\u6240\u6709\u5185\u5BB9\u90FD\u5C06\u88AB\u7F13\u5B58\uFF08\u5BA2\u6237\u7AEF\u548C\u4EE3\u7406\u670D\u52A1\u5668\u90FD\u53EF\u7F13\u5B58\uFF09"),u("li",{parentName:"ul"},"private\uFF1A\u6240\u6709\u5185\u5BB9\u53EA\u6709\u5BA2\u6237\u7AEF\u53EF\u4EE5\u7F13\u5B58\uFF0CCache-Control\u7684\u9ED8\u8BA4\u53D6\u503C"),u("li",{parentName:"ul"},"no-cache\uFF1A\u5BA2\u6237\u7AEF\u7F13\u5B58\u5185\u5BB9\uFF0C\u4F46\u662F\u662F\u5426\u4F7F\u7528\u7F13\u5B58\u5219\u9700\u8981\u7ECF\u8FC7\u534F\u5546\u7F13\u5B58\u6765\u9A8C\u8BC1\u51B3\u5B9A"),u("li",{parentName:"ul"},"no-store\uFF1A\u6240\u6709\u5185\u5BB9\u90FD\u4E0D\u4F1A\u88AB\u7F13\u5B58\uFF0C\u5373\u4E0D\u4F7F\u7528\u5F3A\u5236\u7F13\u5B58\uFF0C\u4E5F\u4E0D\u4F7F\u7528\u534F\u5546\u7F13\u5B58"),u("li",{parentName:"ul"},"max-age=xxx (xxx is numeric)\uFF1A\u7F13\u5B58\u5185\u5BB9\u5C06\u5728xxx\u79D2\u540E\u5931\u6548")),u("p",null,"\u7531\u4E8ECache-Control\u7684\u4F18\u5148\u7EA7\u6BD4expires\uFF0C\u90A3\u4E48\u76F4\u63A5\u6839\u636ECache-Control\u7684\u503C\u8FDB\u884C\u7F13\u5B58\uFF0C\u610F\u601D\u5C31\u662F\u8BF4\u5728600\u79D2\u5185\u518D\u6B21\u53D1\u8D77\u8BE5\u8BF7\u6C42\uFF0C\u5219\u4F1A\u76F4\u63A5\u4F7F\u7528\u7F13\u5B58\u7ED3\u679C\uFF0C\u5F3A\u5236\u7F13\u5B58\u751F\u6548\u3002"),u("p",null,"\u6CE8\uFF1A\u5728\u65E0\u6CD5\u786E\u5B9A\u5BA2\u6237\u7AEF\u7684\u65F6\u95F4\u662F\u5426\u4E0E\u670D\u52A1\u7AEF\u7684\u65F6\u95F4\u540C\u6B65\u7684\u60C5\u51B5\u4E0B\uFF0CCache-Control\u76F8\u6BD4\u4E8Eexpires\u662F\u66F4\u597D\u7684\u9009\u62E9\uFF0C\u6240\u4EE5\u540C\u65F6\u5B58\u5728\u65F6\uFF0C\u53EA\u6709Cache-Control\u751F\u6548\u3002"),u("blockquote",null,u("p",{parentName:"blockquote"},"\u6D4F\u89C8\u5668\u7684\u7F13\u5B58\u5B58\u653E\u5728\u54EA\u91CC\uFF0C\u5982\u4F55\u5728\u6D4F\u89C8\u5668\u4E2D\u5224\u65AD\u5F3A\u5236\u7F13\u5B58\u662F\u5426\u751F\u6548\uFF1F")),u("p",null,"\u8FD9\u91CC\u6211\u4EEC\u4EE5\u535A\u5BA2\u7684\u8BF7\u6C42\u4E3A\u4F8B\uFF0C\u72B6\u6001\u7801\u4E3A\u7070\u8272\u7684\u8BF7\u6C42\u5219\u4EE3\u8868\u4F7F\u7528\u4E86\u5F3A\u5236\u7F13\u5B58\uFF0C\u8BF7\u6C42\u5BF9\u5E94\u7684Size\u503C\u5219\u4EE3\u8868\u8BE5\u7F13\u5B58\u5B58\u653E\u7684\u4F4D\u7F6E\uFF0C\u5206\u522B\u4E3Afrom memory cache \u548C from disk cache\u3002"),u("blockquote",null,u("p",{parentName:"blockquote"},"\u90A3\u4E48from memory cache \u548C from disk cache\u53C8\u5206\u522B\u4EE3\u8868\u7684\u662F\u4EC0\u4E48\u5462\uFF1F\u4EC0\u4E48\u65F6\u5019\u4F1A\u4F7F\u7528from disk cache\uFF0C\u4EC0\u4E48\u65F6\u5019\u4F1A\u4F7F\u7528from memory cache\u5462\uFF1F")),u("p",null,"from memory cache\u4EE3\u8868\u4F7F\u7528\u5185\u5B58\u4E2D\u7684\u7F13\u5B58\uFF0Cfrom disk cache\u5219\u4EE3\u8868\u4F7F\u7528\u7684\u662F\u786C\u76D8\u4E2D\u7684\u7F13\u5B58\uFF0C\u6D4F\u89C8\u5668\u8BFB\u53D6\u7F13\u5B58\u7684\u987A\u5E8F\u4E3Amemory \u2013> disk\u3002"),u("p",null,"\u867D\u7136\u6211\u5DF2\u7ECF\u76F4\u63A5\u628A\u7ED3\u8BBA\u8BF4\u51FA\u6765\u4E86\uFF0C\u4F46\u662F\u76F8\u4FE1\u6709\u4E0D\u5C11\u4EBA\u5BF9\u6B64\u4E0D\u80FD\u7406\u89E3\uFF0C\u90A3\u4E48\u63A5\u4E0B\u6765\u6211\u4EEC\u4E00\u8D77\u8BE6\u7EC6\u5206\u6790\u4E00\u4E0B\u7F13\u5B58\u8BFB\u53D6\u95EE\u9898\uFF0C\u8FD9\u91CC\u4ECD\u8BA9\u4EE5\u6211\u7684\u535A\u5BA2\u4E3A\u4F8B\u8FDB\u884C\u5206\u6790\uFF1A"),u("p",null,"\u8BBF\u95EE",u("a",{parentName:"p",href:"https://heyingye.github.io/"},"https://heyingye.github.io/")," \u2013> 200 \u2013> \u5173\u95ED\u535A\u5BA2\u7684\u6807\u7B7E\u9875 \u2013> \u91CD\u65B0\u6253\u5F00",u("a",{parentName:"p",href:"https://heyingye.github.io/"},"https://heyingye.github.io/")," \u2013> 200(from disk cache) \u2013> \u5237\u65B0 \u2013> 200(from memory cache)"),u("p",null,u("strong",{parentName:"p"},"\u534F\u5546\u7F13\u5B58"),"(\u4E0A\u8FF0\u7B2C2\u6B65\u7684\u8FC7\u7A0B)"),u("p",null,"\u534F\u5546\u7F13\u5B58\u5C31\u662F\u5F3A\u5236\u7F13\u5B58\u5931\u6548\u540E\uFF0C\u6D4F\u89C8\u5668\u643A\u5E26\u7F13\u5B58\u6807\u8BC6\u5411\u670D\u52A1\u5668\u53D1\u8D77\u8BF7\u6C42\uFF0C\u7531\u670D\u52A1\u5668\u6839\u636E\u7F13\u5B58\u6807\u8BC6\u51B3\u5B9A\u662F\u5426\u4F7F\u7528\u7F13\u5B58\u7684\u8FC7\u7A0B\uFF0C\u4E3B\u8981\u6709\u4EE5\u4E0B\u4E24\u79CD\u60C5\u51B5\uFF1A"),u("p",null,"1 \u534F\u5546\u7F13\u5B58\u751F\u6548\uFF0C\u8FD4\u56DE304"),u("p",null,"2 \u534F\u5546\u7F13\u5B58\u5931\u6548\uFF0C\u8FD4\u56DE200\u548C\u8BF7\u6C42\u7ED3\u679C\u7ED3\u679C"),u("p",null,u("strong",{parentName:"p"},"\u603B\u7ED3")),u("p",null,"\u5F3A\u5236\u7F13\u5B58\u4F18\u5148\u4E8E\u534F\u5546\u7F13\u5B58\u8FDB\u884C\uFF0C\u82E5\u5F3A\u5236\u7F13\u5B58(Expires\u548CCache-Control)\u751F\u6548\u5219\u76F4\u63A5\u4F7F\u7528\u7F13\u5B58\uFF0C\u82E5\u4E0D\u751F\u6548\u5219\u8FDB\u884C\u534F\u5546\u7F13\u5B58(Last-Modified / If-Modified-Since\u548CEtag / If-None-Match)\uFF0C\u534F\u5546\u7F13\u5B58\u7531\u670D\u52A1\u5668\u51B3\u5B9A\u662F\u5426\u4F7F\u7528\u7F13\u5B58\uFF0C\u82E5\u534F\u5546\u7F13\u5B58\u5931\u6548\uFF0C\u90A3\u4E48\u4EE3\u8868\u8BE5\u8BF7\u6C42\u7684\u7F13\u5B58\u5931\u6548\uFF0C\u91CD\u65B0\u83B7\u53D6\u8BF7\u6C42\u7ED3\u679C\uFF0C\u518D\u5B58\u5165\u6D4F\u89C8\u5668\u7F13\u5B58\u4E2D\uFF1B\u751F\u6548\u5219\u8FD4\u56DE304\uFF0C\u7EE7\u7EED\u4F7F\u7528\u7F13\u5B58"),u("p",null,u("a",{parentName:"p",href:"https://juejin.im/post/5df5bcea6fb9a016091def69"},"\u5BF9\u6D4F\u89C8\u5668\u7684\u7F13\u5B58\u673A\u5236\u6765\u505A\u4E2A\u7B80\u8981\u7684\u603B\u7ED3")),u("p",null,"\u9996\u5148\u901A\u8FC7 ",u("inlineCode",{parentName:"p"},"Cache-Control")," \u9A8C\u8BC1\u5F3A\u7F13\u5B58\u662F\u5426\u53EF\u7528"),u("ul",null,u("li",{parentName:"ul"},u("p",{parentName:"li"},"\u5982\u679C\u5F3A\u7F13\u5B58\u53EF\u7528\uFF0C\u76F4\u63A5\u4F7F\u7528")),u("li",{parentName:"ul"},u("p",{parentName:"li"},"\u5426\u5219\u8FDB\u5165\u534F\u5546\u7F13\u5B58\uFF0C\u5373\u53D1\u9001 HTTP \u8BF7\u6C42\uFF0C\u670D\u52A1\u5668\u901A\u8FC7\u8BF7\u6C42\u5934\u4E2D\u7684"),u("pre",{parentName:"li"},u("code",{parentName:"pre"},`Last-Modified
`)),u("p",{parentName:"li"},"\u6216\u8005"),u("pre",{parentName:"li"},u("code",{parentName:"pre"},`ETag
`)),u("p",{parentName:"li"},"\u5B57\u6BB5\u68C0\u67E5\u8D44\u6E90\u662F\u5426\u66F4\u65B0"),u("ul",{parentName:"li"},u("li",{parentName:"ul"},"\u82E5\u8D44\u6E90\u66F4\u65B0\uFF0C\u8FD4\u56DE\u8D44\u6E90\u548C200\u72B6\u6001\u7801"),u("li",{parentName:"ul"},"\u5426\u5219\uFF0C\u8FD4\u56DE304\uFF0C\u544A\u8BC9\u6D4F\u89C8\u5668\u76F4\u63A5\u4ECE\u7F13\u5B58\u83B7\u53D6\u8D44\u6E90")))),u("h2",null,"\u6D4F\u89C8\u5668\u672C\u5730\u5B58\u50A8\uFF08\u4E0D\u662F\u7F13\u5B58\uFF09"),u("p",null,"\u6D4F\u89C8\u5668\u7684\u672C\u5730\u5B58\u50A8\u4E3B\u8981\u5206\u4E3A",u("inlineCode",{parentName:"p"},"Cookie"),"\u3001",u("inlineCode",{parentName:"p"},"WebStorage"),"\u548C",u("inlineCode",{parentName:"p"},"IndexedDB"),", \u5176\u4E2D",u("inlineCode",{parentName:"p"},"WebStorage"),"\u53C8\u53EF\u4EE5\u5206\u4E3A",u("inlineCode",{parentName:"p"},"localStorage"),"\u548C",u("inlineCode",{parentName:"p"},"sessionStorage"),"\u3002"))}F.isMDXComponent=!0;var n=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));const D={};D.main=n;export{D as default};
