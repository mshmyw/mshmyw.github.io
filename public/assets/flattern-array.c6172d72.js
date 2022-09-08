import{c as u}from"./index.1fa5d347.js";const E={},B="wrapper";function F({components:t,...e}){return u(B,{...E,...e,components:t,mdxType:"MDXLayout"},u("h1",null,"\u62CD\u5E73\u6570\u7EC4"),u("p",null,'"""'),u("p",null,"\u7F16\u5199\u4E00\u4E2A\u51FD\u6570\uFF0C\u63A5\u53D7\u4E00\u4E2A\u4EC5\u5305\u542B\u6570\u5B57\u7684 \u591A\u7EF4\u6570\u7EC4 \uFF0C\u8FD4\u56DE\u62CD\u5E73\u4EE5\u540E\u7684\u7ED3\u679C\u3002\u4F8B\u5982\u4F20\u5165\uFF1A[1, [","[2]",", 3, 4], 5]\uFF0C\u8FD4\u56DE ","[1, 2, 3, 4, 5]","\u3002"),u("p",null,'"""'),u("h2",null,"\u524D\u8A00\uFF08\u65B9\u6CD5\u8BBA\uFF09\uFF1A"),u("blockquote",null,u("p",{parentName:"blockquote"},"\u505A\u4EFB\u4F55\u4E8B\u90FD\u662F\u6709\u4E00\u5B9A\u5957\u8DEF\u7684\uFF0C\u6BD4\u5982\u5728\u9762\u5BF9\u4E00\u4EF6\u590D\u6742\u7684\u4E8B\u60C5\u65F6\u4F60\u8BE5\u600E\u4E48\u505A\u5462\uFF1F\u8FD9\u65F6\u5019\u4E00\u79CD\u529E\u6CD5\u662F\u7B80\u5316\u5B83\uFF0C\u5C06\u592A\u591A\u7684\u5E72\u6270\u56E0\u7D20\u53BB\u6389\u540E\uFF0C\u770B\u770B\u8FD9\u65F6\u80FD\u5426\u89E3\u51B3\uFF0C\u5982\u679C\u4E0D\u884C\uFF0C\u90A3\u4E48\u8FDB\u4E00\u6B65\u7B80\u5316\uFF0C\u77E5\u9053\u4F60\u80FD\u591F\u7406\u89E3\u5B83\uFF0C\u89E3\u51B3\u5B83\u3002"),u("p",{parentName:"blockquote"},"\u5176\u5B9E\u8FD9\u5C31\u662F\u4E00\u79CD\u9012\u5F52\u89E3\u51B3\u95EE\u9898\u7684\u65B9\u6848\u3002")),u("pre",null,u("code",{parentName:"pre"},`const flattern = (list, result=[]) => {
  for(const item of list) {
    if(Array.isArray(item)) {
      flattern(item, result);
    } else {
      result.push(item);
    }

  }
}

const result = [];
const t = [3, [[1], 2, 4], 5];
flattern(t, result);
console.log(result);
`)),u("pre",null,u("code",{parentName:"pre"},`/**
\u5B57\u7B26\u4E32\u6D88\u9664\uFF0C
\u7ED9\u5B9A\u4E00\u4E2A\u5C0F\u5199\u5B57\u6BCD\u7684\u5B57\u7B26\u4E32S\uFF0C\u91CD\u590D\u5220\u9664\u4E24\u4E2A\u76F8\u90BB\u4E14\u76F8\u7B49\u7684\u5B57\u6BCD\u3002

\u6211\u4EEC\u5728S\u4E0A\u53CD\u590D\u5220\u9664\uFF0C\u76F4\u5230\u6211\u4EEC\u518D\u4E5F\u65E0\u6CD5\u5220\u9664\u3002

\u5728\u5B8C\u6210\u6240\u6709\u6B64\u7C7B\u91CD\u590D\u5220\u9664\u540E\u8FD4\u56DE\u6700\u540E\u4E00\u4E2A\u5B57\u7B26\u4E32\u3002\u4FDD\u8BC1\u7B54\u6848\u662F\u72EC\u4E00\u65E0\u4E8C\u7684\u3002
*/
def get_unique_word(letters):
  s = []
  for idx, item in enumerate(letters):
    if len(s) and s[-1] == letters[idx]:
      s.pop()
    else:
      s.append(item)
  
  print("".join(s))

letters = 'ABBACD'
get_unique_word(letters)
`)),u("h1",null,"other"),u("pre",null,u("code",{parentName:"pre"},`/**
 * \u5B57\u7B26\u4E32\u9690\u85CF\u90E8\u5206\u5185\u5BB9
 * \u8BF4\u660E\uFF1A\u5B9E\u73B0\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u63A5\u6536\u4E00\u4E2A\u5B57\u7B26\u4E32\u548C\u4E00\u4E2A\u7B26\u53F7\uFF0C\u5C06\u5B57\u7B26\u4E32\u4E2D\u95F4\u56DB\u4F4D\u6309\u6307\u5B9A\u7B26\u53F7\u9690\u85CF
 *   1. \u7B26\u53F7\u65E0\u6307\u5B9A\u65F6\u4F7F\u7528\u661F\u53F7\uFF08*\uFF09
 *   2. \u63A5\u6536\u7684\u5B57\u7B26\u4E32\u5C0F\u4E8E\u6216\u7B49\u4E8E\u56DB\u4F4D\u65F6\uFF0C\u8FD4\u56DE\u540C\u6837\u957F\u5EA6\u7684\u7B26\u53F7\u4E32\uFF0C\u7B49\u540C\u4E8E\u5168\u9690\u85CF\uFF0C\u5982 123\uFF0C\u9690\u85CF\u540E\u662F ***
 *   3. \u5B57\u7B26\u4E32\u957F\u5EA6\u662F\u5927\u4E8E\u56DB\u4F4D\u7684\u5947\u6570\u65F6\uFF0C\u5982 123456789\uFF0C\u9690\u85CF\u540E\u662F 12****789\uFF0C\u5947\u6570\u591A\u51FA\u6765\u7684\u4E00\u4F4D\u5728\u672B\u5C3E
 * \u793A\u4F8B\uFF1A
 *   mask('alibaba', '#');  // a####ba
 *   mask('85022088');   // 85****88
 *   mask('hello');  // ****o
 *   mask('abc', '?');  // ???
 *   mask('\u963F\u91CC\u5DF4\u5DF4\u96C6\u56E2', '?'); // \u963F????\u56E2
 */
function mask(str, char='*') {
  /* \u4EE3\u7801\u5B9E\u73B0 */
  if(typeof str !== 'string') {
    console.log('type error');
    return;
  }

  const HLENGTH = 4;
  let length = str.length - HLENGTH;
  if(length > 0) {
    let flag = false;
    if(length % 2) {
      str = '#' + str;
      flag = true;
      length += 1;
    }
    str = str.substr(0, length/2) + new Array(HLENGTH + 1).join(char) + str.substr(length/2 + HLENGTH);
    if(flag) {
      str = str.substr(1);
    }
  }else {
    str = new Array(str.length + 1).join(char);
  }
  return str;
}

/**
 * \u6570\u7EC4\u5B50\u9879\u6309\u6307\u5B9A\u5217\u6570\u5206\u7EC4
 * \u8BF4\u660E\uFF1A\u5B9E\u73B0\u4E00\u4E2A\u51FD\u6570\uFF0C\u7ED9\u5B9A\u4E00\u4E2A\u6570\u7EC4\u548C\u5217\u6570\u3002\u5C06\u6570\u7EC4\u5B50\u9879\u6309\u6307\u5B9A\u5217\u6570\u5206\u7EC4\u5E76\u8FD4\u56DE
 * \u793A\u4F8B\uFF1A
 *   group([1, 2 , 3, 4, 5, 6, 7, 8], 3); // [[1, 4, 7], [2, 5, 8], [3, 6]]
 *   group([1, 2 , 3, 4, 5, 6, 7, 8], 2); // [[1, 3, 5, 7], [2, 4, 6, 8]]
 *   group([1, 2 , 3, 4, 5], 1); // [[1, 2, 3, 4, 5]]
 */

function group(array, columns) {
  /** \u4EE3\u7801\u5B9E\u73B0 */
  let result = [];
  for (let i = 0; i < columns; i++) {
    result.push([]);
  }

  for (let i = 0; i < array.length; i++) {
    result[i % columns].push(array[i]);
  }
  return result;
}


/**
 * \u6570\u7EC4\u4EA4\u9519\u91CD\u6392\u5E8F
 * \u8BF4\u660E\uFF1A\u7ED9\u5B9A\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6309\u6307\u5B9A\u4E2A\u6570\u62C6\u5206\u591A\u4EFD\uFF0C\u5E76\u5BF9\u6BCF\u4E00\u4EFD\u8FDB\u884C\u5347\u5E8F\u6392\u5E8F\uFF0C
 *   \u6BD4\u5982\u4E00\u4E2A6\u4E2A\u6570\u636E\u9879\u7684\u6570\u7EC4\uFF0C\u6307\u5B9A\u4E2A\u6570\u4E3A3\uFF0C\u5373\u628A\u6570\u7EC4\u6309 2 \u4EFD\u6392\u5E8F
 * \u793A\u4F8B\uFF1A
 *   const list = [4, 2, 5, 6, 3, 1];
 *   // \u6309\u6BCF 2 \u4E2A\u4E00\u4EFD\u5206\u522B\u8FDB\u884C\u5347\u5E8F\u6392\u5E8F
 *   interlaceSort(list, 2); [2, 4, 5, 6, 1, 3]=
 *   interlaceSort(list, 3); [2, 4, 5, 1, 3, 6]
 *   interlaceSort(list, 6); [1, 2, 3, 4, 5, 6]
 */

function interlaceSort(list, count) {
  /** \u4EE3\u7801\u5B9E\u73B0 */
  let result = [];
  const columns = Math.ceil(list.length / count);
  for (let i = 0; i < columns; i++) {
    result.push([]);
  }
  
  for (let i = 0; i < list.length; i++) {
    result[Math.floor(i / count)].push(list[i]);
  }

  result = result.reduce((total, cur) => [...total, ...cur.sort()], []);

  return result;
}


/**
 * \u6839\u636E\u8868\u8FBE\u5F0F\u8BA1\u7B97\u5B57\u6BCD\u6570
 * \u8BF4\u660E\uFF1A
 *   \u7ED9\u5B9A\u4E00\u4E2A\u63CF\u8FF0\u5B57\u6BCD\u6570\u91CF\u7684\u8868\u8FBE\u5F0F\uFF0C\u8BA1\u7B97\u8868\u8FBE\u5F0F\u91CC\u7684\u6BCF\u4E2A\u5B57\u6BCD\u5B9E\u9645\u6570\u91CF
 *   \u8868\u8FBE\u5F0F\u683C\u5F0F\uFF1A
 *     \u5B57\u6BCD\u7D27\u8DDF\u8868\u793A\u6B21\u6570\u7684\u6570\u5B57\uFF0C\u5982 A2B3
 *     \u62EC\u53F7\u53EF\u5C06\u8868\u8FBE\u5F0F\u5C40\u90E8\u5206\u7EC4\u540E\u8DDF\u4E0A\u6570\u5B57\uFF0C(A2)2B
 *     \u6570\u5B57\u4E3A1\u65F6\u53EF\u7F3A\u7701\uFF0C\u5982 AB3\u3002
 * \u793A\u4F8B\uFF1A
 *   countOfLetters('A2B3'); // { A: 2, B: 3 }
 *   countOfLetters('A(A3B)2'); // { A: 7, B: 2 }
 *   countOfLetters('C4(A(A3B)2)2'); // { A: 14, B: 4, C: 4 }
 */

// https://www.jiuzhang.com/solution/number-of-atoms/#tag-highlight-lang-python
// https://leetcode-cn.com/problems/number-of-atoms/solution/yuan-zi-de-shu-liang-by-leetcode/
/**
 * 1 \u538B\u6808\u7684\u76EE\u7684\u662F\u4EC0\u4E48\uFF1F
 * 2 \u538B\u6808\u538B\u7684\u662F\u4EC0\u4E48\uFF1F
 * \u8FD9\u91CC\u7684\u538B\u6808\u538B\u7684\u662F\uFF1A\u5BF9\u7D27\u63A5\u7740\u7684\u4E0B\u4E00\u6B65\u7684\u5904\u7406
 * @param letters 
 */
function countOfLetters(letters) {
  const reg = /([A-Z][a-z]*)(\\d*)|(\\()|(\\))(\\d*)/g;
  const stack = [{}];
  let curRes;
  while((curRes = reg.exec(letters)) !== null) {
    const [, name, m1, left_open, right_open, m2] = curRes;
    if(name) {
      const len = stack.length;
      if(!Object.keys(stack[len-1]).includes(name)) {
        stack[len-1][name] = 0;
      }
      stack[len-1][name] = (m1 === '' ? 1: stack[len-1][name] + parseInt(m1));
    }
    if(left_open) {
      stack.push({});
    }
    if(right_open) {
      const top = stack.pop();
      const len = stack.length;
      
      for(const k of Object.keys(top)) {
        if(!Object.keys(stack[len-1]).includes(k)) {
          stack[len-1][k] = 0;
        }
        stack[len-1][k] += top[k] * (m2 === '' ? 1 : parseInt(m2));
      }
    }
  }
  const map = new Map();
  const ordered_keys = Object.keys(stack[0]).sort();
  for(const key of ordered_keys) {
    map.set(key, stack[0][key]);
  }
  for(const [key, value] of map) {
  console.log(key, value);
  }
}

countOfLetters('C4(A(A3B)2)2'); // { A: 14, B: 4, C: 4 }

countOfLetters('C4(A(A3B)2)2'); // { A: 14, B: 4, C: 4 }

countOfLetters('C4(A(A3B)2)2')

// \u62EC\u53F7\u5339\u914D
const isMatch = (str) => {
  const s = [];
  let bracket = '';
  for(let i = 0; i < str.length; i++) {
    bracket = str[i];
    if(bracket === "(") {
        s.push(bracket)
    } else if(bracket === ")") {
      if( !s.length ){
        return false;
      }
      s.pop();
    }
  }

  return !s.length;
}

`)),u("pre",null,u("code",{parentName:"pre"},`Leetcode 746
\u6709\u4E00\u4E2A\u697C\u68AF\uFF0C\u7B2Ci\u9636\u7528cost[i]\uFF08\u975E\u8D1F\uFF09\u8868\u793A\u6210\u672C\u3002\u73B0\u5728\u4F60\u9700\u8981\u652F\u4ED8\u8FD9\u4E9B\u6210\u672C\uFF0C\u53EF\u4EE5\u4E00\u6B21\u8D70\u4E24\u9636\u4E5F\u53EF\u4EE5\u8D70\u4E00\u9636\uFF0C\u6CE8\u610F\u722C\u4E24\u9636\u53EA\u9700\u8981\u90A3\u4E24\u9636\u7684\u7B2C\u4E00\u4E2A\u6210\u672C\u4F5C\u4E3A\u603B\u6210\u672C\u4E0D\u9700\u8981\u4E24\u9636\u6210\u672C\u76F8\u52A0\u3002 \u95EE\u4ECE\u5730\u9762\u6216\u8005\u7B2C\u4E00\u9636\u51FA\u53D1\uFF0C\u600E\u4E48\u8D70\u6210\u672C\u6700\u5C0F\u3002

Input: cost = [10, 15, 20]
Output: 15
Explanation: \u4ECE\u7B2C\u4E00\u9636\u51FA\u53D1\uFF0C\u4E00\u6B21\u8D70\u4E24\u6B65
 
Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
Output: 6
Explanation: \u4ECE\u5730\u9762\u51FA\u53D1\uFF0C\u8D70\u4E24\u6B65\uFF0C\u8D70\u4E24\u6B65\uFF0C\u8D70\u4E24\u6B65\uFF0C\u8D70\u4E00\u6B65\uFF0C\u8D70\u4E24\u6B65\uFF0C\u8D70\u4E00\u6B65\u3002

dp\u53EF\u89E3\u51B3\uFF1A\u5230\u7B2Cn\u9636\u65F6\uFF0C\u4E00\u5B9A\u4E3A\u524D n-1\u9636\u7684\u82B1\u8D39\u548Cn-2\u9636\u82B1\u8D39\u7684\u6700\u5C0F\u503C\uFF0C
\u800C n-1\u9636\u82B1\u8D39\u600E\u4E48\u7B97\u7684\u5462\uFF1F\u5B83\u662Fn-1\u9636\u4E4B\u524D\u7684\u82B1\u8D39\u603B\u548C\u52A0\u4E0A\u7B2Cn-1\u9636\u7684\u82B1\u8D39\u3002
result[i+1] = min(cost[i] + result[i], cost[i-1] + result[i-1])
`)),u("pre",null,u("code",{parentName:"pre"},`leetcode\u3011Python\u5B9E\u73B0-14.\u6700\u957F\u516C\u5171\u524D\u7F00
\u7F16\u5199\u4E00\u4E2A\u51FD\u6570\u6765\u67E5\u627E\u5B57\u7B26\u4E32\u6570\u7EC4\u4E2D\u6700\u957F\u7684\u516C\u5171\u524D\u7F00\u5B57\u7B26\u4E32\u3002
`)))}F.isMDXComponent=!0;var r=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));const s={};s.main=r;export{s as default};
