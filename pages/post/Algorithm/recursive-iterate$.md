---
title: "Recursive Iterate"
date: 2020-01-11T21:26:35+08:00
draft: false
categories: ["recursive"]
series: ["recursive"]
---

# 让我们谈谈递归和迭代

## 递归的思维模型

## 迭代的思维模型

### for循环

循环体：怎么才是一个循环体？

如下例子1：

```
# 迭代
def add_iter(a, b):
  # 第一次执行,这时a,b已经从外部得到了初始值
  sum = a^b
  carry = (a&b) << 1
    
  while carry:
    # 循环体中反复的过程：1 初始化 2 求值
    a = sum
    b = carry
    sum = a^b
    carry = (a&b) << 1
    
  print(sum)

add_iter(783, 355)

# 递归
def add_recur(a, b):
  if b == 0:
    return a

  sum = a^b
  carry = (a&b)<<1
  return add_recur(sum,carry)
```

如下二：

```
a = 1
b = 1
s = a + b
i = 0

# 循环体中反复的过程：1 初始化 2 求值
while i < 10:
  a = b
  b = s
  s = a + b
  print(s,a,b)
  i = i + 1

print(s)

```



实例3：

```
# 不清晰的写法
def max_bucket(num):
  """
  平面最大桶面积
  思路：左右两个指针夹逼
  步骤：
  1. 算当前面积。左边i，右边j，算出当前面积S(i,j)
  2. 更新面积。将当前面积与历史最大面积比较，更新当前最大历史面积
  3. 移动指针。比较i，j所处高度，决定更新i或j指针
  复杂度：O(n)
  关键点：第2步和第3步，重点理解第3步
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

# 更加清晰的写法
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
```

实例3 中 第2种更符合思维模型，因为循环体中的计算方式跟循环体外的是一致的，都是：1 初始化变量 2 得到结果 ，循环体多的东西无非就是循环终止条件。

实例4

```
f[i] = cost[i] + min(f[i+1], f[i+2])
```

实例4是一个dp方程，这里变动的是数组的下标，并不是重复的改变一个变量的值，所以这里只需要在循环体中变动i，并且i自增即可。



## 如何深度递归拷贝一个复杂对象？

怎么思考这个问题呢？

思路就是从简单到复杂 

写法是递归的 每一步的思路是迭代的

总共两步： 1 打印遍历 2 存储

1 用递归递归遍历，打印原始对象如何做？

2 第1步做到之后，想一下递归过程中如何将遍历的信息储存？用返回值？用迭代一样思考每一步

3 从简单到复杂开始演化

```
1 遍历一个简单列表
const a = [1,2];
const cp = (src) => {
	for(const item of a) {
		console.log(item);
	}
	return;
}
2 遍历 子列表
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

3 遍历并复制
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

4 包含对象呢？
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

5 子对象中也包含对象呢？

const a = [1,2, [3,4], {'a': 3, 'b': 4， 'e': [3,], 'f': {'mm': 1}}];
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
显然发现子对象里包含列表的话，只用递归自己的cp函数即可，但是包含子对象其实又是一个递归，不过这个递归很特别，它是另一个递归，需要将这部分单独抽取成一个子递归函数，对对象的递归，且这个对象里其实又包含了父函数列表的递归。
所以这里牵涉到了递归的嵌套！

6. 完整版
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
```

