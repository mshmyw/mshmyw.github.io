import{c as u}from"./index.1fa5d347.js";const F={},t="wrapper";function e({components:n,...o}){return u(t,{...F,...o,components:n,mdxType:"MDXLayout"},u("h1",null,"\u9898\u76EE\u63CF\u8FF0"),u("p",null,"\u67093\uFF0C6\uFF0C7\u9762\u503C\u786C\u5E01\uFF0C\u51D1\u591F18\u5143\uFF0C\u6700\u5C11\u7684\u786C\u5E01\u6570\uFF1F"),u("p",null,"\u601D\u8DEF\uFF1A\u52A8\u6001\u89C4\u5212"),u("p",null,"\u5173\u952E\u70B9\uFF1A\u6700\u4F18\u5B50\u7ED3\u6784\u3001\u6700\u5C0F\u5B50\u95EE\u9898\u3001\u5FAA\u73AF\u4E0D\u53D8\u5F0F"),u("pre",null,u("code",{parentName:"pre",className:"language-python"},`def least_coin(money):
  # num[money]] \u6570\u7EC4\u4EE3\u8868\u6570\u989D\u4E3Amoney\u65F6\uFF0C\u6240\u9700\u6700\u5C0F\u6570\u91CF,\u521D\u59CB\u5316\u65F6\u7ED9\u4E00\u4E2A\u65E0\u7A77\u5927\u7684\u6570
  num = [1000 for i in range(money+1)] 
  coin_type = [3, 6, 7] # \u9762\u503C
  # money\u4E3A0\u65F6\uFF0C\u786C\u5E01\u6570\u4E5F\u4E3A0
  num[0] = 0

  for money in range(0, money+1):
    for value in coin_type:
      if money - value >= 0:
        num[money] = min(num[money], num[money - value] + 1)

  print(num)
  
least_coin(19)
`)))}e.isMDXComponent=!0;var m=Object.freeze(Object.defineProperty({__proto__:null,default:e},Symbol.toStringTag,{value:"Module"}));const l={};l.main=m;export{l as default};
