import{c as u}from"./index.1fa5d347.js";const a={},E="wrapper";function F({components:r,...e}){return u(E,{...a,...e,components:r,mdxType:"MDXLayout"},u("h1",null,u("a",{parentName:"h1",href:"https://www.kancloud.cn/digest/pieces-algorithm/163615"},"\u4F4D\u8FD0\u7B97\u5B9E\u73B0\u52A0\u6CD5")),u("h2",null,"\u5206\u6790\u666E\u901A\u52A0\u6CD5\u8FD0\u7B97\u8FC7\u7A0B\uFF1A"),u("pre",null,u("code",{parentName:"pre"},`3+2=5
3+9=12
13+98=111
`)),u("p",null,u("strong",{parentName:"p"},"\u62C6\u5206\u8FD0\u7B97\uFF1A")),u("p",null,"1 \u4E0D\u8003\u8651\u8FDB\u4F4D\uFF0C\u7ED3\u679C\u4E3Asum:"),u("pre",null,u("code",{parentName:"pre"},`3+2=5
3+9=2
13+98=01
`)),u("p",null,"2 \u53EA\u8003\u8651\u8FDB\u4F4D,\u7ED3\u679C\u4E3Acarry\uFF1A"),u("pre",null,u("code",{parentName:"pre"},`3+2=0
3+9=10
13+98=110
`)),u("p",null,"\u6211\u4EEC\u53D1\u73B0\u52A0\u6CD5\u7684\u6700\u7EC8\u7ED3\u679C\u5176\u5B9E\u662F\u4E0D\u8003\u8651\u8FDB\u4F4D\u6240\u5F97sum\u548C\u53EA\u8003\u8651\u8FDB\u4F4D\u6240\u5F97carry\u7684\u548C\u3002\u5F53carry\u4E3A0\u65F6\uFF0C\u53EA\u9700\u6267\u884C\u6B65\u9AA41\u5373\u53EF\u3002\u56E0\u6B64\uFF1A"),u("p",null,"3 \u52A0\u6CD5\u548C\u8FD0\u7B97\u7B49\u4EF7\u4E8E\u5C061\u548C2\u76F8\u52A0\uFF1A"),u("p",null,"\u5C06\u6B65\u9AA41sum\u548C\u6B65\u9AA42 carry\u76F8\u52A0\uFF0C\u5982\u679C\u6240\u5F97carry\u4E3A0\uFF0C\u5219\u7ED3\u675F\uFF1B"),u("p",null,"\u5426\u5219\u7EE7\u7EED1\u548C2"),u("h1",null,"\u4F4D\u8FD0\u7B97"),u("p",null,"\u4E0A\u8FF0\u5341\u8FDB\u5236\u8FC7\u7A0B\u540C\u6837\u9002\u7528\u4E8E\u4E8C\u8FDB\u5236\u3002\u5E76\u4E14\u89C2\u5BDF\u53EF\u53D1\u73B0\uFF1A"),u("p",null,u("strong",{parentName:"p"},"\u4E0D\u8003\u8651\u8FDB\u4F4D\u7684\u52A0\u6CD5\u5176\u5B9E\u5C31\u662F\u5F02\u6216\u8FD0\u7B97")),u("p",null,u("strong",{parentName:"p"},"\u53EA\u8003\u8651\u8FDB\u4F4D\u5C31\u662F\u4E0E\u8FD0\u7B97\u5E76\u5DE6\u79FB\u4E00\u4F4D")),u("p",null,"python\u4EE3\u7801\u5B9E\u73B0\u5982\u4E0B\uFF1A"),u("pre",null,u("code",{parentName:"pre"},`# \u8FED\u4EE3
def add_iter(a, b):
  sum = a^b
  carry = (a&b) << 1
  a = sum
  b = carry
  while carry:
    sum = a^b
    carry = (a&b) << 1
    
    a = sum
    b = carry

  print(sum)

# \u9012\u5F52
def add_recur(a, b):
  if b == 0:
    return a

  sum = a^b
  carry = (a&b)<<1
  return add_recur(sum,carry)

add_iter(3, 28)
print(add_recur(3, 28))
`)),u("p",null,"\u56DB\u5219\u8FD0\u7B97\u4E2D\u52A0\u6CD5\u662F\u57FA\u7840\uFF0C\u6709\u4E86\u52A0\u6CD5\uFF0C\u5176\u4F59\u7684\u4E58\u9664\u51CF\u5747\u662F\u4EE5\u52A0\u6CD5\u4E3A\u6839\u57FA\u53D8\u6362\u5F97\u5230\u3002"))}F.isMDXComponent=!0;var D=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));const n={};n.main=D;export{n as default};
