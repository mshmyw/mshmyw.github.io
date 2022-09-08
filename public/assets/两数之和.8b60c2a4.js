import{c as u}from"./index.1fa5d347.js";const F={},t="wrapper";function E({components:e,...a}){return u(t,{...F,...a,components:e,mdxType:"MDXLayout"},u("p",null,"\u7ED9\u5B9A\u4E00\u4E2A\u6574\u6570\u6570\u7EC4 ",u("inlineCode",{parentName:"p"},"nums")," \u548C\u4E00\u4E2A\u76EE\u6807\u503C ",u("inlineCode",{parentName:"p"},"target"),"\uFF0C\u8BF7\u4F60\u5728\u8BE5\u6570\u7EC4\u4E2D\u627E\u51FA\u548C\u4E3A\u76EE\u6807\u503C\u7684\u90A3 ",u("strong",{parentName:"p"},"\u4E24\u4E2A")," \u6574\u6570\uFF0C\u5E76\u8FD4\u56DE\u4ED6\u4EEC\u7684\u6570\u7EC4\u4E0B\u6807\u3002"),u("p",null,"\u7ED9\u5B9A nums = ","[2, 7, 11, 15]",", target = 9"),u("p",null,"\u56E0\u4E3A nums","[0]"," + nums","[1]",` = 2 + 7 = 9
\u6240\u4EE5\u8FD4\u56DE `,"[0, 1]",`
\u94FE\u63A5\uFF1A`,u("a",{parentName:"p",href:"https://leetcode-cn.com/problems/two-sum"},"https://leetcode-cn.com/problems/two-sum")),u("p",null,"\u6C42\u89E3\u601D\u8DEF"),u("p",null,"\u8FD9\u9053\u9898\u6700\u76F4\u89C2\u6700\u5BB9\u6613\u60F3\u5230\u7684\u5C31\u662F\u904D\u5386\u561B\uFF0C\u4E5F\u5C31\u662F\u66B4\u529B\u6C42\u89E3\u3002\u5176\u5B9E\u5C31\u662F\u641E\u7EC4\u5408\uFF0C\u4ECEO(n^n/2)\u7684\u7EC4\u5408\u4E2D\u627E\u5230\u548C\u4E3Atarget\u7684\u90A3\u4E9B\u4E2A\u7EC4\u5408\u3002"),u("p",null,"\u5FEB\u901F\u89E3\u6CD5\uFF1A"),u("p",null,"\u53E6\u5916\u7684\u65B9\u6CD5\u5C31\u4E0D\u662F\u90A3\u4E48\u663E\u800C\u6613\u89C1\u4E86\u3002"),u("p",null,"\u6211\u4EEC\u4E00\u6B65\u6B65\u7684\u60F3\uFF1A"),u("ol",null,u("li",{parentName:"ol"},u("p",{parentName:"li"},"\u8981\u627E\u7684\u4E24\u4E2A\u6570\u90FD\u5728\u6570\u7EC4\u4E2D\uFF0C\u5047\u5982\u5176\u4E2D\u4E00\u4E2A\u662FA\uFF0C\u90A3\u4E48\u53E6\u5916\u4E00\u4E2A\u6570B\u5C31\u662Ftarget-A\u3002")),u("li",{parentName:"ol"},u("p",{parentName:"li"},"(A,target-A)\u5747\u662F\u6570\u7EC4\u4E2D\u5143\u7D20\u3002")),u("li",{parentName:"ol"},u("p",{parentName:"li"},"\u5047\u5982\u6211\u4EEC\u786E\u5B9A\u4E86A,\u90A3\u4E48\u53E6\u5916\u4E00\u4E2A\u6570B(=target-A)\u5176\u5B9E\u5C31\u5DF2\u7ECF\u662F\u786E\u5B9A\u7684\u4E86\u3002")),u("li",{parentName:"ol"},u("p",{parentName:"li"},"\u5047\u5982\u6211\u4EEC\u77E5\u9053\u4E86A\uFF0C\u6211\u4EEC\u80FD\u591F\u5FEB\u901F\u786E\u5B9A\u7684\u662FA\u3001A\u7684\u4E0B\u6807indexA\uFF0C\u4EE5\u53CAB\u3002\u90A3\u4E48\u6211\u4EEC\u63A5\u4E0B\u6765\u6240\u8981\u505A\u7684\u5C31\u662F\u5FEB\u901F\u627E\u5230B\u6240\u5BF9\u5E94\u7684\u4E0B\u6807\u5373\u53EF\u3002")),u("li",{parentName:"ol"},u("p",{parentName:"li"},"\u6570\u7EC4\uFF0C\u6211\u4EEC\u77E5\u9053\uFF0C\u5982\u679C\u77E5\u9053\u4E00\u4E2A\u6570\u7684\u4E0B\u6807\u7D22\u5F15index\uFF0C\u90A3\u4E48\u6211\u4EEC\u53EA\u8981O(1)\u65F6\u95F4\u5C31\u7ACB\u5373\u77E5\u9053\u8BE5\u4E0B\u6807\u6240\u5BF9\u5E94\u7684\u503CList","[index]","\uFF0C\u90A3\u4E48\u53CD\u8FC7\u6765\u5C31\u96BE\u4E86\u3002\u77E5\u9053\u6570\u7EC4\u4E2D\u67D0\u4E2A\u5143\u7D20\u7684\u503C\uFF0C\u90A3\u4E48\u6211\u4EEC\u600E\u4E48\u80FD\u5FEB\u901F\u77E5\u9053\u5B83\u7684\u4E0B\u6807\u5462\uFF1F\u6B63\u5E38\u5C31\u662F\u904D\u5386\uFF0C\u9700\u8981O(n)\u65F6\u95F4\uFF0C\u8FD8\u80FD\u600E\u4E48\u505A\u5462\uFF1F")),u("li",{parentName:"ol"},u("p",{parentName:"li"},"\u6211\u4EEC\u5E94\u8BE5\u60F3\u5230\u7684\u662F\u628A\u6570\u7EC4\u4E2D\u6BCF\u4E2A\u503C\u5BF9\u5E94\u7684\u4E0B\u6807\u7ED9\u5B58\u8D77\u6765\uFF0C\u8FD9\u6837\uFF0C\u6BCF\u4E2A\u503C\u5BF9\u5E94\u7684\u4E0B\u6807\u6211\u4EEC\u4E5F\u5C31\u7ACB\u9A6C\u80FD\u77E5\u9053\u4E86\u3002\u600E\u4E48\u5B58\u5462\uFF1F")),u("li",{parentName:"ol"},u("p",{parentName:"li"},"\u8FD9\u65F6\uFF0C\u5C31\u8981\u5229\u7528\u53E6\u4E00\u79CD\u6570\u636E\u7ED3\u6784\uFF1A\u5B57\u5178\u3002\u5B57\u5178\u6709\u5F88\u591A\u79CD\u79F0\u547C\uFF0Cmap,dict,..whatever\u3002\u6211\u4EEC\u7684\u505A\u6CD5\u5C31\u662F\uFF0C\u5C06\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u7684\u503C\u4F5C\u4E3A\u5B57\u5178\u7684key\uFF0C\u7136\u540E\u5C06\u5176\u4E0B\u6807\u4F5C\u4E3Avalue\u4FDD\u5B58\u5230\u5B57\u5178\u4E2D\u3002")),u("li",{parentName:"ol"},u("p",{parentName:"li"},"\u6700\u540E\u4E00\u6B65\u662F\uFF1A\u5047\u5982\u73B0\u5728\u6709\u5B57\u5178\u4E2D\u67D0\u4E2A\u5143\u7D20key\u662Fkey1,\u90A3\u4E48\u53E6\u4E00\u4E2A\u5143\u7D20target-key1\u4E5F\u5728\u5B57\u5178\u4E2D\uFF0C\u5219\u4E8C\u8005\u5BF9\u5E94\u7684value\u5373\u4E3A\u7ED3\u679C\u3002"))),u("h1",null,"\u7B80\u5355\u4EE3\u7801(golang vs python)"),u("h1",null,"golang"),u("pre",null,u("code",{parentName:"pre",className:"language-go"},`package main

import (
    "fmt"
)

func sumOfNums(numList []int, target int) {
    numMap := make(map[int]int)
    for index, value := range numList {
        numMap[value] = index
    }
    for key, value := range numMap {
        if rvalue, ok := numMap[target-key]; ok {
            fmt.Println(value, rvalue)
        }
    }
}

func main() {
    var numList = []int{2, 3, 5, 7, 11, 13}
    var target = 10
    sumOfNums(numList, target)
}

`)),u("h1",null,"python"),u("pre",null,u("code",{parentName:"pre",className:"language-python"},`array = [2, 5, 7, 11, 13]
target = 13

def sum_func(array, target):
  map_of_array = {}
  for index, value in enumerate(array):
    map_of_array[value] = index
  
  for key, value in map_of_array.items():
    if target - key in map_of_array.keys():
      print(value, map_of_array[target-key])

sum_func(array, target)
`)))}E.isMDXComponent=!0;var n=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"}));const C={};C.main=n;export{C as default};
