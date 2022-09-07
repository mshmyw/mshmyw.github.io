---
title: "Flattern Array"
date: 2019-12-30T23:03:43+08:00
draft: false
categories: ["array"]
series: ["array"]
---

# 拍平数组

"""

编写一个函数，接受一个仅包含数字的 多维数组 ，返回拍平以后的结果。例如传入：[1, [[2], 3, 4], 5]，返回 [1, 2, 3, 4, 5]。

"""

## 前言（方法论）：

> 做任何事都是有一定套路的，比如在面对一件复杂的事情时你该怎么做呢？这时候一种办法是简化它，将太多的干扰因素去掉后，看看这时能否解决，如果不行，那么进一步简化，知道你能够理解它，解决它。
>
> 其实这就是一种递归解决问题的方案。

```
const flattern = (list, result=[]) => {
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
```



```
/**
字符串消除，
给定一个小写字母的字符串S，重复删除两个相邻且相等的字母。

我们在S上反复删除，直到我们再也无法删除。

在完成所有此类重复删除后返回最后一个字符串。保证答案是独一无二的。
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
```



# other

```
/**
 * 字符串隐藏部分内容
 * 说明：实现一个方法，接收一个字符串和一个符号，将字符串中间四位按指定符号隐藏
 *   1. 符号无指定时使用星号（*）
 *   2. 接收的字符串小于或等于四位时，返回同样长度的符号串，等同于全隐藏，如 123，隐藏后是 ***
 *   3. 字符串长度是大于四位的奇数时，如 123456789，隐藏后是 12****789，奇数多出来的一位在末尾
 * 示例：
 *   mask('alibaba', '#');  // a####ba
 *   mask('85022088');   // 85****88
 *   mask('hello');  // ****o
 *   mask('abc', '?');  // ???
 *   mask('阿里巴巴集团', '?'); // 阿????团
 */
function mask(str, char='*') {
  /* 代码实现 */
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
 * 数组子项按指定列数分组
 * 说明：实现一个函数，给定一个数组和列数。将数组子项按指定列数分组并返回
 * 示例：
 *   group([1, 2 , 3, 4, 5, 6, 7, 8], 3); // [[1, 4, 7], [2, 5, 8], [3, 6]]
 *   group([1, 2 , 3, 4, 5, 6, 7, 8], 2); // [[1, 3, 5, 7], [2, 4, 6, 8]]
 *   group([1, 2 , 3, 4, 5], 1); // [[1, 2, 3, 4, 5]]
 */

function group(array, columns) {
  /** 代码实现 */
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
 * 数组交错重排序
 * 说明：给定一个数组，按指定个数拆分多份，并对每一份进行升序排序，
 *   比如一个6个数据项的数组，指定个数为3，即把数组按 2 份排序
 * 示例：
 *   const list = [4, 2, 5, 6, 3, 1];
 *   // 按每 2 个一份分别进行升序排序
 *   interlaceSort(list, 2); [2, 4, 5, 6, 1, 3]=
 *   interlaceSort(list, 3); [2, 4, 5, 1, 3, 6]
 *   interlaceSort(list, 6); [1, 2, 3, 4, 5, 6]
 */

function interlaceSort(list, count) {
  /** 代码实现 */
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
 * 根据表达式计算字母数
 * 说明：
 *   给定一个描述字母数量的表达式，计算表达式里的每个字母实际数量
 *   表达式格式：
 *     字母紧跟表示次数的数字，如 A2B3
 *     括号可将表达式局部分组后跟上数字，(A2)2B
 *     数字为1时可缺省，如 AB3。
 * 示例：
 *   countOfLetters('A2B3'); // { A: 2, B: 3 }
 *   countOfLetters('A(A3B)2'); // { A: 7, B: 2 }
 *   countOfLetters('C4(A(A3B)2)2'); // { A: 14, B: 4, C: 4 }
 */

// https://www.jiuzhang.com/solution/number-of-atoms/#tag-highlight-lang-python
// https://leetcode-cn.com/problems/number-of-atoms/solution/yuan-zi-de-shu-liang-by-leetcode/
/**
 * 1 压栈的目的是什么？
 * 2 压栈压的是什么？
 * 这里的压栈压的是：对紧接着的下一步的处理
 * @param letters 
 */
function countOfLetters(letters) {
  const reg = /([A-Z][a-z]*)(\d*)|(\()|(\))(\d*)/g;
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

// 括号匹配
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

```



```
Leetcode 746
有一个楼梯，第i阶用cost[i]（非负）表示成本。现在你需要支付这些成本，可以一次走两阶也可以走一阶，注意爬两阶只需要那两阶的第一个成本作为总成本不需要两阶成本相加。 问从地面或者第一阶出发，怎么走成本最小。

Input: cost = [10, 15, 20]
Output: 15
Explanation: 从第一阶出发，一次走两步
 
Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
Output: 6
Explanation: 从地面出发，走两步，走两步，走两步，走一步，走两步，走一步。

dp可解决：到第n阶时，一定为前 n-1阶的花费和n-2阶花费的最小值，
而 n-1阶花费怎么算的呢？它是n-1阶之前的花费总和加上第n-1阶的花费。
result[i+1] = min(cost[i] + result[i], cost[i-1] + result[i-1])
```



```
leetcode】Python实现-14.最长公共前缀
编写一个函数来查找字符串数组中最长的公共前缀字符串。
```

