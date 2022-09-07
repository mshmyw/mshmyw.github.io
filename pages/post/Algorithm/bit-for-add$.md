---
title: "Bit for Add"
date: 2019-11-09T10:43:33+08:00
draft: false
categories: ["add"]
series: ["add"]
---

# [位运算实现加法](https://www.kancloud.cn/digest/pieces-algorithm/163615)

## 分析普通加法运算过程：

```
3+2=5
3+9=12
13+98=111
```

**拆分运算：**

1 不考虑进位，结果为sum:

```
3+2=5
3+9=2
13+98=01
```

2 只考虑进位,结果为carry：

```
3+2=0
3+9=10
13+98=110
```

我们发现加法的最终结果其实是不考虑进位所得sum和只考虑进位所得carry的和。当carry为0时，只需执行步骤1即可。因此：

3 加法和运算等价于将1和2相加：

将步骤1sum和步骤2 carry相加，如果所得carry为0，则结束；

否则继续1和2

# 位运算

上述十进制过程同样适用于二进制。并且观察可发现：

**不考虑进位的加法其实就是异或运算**

**只考虑进位就是与运算并左移一位**



python代码实现如下：

```
# 迭代
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

# 递归
def add_recur(a, b):
  if b == 0:
    return a

  sum = a^b
  carry = (a&b)<<1
  return add_recur(sum,carry)

add_iter(3, 28)
print(add_recur(3, 28))
```



四则运算中加法是基础，有了加法，其余的乘除减均是以加法为根基变换得到。