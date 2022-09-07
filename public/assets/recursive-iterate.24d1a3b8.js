import{c as u}from"./index.89b4627b.js";const n={},o="wrapper";function F({components:e,...t}){return u(o,{...n,...t,components:e,mdxType:"MDXLayout"},u("h1",null,"\u8BA9\u6211\u4EEC\u8C08\u8C08\u9012\u5F52\u548C\u8FED\u4EE3"),u("h2",null,"\u9012\u5F52\u7684\u601D\u7EF4\u6A21\u578B"),u("h2",null,"\u8FED\u4EE3\u7684\u601D\u7EF4\u6A21\u578B"),u("h3",null,"for\u5FAA\u73AF"),u("p",null,"\u5FAA\u73AF\u4F53\uFF1A\u600E\u4E48\u624D\u662F\u4E00\u4E2A\u5FAA\u73AF\u4F53\uFF1F"),u("p",null,"\u5982\u4E0B\u4F8B\u5B501\uFF1A"),u("pre",null,u("code",{parentName:"pre"},`# \u8FED\u4EE3
def add_iter(a, b):
  # \u7B2C\u4E00\u6B21\u6267\u884C,\u8FD9\u65F6a,b\u5DF2\u7ECF\u4ECE\u5916\u90E8\u5F97\u5230\u4E86\u521D\u59CB\u503C
  sum = a^b
  carry = (a&b) << 1
    
  while carry:
    # \u5FAA\u73AF\u4F53\u4E2D\u53CD\u590D\u7684\u8FC7\u7A0B\uFF1A1 \u521D\u59CB\u5316 2 \u6C42\u503C
    a = sum
    b = carry
    sum = a^b
    carry = (a&b) << 1
    
  print(sum)

add_iter(783, 355)

# \u9012\u5F52
def add_recur(a, b):
  if b == 0:
    return a

  sum = a^b
  carry = (a&b)<<1
  return add_recur(sum,carry)
`)),u("p",null,"\u5982\u4E0B\u4E8C\uFF1A"),u("pre",null,u("code",{parentName:"pre"},`a = 1
b = 1
s = a + b
i = 0

# \u5FAA\u73AF\u4F53\u4E2D\u53CD\u590D\u7684\u8FC7\u7A0B\uFF1A1 \u521D\u59CB\u5316 2 \u6C42\u503C
while i < 10:
  a = b
  b = s
  s = a + b
  print(s,a,b)
  i = i + 1

print(s)

`)),u("p",null,"\u5B9E\u4F8B3\uFF1A"),u("pre",null,u("code",{parentName:"pre"},`# \u4E0D\u6E05\u6670\u7684\u5199\u6CD5
def max_bucket(num):
  """
  \u5E73\u9762\u6700\u5927\u6876\u9762\u79EF
  \u601D\u8DEF\uFF1A\u5DE6\u53F3\u4E24\u4E2A\u6307\u9488\u5939\u903C
  \u6B65\u9AA4\uFF1A
  1. \u7B97\u5F53\u524D\u9762\u79EF\u3002\u5DE6\u8FB9i\uFF0C\u53F3\u8FB9j\uFF0C\u7B97\u51FA\u5F53\u524D\u9762\u79EFS(i,j)
  2. \u66F4\u65B0\u9762\u79EF\u3002\u5C06\u5F53\u524D\u9762\u79EF\u4E0E\u5386\u53F2\u6700\u5927\u9762\u79EF\u6BD4\u8F83\uFF0C\u66F4\u65B0\u5F53\u524D\u6700\u5927\u5386\u53F2\u9762\u79EF
  3. \u79FB\u52A8\u6307\u9488\u3002\u6BD4\u8F83i\uFF0Cj\u6240\u5904\u9AD8\u5EA6\uFF0C\u51B3\u5B9A\u66F4\u65B0i\u6216j\u6307\u9488
  \u590D\u6742\u5EA6\uFF1AO(n)
  \u5173\u952E\u70B9\uFF1A\u7B2C2\u6B65\u548C\u7B2C3\u6B65\uFF0C\u91CD\u70B9\u7406\u89E3\u7B2C3\u6B65
  """
  i,j = 0, len(num) - 1 
  S = 0
  while i < j:
    currentS = min(num[i], num[j])*(j - i)
    S = max(S, currentS)

    # Note: when equal high
    if num[i] <= num[j]:
      i = i + 1
    else:
      j = j - 1

  print('bad ',S)

num = [1,8,6,2,5,4,8,3,7]
max_bucket(num)

# \u66F4\u52A0\u6E05\u6670\u7684\u5199\u6CD5
i, j = 0, len(num) - 1
s = -1
s_cur = min(num[i], num[j])*(j - i)
s = max(s, s_cur)

while(i < j):
  if num[i] < num[j]:
    i = i + 1
  else:
    j = j - 1
  
  s_cur = min(num[i], num[j])*(j - i)
  s = max(s, s_cur)

print('good ', s)
`)),u("p",null,"\u5B9E\u4F8B3 \u4E2D \u7B2C2\u79CD\u66F4\u7B26\u5408\u601D\u7EF4\u6A21\u578B\uFF0C\u56E0\u4E3A\u5FAA\u73AF\u4F53\u4E2D\u7684\u8BA1\u7B97\u65B9\u5F0F\u8DDF\u5FAA\u73AF\u4F53\u5916\u7684\u662F\u4E00\u81F4\u7684\uFF0C\u90FD\u662F\uFF1A1 \u521D\u59CB\u5316\u53D8\u91CF 2 \u5F97\u5230\u7ED3\u679C \uFF0C\u5FAA\u73AF\u4F53\u591A\u7684\u4E1C\u897F\u65E0\u975E\u5C31\u662F\u5FAA\u73AF\u7EC8\u6B62\u6761\u4EF6\u3002"),u("p",null,"\u5B9E\u4F8B4"),u("pre",null,u("code",{parentName:"pre"},`f[i] = cost[i] + min(f[i+1], f[i+2])
`)),u("p",null,"\u5B9E\u4F8B4\u662F\u4E00\u4E2Adp\u65B9\u7A0B\uFF0C\u8FD9\u91CC\u53D8\u52A8\u7684\u662F\u6570\u7EC4\u7684\u4E0B\u6807\uFF0C\u5E76\u4E0D\u662F\u91CD\u590D\u7684\u6539\u53D8\u4E00\u4E2A\u53D8\u91CF\u7684\u503C\uFF0C\u6240\u4EE5\u8FD9\u91CC\u53EA\u9700\u8981\u5728\u5FAA\u73AF\u4F53\u4E2D\u53D8\u52A8i\uFF0C\u5E76\u4E14i\u81EA\u589E\u5373\u53EF\u3002"),u("h2",null,"\u5982\u4F55\u6DF1\u5EA6\u9012\u5F52\u62F7\u8D1D\u4E00\u4E2A\u590D\u6742\u5BF9\u8C61\uFF1F"),u("p",null,"\u600E\u4E48\u601D\u8003\u8FD9\u4E2A\u95EE\u9898\u5462\uFF1F"),u("p",null,"\u601D\u8DEF\u5C31\u662F\u4ECE\u7B80\u5355\u5230\u590D\u6742 "),u("p",null,"\u5199\u6CD5\u662F\u9012\u5F52\u7684 \u6BCF\u4E00\u6B65\u7684\u601D\u8DEF\u662F\u8FED\u4EE3\u7684"),u("p",null,"\u603B\u5171\u4E24\u6B65\uFF1A 1 \u6253\u5370\u904D\u5386 2 \u5B58\u50A8"),u("p",null,"1 \u7528\u9012\u5F52\u9012\u5F52\u904D\u5386\uFF0C\u6253\u5370\u539F\u59CB\u5BF9\u8C61\u5982\u4F55\u505A\uFF1F"),u("p",null,"2 \u7B2C1\u6B65\u505A\u5230\u4E4B\u540E\uFF0C\u60F3\u4E00\u4E0B\u9012\u5F52\u8FC7\u7A0B\u4E2D\u5982\u4F55\u5C06\u904D\u5386\u7684\u4FE1\u606F\u50A8\u5B58\uFF1F\u7528\u8FD4\u56DE\u503C\uFF1F\u7528\u8FED\u4EE3\u4E00\u6837\u601D\u8003\u6BCF\u4E00\u6B65"),u("p",null,"3 \u4ECE\u7B80\u5355\u5230\u590D\u6742\u5F00\u59CB\u6F14\u5316"),u("pre",null,u("code",{parentName:"pre"},`1 \u904D\u5386\u4E00\u4E2A\u7B80\u5355\u5217\u8868
const a = [1,2];
const cp = (src) => {
    for(const item of a) {
        console.log(item);
    }
    return;
}
2 \u904D\u5386 \u5B50\u5217\u8868
const a = [1,2, [3,4]];
const cp = (src) => {
    for(const item of a) {
        if(typeof item !== 'object') {
                console.log(item);
    }else if(item instanceof(Array)){
      cp(item);
    }
    }
    return;
}

3 \u904D\u5386\u5E76\u590D\u5236
const a = [1,2, [3,4]];
const cp = (src) => {
    for(const item of a) {
        if(typeof item !== 'object') {
                console.log(item);
    }else if(item instanceof(Array)){
      const inner = cp(item);
      cur_list.push(inner);
    }
    }
    return;
}

4 \u5305\u542B\u5BF9\u8C61\u5462\uFF1F
const a = [1,2, [3,4], {'a': 3, 'b': 4}];
const cp = (src) => {
    for(const item of a) {
        if(typeof item !== 'object') {
                console.log(item);
    }else if(item instanceof(Array)){
      const inner = cp(item);
      cur_list.push(inner);
    } else {
      const obj = {};
      for(const key of Object.keys(item)) {
        if(typeof item[key] !== 'object') {
          obj[key] = item[key];
        }
      }
      cur_list.push(obj);
    }
    }
    return;
}

5 \u5B50\u5BF9\u8C61\u4E2D\u4E5F\u5305\u542B\u5BF9\u8C61\u5462\uFF1F

const a = [1,2, [3,4], {'a': 3, 'b': 4\uFF0C 'e': [3,], 'f': {'mm': 1}}];
const cp = (src) => {
    for(const item of a) {
        if(typeof item !== 'object') {
                console.log(item);
    }else if(item instanceof(Array)){
      const inner = cp(item);
      cur_list.push(inner);
    } else {
      const obj = {};
      for(const key of Object.keys(item)) {
        if(typeof item[key] !== 'object') {
          obj[key] = item[key];
        } else if(item[key] instanceof(Array)) {
          const arr = cp(item[key]);
          obj[key] = arr;
        } else {
          // get obj value???
          const objValue = ???;
          obj[key] = objValue;
        }
      }
      cur_list.push(obj);
    }
    }
    return;
}
\u663E\u7136\u53D1\u73B0\u5B50\u5BF9\u8C61\u91CC\u5305\u542B\u5217\u8868\u7684\u8BDD\uFF0C\u53EA\u7528\u9012\u5F52\u81EA\u5DF1\u7684cp\u51FD\u6570\u5373\u53EF\uFF0C\u4F46\u662F\u5305\u542B\u5B50\u5BF9\u8C61\u5176\u5B9E\u53C8\u662F\u4E00\u4E2A\u9012\u5F52\uFF0C\u4E0D\u8FC7\u8FD9\u4E2A\u9012\u5F52\u5F88\u7279\u522B\uFF0C\u5B83\u662F\u53E6\u4E00\u4E2A\u9012\u5F52\uFF0C\u9700\u8981\u5C06\u8FD9\u90E8\u5206\u5355\u72EC\u62BD\u53D6\u6210\u4E00\u4E2A\u5B50\u9012\u5F52\u51FD\u6570\uFF0C\u5BF9\u5BF9\u8C61\u7684\u9012\u5F52\uFF0C\u4E14\u8FD9\u4E2A\u5BF9\u8C61\u91CC\u5176\u5B9E\u53C8\u5305\u542B\u4E86\u7236\u51FD\u6570\u5217\u8868\u7684\u9012\u5F52\u3002
\u6240\u4EE5\u8FD9\u91CC\u7275\u6D89\u5230\u4E86\u9012\u5F52\u7684\u5D4C\u5957\uFF01

6. \u5B8C\u6574\u7248
const obj = {'a': 3, 'b': 4, 'c': [3,4,8], 'd': {'ff': 'last',
  'e': 'goodjob', 'mm': {'e': 9999}}};

const list = [
  1,2,
  '2', '3', 'end',
  [4,5, [3, 8]],
  [7, 0, '22'],
  obj,
  7
];

const cpObj = (item) => {
      const obj = {};
      for(const key of Object.keys(item)) {
        if(typeof item[key] !== 'object') {
          obj[key] = item[key];
        }else if(item[key] instanceof(Array)) {
          const arr = cpList(item[key]);
          obj[key] = arr;
        } else {
          // get obj value
          const objValue = cpObj(item[key]);
          obj[key] = objValue;
        }
      }

      return obj;
}

const cpList = (src) => {
  console.log('stack: ', src);
  if(src.length === 0) {
    return [];
  }
  const cur_list = [];
  for (const item of src) {
    if(typeof item !== 'object') {
      cur_list.push(item);
    }else if(item instanceof(Array)){
      const inner = cpList(item);
      cur_list.push(inner);
    }else {
      const obj = cpObj(item);
      cur_list.push(obj);
    }
  }
  return cur_list;
}

const res = cpList(list);
console.log(res);
const res2 = cpObj(obj);
console.log(res2);
`)))}F.isMDXComponent=!0;var i=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));const r={};r.main=i;export{r as default};
