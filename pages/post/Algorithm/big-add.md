---
title: "Big Add"
date: 2020-07-19T17:07:12+08:00
draft: true
---

def bigAdd(left, right):

  '''

  利用字符串循环 完成大数相加

  s = 9999 + 1111

  '''

  curry = 0

  sum = ''

  i, j = len(left) - 1, len(right) - 1



  while True:

​    if i >= 0:

​      a = left[i]

​    else:

​      a = 0

​    if j >= 0:

​      b = right[j]

​    else: 

​      b = 0



​    print(a, b)

​    aNum, bNum = int(a), int(b)

​    s = aNum + bNum + curry

​    if s == 0: # 判断终止条件

​      break



​    cur = s % 10

​    curry = s // 10

​    sum = str(cur) + sum



​    i -= 1

​    j -= 1





  print(sum)

  return s



bigAdd('999999999999999', '1')



